import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const HEROKU_API = 'https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api';

async function notifyByEmail(email: string, name: string, code: string) {
  if (!process.env.NOTIFY_EMAIL_USER || !process.env.NOTIFY_EMAIL_PASS) return;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.NOTIFY_EMAIL_USER, pass: process.env.NOTIFY_EMAIL_PASS },
  });
  await transporter.sendMail({
    from: process.env.NOTIFY_EMAIL_USER,
    to: 'contact@jobmi.fr',
    subject: `Nouveau lead test RIASEC — ${code}`,
    text: `Nom : ${name || '(non renseigné)'}\nEmail : ${email}\nCode RIASEC : ${code}\nSource : test d'orientation`,
  });
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { email, name, dominantCode } = body as {
    email?: string;
    name?: string;
    dominantCode?: string;
  };

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
  }

  // Forward to backend + notification email — best-effort, never blocks the user
  await Promise.allSettled([
    fetch(`${HEROKU_API}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name: name ?? '', riasecCode: dominantCode ?? '', source: 'riasec-test' }),
    }),
    notifyByEmail(email, name ?? '', dominantCode ?? ''),
  ]);

  return NextResponse.json({ ok: true });
}
