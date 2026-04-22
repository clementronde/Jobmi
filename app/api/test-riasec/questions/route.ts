import { NextResponse } from 'next/server';
import { RIASEC_QUESTIONS } from '@/data/riasecData';

export async function GET() {
  return NextResponse.json({ questions: RIASEC_QUESTIONS });
}
