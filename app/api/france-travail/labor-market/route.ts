import { NextRequest, NextResponse } from 'next/server';
import { getLaborMarketSignal } from '@/lib/franceTravail/laborMarket';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const result = await getLaborMarketSignal({
    romeCode: searchParams.get('rome') ?? undefined,
    location: searchParams.get('location') ?? undefined,
  });

  return NextResponse.json(result);
}
