import { NextRequest, NextResponse } from 'next/server';
import { searchCompanyLeads } from '@/lib/franceTravail/companies';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const result = await searchCompanyLeads({
    romeCode: searchParams.get('rome') ?? undefined,
    location: searchParams.get('location') ?? undefined,
  });

  return NextResponse.json(result);
}
