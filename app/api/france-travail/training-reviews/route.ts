import { NextRequest, NextResponse } from 'next/server';
import { searchTrainingReviews } from '@/lib/franceTravail/training';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const result = await searchTrainingReviews({
    romeCode: searchParams.get('rome') ?? undefined,
    rncp: searchParams.get('rncp') ?? undefined,
    location: searchParams.get('location') ?? undefined,
  });

  return NextResponse.json(result);
}
