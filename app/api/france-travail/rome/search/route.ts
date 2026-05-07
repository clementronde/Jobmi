import { NextRequest, NextResponse } from 'next/server';
import { searchRomeJobs, suggestRomeFromFreeText } from '@/lib/franceTravail/rome';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') ?? '';
  const freeText = request.nextUrl.searchParams.get('text');

  const result = freeText ? await suggestRomeFromFreeText(freeText) : await searchRomeJobs(query);
  return NextResponse.json(result);
}
