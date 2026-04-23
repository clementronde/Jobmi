import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import supabaseAdmin from '@/lib/supabaseAdmin'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { firstName, lastName, email, city, password, phone } = body as Record<string, string>

  if (!email || !password || !firstName || !lastName) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  const { data: existing } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('email', email)
    .single()

  if (existing) {
    return NextResponse.json({ error: 'Email déjà utilisé' }, { status: 409 })
  }

  const password_hash = await bcrypt.hash(password, 12)

  const { data: user, error } = await supabaseAdmin
    .from('users')
    .insert({
      name: `${firstName} ${lastName}`,
      email,
      first_name: firstName,
      last_name: lastName,
      city: city ?? '',
      phone: phone ?? '',
      password_hash,
    })
    .select('id, email, name')
    .single()

  if (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 })
  }

  return NextResponse.json({ ok: true, user })
}
