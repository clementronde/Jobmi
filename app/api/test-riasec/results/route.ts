import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { RiasecAnswer } from '@/types/riasec';
import { RIASEC_QUESTIONS } from '@/data/riasecData';
import { computeTestResult } from '@/services/riasecService';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const answers = (body as { answers?: unknown }).answers;

  if (!Array.isArray(answers) || answers.length === 0) {
    return NextResponse.json({ error: "'answers' must be a non-empty array" }, { status: 400 });
  }

  for (const answer of answers) {
    const a = answer as RiasecAnswer;
    if (
      typeof a.questionId !== 'string' ||
      typeof a.score !== 'number' ||
      a.score < 1 ||
      a.score > 5 ||
      !Number.isInteger(a.score)
    ) {
      return NextResponse.json(
        { error: 'Each answer must have a questionId (string) and a score (integer 1–5)' },
        { status: 400 }
      );
    }
  }

  const result = computeTestResult(answers as RiasecAnswer[], RIASEC_QUESTIONS);
  return NextResponse.json(result);
}
