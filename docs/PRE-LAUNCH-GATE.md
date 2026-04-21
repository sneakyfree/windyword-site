# Pre-launch gating — how to re-enable it if you need to

`windyword.ai` was behind a pre-launch Basic-Auth gate from 2026-04-05 through 2026-04-21. The gate was implemented as a Cloudflare Pages Function middleware at `functions/_middleware.js`, with `GATE_USER` / `GATE_PASS` env vars set on the Pages project. It was removed on 2026-04-21 when Windy Word launched publicly.

This doc captures **how to re-add a gate** if Windy Word or a forker ever needs to go back behind a pre-launch veil (e.g. for a private beta, staged rollout, or soft-relaunch).

## TL;DR — two patterns, pick one

| | **Cloudflare Access** (recommended) | **Pages Function middleware** (fallback) |
|---|---|---|
| Effort | Dashboard toggle, 2 minutes | Small code PR |
| Reversible | One click (disable the policy) | Delete the middleware file, redeploy |
| Audit logs | Yes — per-user access logs in Zero Trust | No — just Cloudflare edge logs |
| Who can unlock | Email allowlist, Google/GitHub SSO, GitHub orgs, etc. | Single shared Basic-Auth password |
| Failure mode if misconfigured | Site 403s until policy is fixed | Site 500s if `GATE_PASS` unset |
| Code-in-repo | None — pure platform feature | Code lives in `functions/_middleware.js` |

**Default choice: Cloudflare Access.** Code-in-repo gates are a footgun — they couple deployment to access control and create "which deploy did we have the gate on?" archaeology. Use the middleware pattern only if Access isn't available for some reason.

---

## Pattern A — Cloudflare Access (preferred)

**When to use:** any pre-launch, soft-launch, private-beta, or team-only preview phase.

### Set up

1. Cloudflare Dashboard → **Zero Trust** → **Access** → **Applications** → **Add an application**
2. **Type:** Self-hosted
3. **Application domain:** `windyword.ai` (+ `www.windyword.ai` as an additional domain)
4. **Identity providers:** Google / GitHub / One-time-PIN (any you want)
5. **Policies:** Add an "Allow" policy with an Email allowlist of your team's emails (or a GitHub org, or a Google Workspace group — whatever fits)
6. Save.

Within ~60 seconds the domain starts redirecting unauthenticated visitors to an Access login page. Users on the allowlist get through; everyone else sees a friendly "you don't have access" page.

### Tear down

1. Dashboard → Zero Trust → Access → Applications → `windyword.ai`
2. Click **Delete**.
3. Site is public again immediately.

### Free tier note

Cloudflare Access free tier covers **50 users / month**. Plenty for a pre-launch team. Paid tier unlocks more.

---

## Pattern B — Pages Function middleware (fallback)

**When to use:** only if Access isn't an option (e.g. you want a simple shared password, or you're offline from the Cloudflare dashboard and need a code-first toggle).

### Add the middleware

Create `functions/_middleware.js`:

```js
// Pre-launch gate — HTTP Basic Auth middleware for Cloudflare Pages.
// Env vars (set on the Pages project dashboard):
//   GATE_ENABLED — set to "true" to activate. Any other value (or unset) = pass through.
//   GATE_USER    — allowed username (default "preview" if unset)
//   GATE_PASS    — required password. Middleware errors loudly if missing when GATE_ENABLED=true.

const REALM = 'WindyWord Pre-Launch';

export async function onRequest(context) {
  const { request, env, next } = context;

  // Off by default — must be explicitly enabled.
  if (env.GATE_ENABLED !== 'true') return next();

  const expectedUser = env.GATE_USER || 'preview';
  const expectedPass = env.GATE_PASS;
  if (!expectedPass) {
    return new Response(
      'Gate misconfigured: GATE_ENABLED=true but GATE_PASS unset.',
      { status: 500 },
    );
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
    } catch (_) {
      // fall through to 401
    }
  }
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"` },
  });
}
```

### Activate it

- Cloudflare Dashboard → Pages → `windyword` → Settings → Environment variables (production)
- Add: `GATE_ENABLED=true`, `GATE_USER=preview`, `GATE_PASS=<your-secret>`
- Trigger a redeploy (push any commit to `main`, or Deployments tab → "Retry deployment")

### Disable it

- Delete all three env vars from the Pages project, OR set `GATE_ENABLED=false`.
- Next deploy (or next request, depending on caching) goes public.

### Why this pattern differs from the original middleware

The original gate (removed 2026-04-21) didn't have the `GATE_ENABLED` kill-switch — it gated every request any time `GATE_PASS` was set. That coupled "is a gate active" with "is the password env var set," which made it impossible to accidentally unset the gate (the site would 500). The new pattern above inverts the default: gate is OFF unless explicitly turned ON.

---

## Historical context

- **2026-04-05:** Initial gate added (commit `2a35024`) — in-app React password + Coming Soon page.
- **2026-04-19:** Edge gate added, in-app React gate deprecated (commit `3d29267`). The in-app `<Gate>` component stayed in `App.jsx` as dead code because it was never actually called.
- **2026-04-21:** Both gates fully removed for Wave 13 public launch. Empty `functions/` directory removed. Dead `<Gate>` component + `GATE_PASSWORD` constant + unused `useState` import stripped from `App.jsx`. The shake animation keyframe removed from `index.css`.
