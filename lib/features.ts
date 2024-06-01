import Flagsmith from 'flagsmith-nodejs';

export const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGSMITH_SSR_KEY,
});
