import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HEROKU_API = 'https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api';

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

  // Forward to backend — best-effort, never blocks the user
  try {
    await fetch(`${HEROKU_API}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name: name ?? '', riasecCode: dominantCode ?? '', source: 'riasec-test' }),
    });
  } catch {
    // Backend unavailable — log but don't fail the request
    console.warn('[riasec/lead] Could not forward lead to backend:', email);
  }

  return NextResponse.json({ ok: true });
}
