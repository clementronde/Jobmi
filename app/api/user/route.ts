import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'
import supabaseAdmin from '@/lib/supabaseAdmin'

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

  return NextResponse.json({
    firstName: user.first_name ?? '',
    lastName: user.last_name ?? '',
    email: user.email ?? '',
    city: user.city ?? '',
    phone: user.phone ?? '',
    image: user.image ?? '',
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
