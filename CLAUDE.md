# CLAUDE.md — vue-vben-admin

## Project Overview

Modern Vue 3 admin dashboard. Pnpm monorepo managed by Turborepo.

- **Main app**: `apps/web-antd` (Ant Design Vue)
- **Mock server**: `apps/backend-mock` (Nitro/H3, port 5320)
- **Shared packages**: `packages/` (effects, @vben/*, @vben-core/*)
- **Internal tooling**: `internal/` (vite-config, tsconfig, lint-configs)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3.5 + Composition API (`<script setup>`) |
| Build | Vite 8 (config via `@vben/vite-config`) |
| Language | TypeScript 5.9 (strict mode) |
| UI | Ant Design Vue 4 + Tailwind CSS 4 |
| State | Pinia 3 + pinia-plugin-persistedstate |
| Router | Vue Router 5 |
| HTTP | Axios (wrapped in `@vben/request`) |
| Forms | VeeValidate + Zod |
| i18n | vue-i18n 11 |
| Testing | Vitest (unit) + Playwright (e2e) |
| Package manager | pnpm (only — never use npm or yarn) |

## Commands

```bash
# Development
pnpm dev:antd          # Start web-antd dev server (port 5666)
pnpm dev               # Start all (interactive Turbo)

# Build
pnpm build:antd        # Build web-antd only
pnpm build             # Build all apps

# Quality checks (run before committing)
pnpm check:type        # TypeScript type check
pnpm lint              # ESLint + Oxlint
pnpm format            # Format code

# Testing
pnpm test:unit         # Vitest unit tests
pnpm test:e2e          # Playwright e2e tests

# Maintenance
pnpm clean             # Clean dist + cache
pnpm commit            # Interactive conventional commit (use this, not git commit)
```

## Architecture

### Adding a new page/route

1. Create view in `apps/web-antd/src/views/<module>/`
2. Add route module in `apps/web-antd/src/router/routes/modules/`
3. Register in `apps/web-antd/src/router/routes/index.ts`
4. Add i18n keys to `apps/web-antd/src/locales/langs/`

### Adding a new API

1. Add endpoint in `apps/web-antd/src/api/`
2. Use the request instance from `./request.ts` (not axios directly)
3. Add mock handler in `apps/backend-mock/api/`

### Shared package additions

- New shared components → `packages/effects/common-ui/`
- New composables/hooks → `packages/effects/hooks/`
- New constants → `packages/@vben/constants/`
- New types → `packages/@vben/types/`

## Code Conventions

### Vue components

```vue
<!-- Always use <script setup lang="ts"> -->
<script setup lang="ts">
// 1. imports
// 2. props/emits definitions
// 3. composables (useXxx)
// 4. reactive state
// 5. computed
// 6. methods
// 7. lifecycle hooks
</script>
```

### TypeScript

- Always define prop types with `defineProps<{...}>()`
- Use `interface` for object shapes, `type` for unions/intersections
- No `any` — use `unknown` and narrow if needed
- Prefer `es-toolkit` over lodash for utility functions

### State (Pinia)

- One store per domain, placed in `packages/@vben/stores/`
- Use `defineStore` with setup syntax (not options API)
- Sensitive data must use the encrypted storage option

### Styling

- Tailwind CSS utility classes first
- Ant Design component props for component-level styling
- Custom CSS only when Tailwind + ADV props are insufficient
- CSS variables for theme tokens — do not hardcode colors

### Imports

- Use `@/` alias for `apps/web-antd/src/`
- Use workspace package names (`@vben/hooks`, not relative paths to packages)
- Group imports: Vue core → third-party → internal packages → local

## Do NOT

- Do not use `npm` or `yarn` — pnpm only
- Do not import from `packages/` using relative paths — use workspace names
- Do not use Options API in new code — Composition API only
- Do not call `axios` directly — use the `@vben/request` wrapper
- Do not add `console.log` to committed code
- Do not bypass type errors with `as any` or `@ts-ignore`
- Do not modify files in `internal/` without understanding downstream effects
- Do not commit without running `pnpm check:type && pnpm lint`

## Verification Before Committing

```bash
pnpm check:type   # must pass with 0 errors
pnpm lint         # must pass with 0 errors
pnpm test:unit    # must pass
```

## Git Workflow

- Commit message format: Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, etc.)
- Use `pnpm commit` for interactive commit creation
- Pre-commit hooks run automatically via Lefthook (lint + type check)
