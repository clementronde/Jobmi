import { NextRequest, NextResponse } from 'next/server';
import { searchApprentissage } from '../../../../lib/apprentissage';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  try {
    const result = await searchApprentissage({
      query: searchParams.get('query') ?? undefined,
      location: searchParams.get('location') ?? undefined,
      diploma: searchParams.get('diploma') ?? undefined,
      radius: searchParams.get('radius') ?? undefined,
    });

    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'APPRENTISSAGE_API_UNKNOWN_ERROR';
    const status = message === 'APPRENTISSAGE_API_KEY_MISSING' ? 503 : 502;

    return NextResponse.json(
      {
        error:
          message === 'APPRENTISSAGE_API_KEY_MISSING'
            ? "La clé API Apprentissage n'est pas configurée côté serveur."
            : "Impossible de récupérer les offres d'alternance pour le moment.",
      },
      { status },
    );
  }
}
