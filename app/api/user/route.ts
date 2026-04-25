import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'
import supabaseAdmin from '@/lib/supabaseAdmin'
import { RIASEC_QUESTIONS } from '@/data/riasecData'
import { computeTestResult } from '@/services/riasecService'
import type { RiasecAnswer } from '@/types/riasec'

export async function GET() {
  const session = await getServerSession()
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }

  const { data: user, error } = await supabaseAdmin
    .from('users')
    .select('id, name, email, first_name, last_name, city, phone, image')
    .eq('email', session.user.email)
    .single()

  if (error || !user) {
    return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 })
  }

  const { data: latestLead } = await supabaseAdmin
    .from('leads')
    .select('riasec_code, scores, answers, created_at')
    .eq('email', session.user.email)
    .eq('source', 'riasec-test')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  let riasec = null

  if (latestLead?.answers && Array.isArray(latestLead.answers)) {
    const computed = computeTestResult(latestLead.answers as RiasecAnswer[], RIASEC_QUESTIONS)
    riasec = {
      dominantCode: computed.profile.dominantCode,
      scores: computed.profile.normalizedScores,
      jobs: computed.suggestedJobs,
      allJobs: computed.allJobs,
      testedAt: latestLead.created_at ?? null,
    }
  } else if (latestLead?.scores && latestLead?.riasec_code) {
    riasec = {
      dominantCode: latestLead.riasec_code,
      scores: latestLead.scores,
      jobs: [],
      allJobs: [],
      testedAt: latestLead.created_at ?? null,
    }
  }

  return NextResponse.json({
    firstName: user.first_name ?? '',
    lastName: user.last_name ?? '',
    email: user.email ?? '',
    city: user.city ?? '',
    phone: user.phone ?? '',
    image: user.image ?? '',
    riasec,
  })
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession()
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { firstName, lastName, city, phone } = body as Record<string, string>

  const { error } = await supabaseAdmin
    .from('users')
    .update({
      first_name: firstName,
      last_name: lastName,
      name: `${firstName} ${lastName}`,
      city,
      phone,
    })
    .eq('email', session.user.email)

  if (error) {
    return NextResponse.json({ error: 'Erreur mise à jour' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
