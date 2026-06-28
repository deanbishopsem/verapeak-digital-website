// Launch gate.
//
// The site is LIVE: production builds serve the full marketing site.
// To temporarily put the coming-soon page back up, set the env var
// PUBLIC_COMING_SOON=true (in Cloudflare Pages → Settings → Environment variables)
// and redeploy.
const override = import.meta.env.PUBLIC_COMING_SOON;

export const COMING_SOON = override === 'true';
