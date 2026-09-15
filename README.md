# Settora

Multi-party post-trade agreement fabric — shared deal state, break workflows, settlement instructions to incumbent rails, and jurisdictional finality attestations.

Product specs: [PRODUCT.md](./PRODUCT.md) · [WEBAPP.md](./WEBAPP.md) · [USER_STORIES.md](./USER_STORIES.md)

Package scope: **`@settora/*`**

## Layout

```
packages/openapi-core  →  packages/core  →  platform/services  →  platform/adapters  →  platform/api-server
platform/webapp        →  ops console (Next.js)
```

OpenAPI domains (one YAML each): `identity`, `participants`, `deals`, `breaks`, `settlements`, `finality`, `collateral`, `governance`, `supervision`.

## Prerequisites

- Node ≥ 20, pnpm ≥ 9
- Local `.codegen/` tool (**gitignored — never commit or push**). Sync from the scaffold:

```bash
rsync -a --delete \
  --exclude '__pycache__' --exclude '*.pyc' \
  /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen/ \
  .codegen/
# Ensure package_scope is "@settora", then:
pnpm codegen:paths
```

## Quick start

```bash
pnpm install
pnpm codegen:paths
pnpm lint:openapi && pnpm bundle:openapi
pnpm build
pnpm dev:api          # http://127.0.0.1:4000
pnpm dev:web          # http://127.0.0.1:3000
```

## Codegen modes

1. **New domain** → full multi-layer `generate --domain X` (Mode A).
2. **YAML edit on existing domain** → bundle → `--layers core` only → handwrite below (Mode B).

See `.cursor/skills/` and `docs/CODEGEN.md`. Never commit `.codegen/`.
