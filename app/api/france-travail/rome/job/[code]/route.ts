import { NextRequest, NextResponse } from 'next/server';
import { getRomeJobSheetByCode } from '@/lib/franceTravail/rome';

type Props = {
  params: Promise<{ code: string }>;
};

export async function GET(_request: NextRequest, { params }: Props) {
  const { code } = await params;
  const sheet = await getRomeJobSheetByCode(code.toUpperCase());

  if (!sheet) {
    return NextResponse.json({ error: 'ROME_JOB_NOT_FOUND' }, { status: 404 });
  }

  return NextResponse.json(sheet);
}
