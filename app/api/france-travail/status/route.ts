import { NextResponse } from 'next/server';
import { checkFranceTravailConnection } from '@/lib/franceTravail/client';

export async function GET() {
  const status = await checkFranceTravailConnection();
  return NextResponse.json(status, { status: status.ok ? 200 : 503 });
}
