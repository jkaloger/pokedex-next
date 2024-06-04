import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
import { merge } from 'lodash';
import Flagsmith from 'flagsmith-nodejs';

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });

  const flagsmith = new Flagsmith({
    environmentKey: process.env.FLAGSMITH_SSR_KEY,
  });

  const flags = await flagsmith.getEnvironmentFlags();
  const definitions = flags.allFlags().map((flag) => ({
    [flag.featureName]: {
      options: [
        { value: false, label: 'Off' },
        { value: true, label: 'On' },
      ],
    },
  }));

  return NextResponse.json<ApiData>({
    definitions: merge({}, ...definitions),
  });
}
