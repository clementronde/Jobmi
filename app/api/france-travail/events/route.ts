import { NextRequest, NextResponse } from 'next/server';
import { searchFranceTravailEvents } from '@/lib/franceTravail/events';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const result = await searchFranceTravailEvents({
    romeCode: searchParams.get('rome') ?? undefined,
    location: searchParams.get('location') ?? undefined,
  });

  return NextResponse.json(result);
}
