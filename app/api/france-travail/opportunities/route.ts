import { NextRequest, NextResponse } from 'next/server';
import { searchOpportunities } from '@/lib/franceTravail/opportunities';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offsetRaw = searchParams.get('offset');
  const offset = offsetRaw ? Math.max(0, parseInt(offsetRaw, 10)) : 0;

  const result = await searchOpportunities({
    romeCode: searchParams.get('rome') ?? undefined,
    location: searchParams.get('location') ?? undefined,
    keyword: searchParams.get('q') ?? undefined,
    contractType: searchParams.get('typeContrat') ?? undefined,
    radius: searchParams.get('radius') ?? undefined,
    offset,
  });

  return NextResponse.json(result);
}
