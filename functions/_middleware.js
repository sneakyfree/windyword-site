// Pre-launch gate — HTTP Basic Auth middleware for Cloudflare Pages
// Protects every path until we're ready to launch.
// Env vars (set on the Pages project): GATE_USER (default "preview"), GATE_PASS (required).

const REALM = 'WindyWord Pre-Launch';

export async function onRequest(context) {
  const { request, env, next } = context;
  const expectedUser = env.GATE_USER || 'preview';
  const expectedPass = env.GATE_PASS;
  if (!expectedPass) {
    return new Response('Gate misconfigured: GATE_PASS not set on the Pages project.', { status: 500 });
  }
  const auth = request.headers.get('Authorization') || '';
  if (auth.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6));
      const idx = decoded.indexOf(':');
      if (idx >= 0) {
        const user = decoded.slice(0, idx);
        const pass = decoded.slice(idx + 1);
        if (user === expectedUser && pass === expectedPass) return next();
      }
    } catch (_) {}
  }
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"` }
  });
}
