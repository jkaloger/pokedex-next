'use server';
import { FlagOverridesType, decrypt } from '@vercel/flags';
import { cookies } from 'next/headers';

export async function getFlags() {
  const overrideCookie = cookies().get('vercel-flag-overrides')?.value;
  const overrides = overrideCookie ? await decrypt<FlagOverridesType>(overrideCookie) : {};

  return overrides;
}
