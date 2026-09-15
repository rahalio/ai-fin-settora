---
name: settora-codegen-local
description: >-
  Settora local codegen tool hygiene: .codegen must never be committed or pushed;
  how to sync the tool from the zero-apps-codegen-scaffold baseline.
---

# Settora — local `.codegen` only

## Hard rule

**Never commit or push `.codegen/`.** It is gitignored. The zero-codegen Python tool and merged absolute-path config stay on the developer machine.

## Sync when missing

```bash
rsync -a --delete \
  --exclude '__pycache__' --exclude '*.pyc' \
  /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen/ \
  .codegen/
pnpm codegen:paths
```

After sync, ensure `package_scope` is `"@settora"` in `.codegen/zero-codegen.json` and `.codegen/.zero-codegen-merged.json`.

## What is committed

- OpenAPI YAML under `packages/openapi-core/src/`
- Generated TypeScript under `packages/core` and `platform/*` (product layers)
- Not: `.codegen/`, `packages/openapi-core/src/.bundled/`, `dist/`
