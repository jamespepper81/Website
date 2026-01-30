# Dependency Update Plan

**Generated:** January 30, 2026
**Branch:** `claude/plan-dependency-updates-Jkqsc`

## Summary

Based on analysis of `package.json` and `npm outdated`, the following dependencies need updates.

---

## Updates Required

### Group 1: Radix UI Components (19 packages)
**Risk Level:** Low (patch/minor updates, same major version)

| Package | Current | Latest | Change Type |
|---------|---------|--------|-------------|
| @radix-ui/react-accordion | ^1.2.3 | 1.2.12 | Minor |
| @radix-ui/react-alert-dialog | ^1.1.6 | 1.1.15 | Minor |
| @radix-ui/react-avatar | ^1.1.3 | 1.1.11 | Minor |
| @radix-ui/react-checkbox | ^1.1.4 | 1.3.3 | Minor |
| @radix-ui/react-collapsible | ^1.1.11 | 1.1.12 | Patch |
| @radix-ui/react-dialog | ^1.1.6 | 1.1.15 | Minor |
| @radix-ui/react-dropdown-menu | ^2.1.6 | 2.1.16 | Minor |
| @radix-ui/react-label | ^2.1.2 | 2.1.8 | Minor |
| @radix-ui/react-menubar | ^1.1.6 | 1.1.16 | Minor |
| @radix-ui/react-popover | ^1.1.6 | 1.1.15 | Minor |
| @radix-ui/react-progress | ^1.1.2 | 1.1.8 | Minor |
| @radix-ui/react-radio-group | ^1.2.3 | 1.3.8 | Minor |
| @radix-ui/react-scroll-area | ^1.2.3 | 1.2.10 | Minor |
| @radix-ui/react-select | ^2.1.6 | 2.2.6 | Minor |
| @radix-ui/react-separator | ^1.1.2 | 1.1.8 | Minor |
| @radix-ui/react-slider | ^1.2.3 | 1.3.6 | Minor |
| @radix-ui/react-switch | ^1.1.3 | 1.2.6 | Minor |
| @radix-ui/react-tabs | ^1.1.3 | 1.1.13 | Minor |
| @radix-ui/react-toast | ^1.2.6 | 1.2.15 | Minor |
| @radix-ui/react-tooltip | ^1.1.8 | 1.2.8 | Minor |

**Command:**
```bash
npm install @radix-ui/react-accordion@^1.2.12 @radix-ui/react-alert-dialog@^1.1.15 @radix-ui/react-avatar@^1.1.11 @radix-ui/react-checkbox@^1.3.3 @radix-ui/react-collapsible@^1.1.12 @radix-ui/react-dialog@^1.1.15 @radix-ui/react-dropdown-menu@^2.1.16 @radix-ui/react-label@^2.1.8 @radix-ui/react-menubar@^1.1.16 @radix-ui/react-popover@^1.1.15 @radix-ui/react-progress@^1.1.8 @radix-ui/react-radio-group@^1.3.8 @radix-ui/react-scroll-area@^1.2.10 @radix-ui/react-select@^2.2.6 @radix-ui/react-separator@^1.1.8 @radix-ui/react-slider@^1.3.6 @radix-ui/react-switch@^1.2.6 @radix-ui/react-tabs@^1.1.13 @radix-ui/react-toast@^1.2.15 @radix-ui/react-tooltip@^1.2.8
```

---

### Group 2: React Ecosystem
**Risk Level:** Low (patch update)

| Package | Current | Latest | Change Type |
|---------|---------|--------|-------------|
| react | 19.2.3 | 19.2.4 | Patch |
| react-dom | 19.2.3 | 19.2.4 | Patch |

**Command:**
```bash
npm install react@19.2.4 react-dom@19.2.4
```

**Note:** Must update both together to maintain version parity.

---

### Group 3: Next.js Framework
**Risk Level:** Low (patch update)

| Package | Current | Latest | Change Type |
|---------|---------|--------|-------------|
| next | 16.1.5 | 16.1.6 | Patch |
| eslint-config-next | ^16.1.1 | latest | Minor |

**Command:**
```bash
npm install next@16.1.6
npm install -D eslint-config-next@^16.1.6
```

---

### Group 4: Form Libraries
**Risk Level:** Low (patch/minor updates)

| Package | Current | Latest | Change Type |
|---------|---------|--------|-------------|
| react-hook-form | ^7.71.0 | 7.71.1 | Patch |
| zod | 4.3.5 | 4.3.6 | Patch |

**Command:**
```bash
npm install react-hook-form@^7.71.1 zod@4.3.6
```

---

### Group 5: Utility Libraries
**Risk Level:** Low-Medium

| Package | Current | Latest | Change Type |
|---------|---------|--------|-------------|
| lucide-react | ^0.562.0 | 0.563.0 | Minor |
| recharts | ^3.6.0 | 3.7.0 | Minor |
| tailwind-merge | ^3.0.1 | 3.4.0 | Minor |
| patch-package | ^8.0.0 | 8.0.1 | Patch |

**Command:**
```bash
npm install lucide-react@^0.563.0 recharts@^3.7.0 tailwind-merge@^3.4.0 patch-package@^8.0.1
```

---

### Group 6: External Services
**Risk Level:** Medium (may have breaking changes in APIs)

| Package | Current | Latest | Change Type |
|---------|---------|--------|-------------|
| firebase | 12.7.0 | 12.8.0 | Minor |
| googleapis | ^170.0.0 | 171.0.0 | Major |

**Command:**
```bash
npm install firebase@12.8.0 googleapis@^171.0.0
```

**Note:** googleapis has a major version bump - review changelog for breaking changes.

---

### Group 7: Dev Dependencies
**Risk Level:** Low

| Package | Current | Latest | Change Type |
|---------|---------|--------|-------------|
| @playwright/test | ^1.57.0 | latest | Check |
| playwright | ^1.57.0 | latest | Check |
| eslint | ^9.39.2 | latest | Check |
| autoprefixer | ^10.4.23 | latest | Check |

**Command:**
```bash
npm install -D @playwright/test@latest playwright@latest eslint@latest autoprefixer@latest
```

---

## Execution Plan

### Phase 1: Low-Risk Updates
1. **Step 1:** Update Radix UI components (Group 1)
   - Run: `npm run ci`
   - Verify: All UI components render correctly

2. **Step 2:** Update React ecosystem (Group 2)
   - Run: `npm run ci`
   - Verify: No hydration or runtime errors

3. **Step 3:** Update Next.js (Group 3)
   - Run: `npm run ci`
   - Verify: Build succeeds, dev server starts

### Phase 2: Form & Utility Updates
4. **Step 4:** Update form libraries (Group 4)
   - Run: `npm run ci`
   - Verify: Form validation works

5. **Step 5:** Update utility libraries (Group 5)
   - Run: `npm run ci`
   - Verify: Icons display, charts render

### Phase 3: External Services
6. **Step 6:** Update external services (Group 6)
   - Review googleapis changelog for v171 breaking changes
   - Run: `npm run ci`
   - Verify: Firebase and Google API integrations work

### Phase 4: Dev Dependencies
7. **Step 7:** Update dev dependencies (Group 7)
   - Run: `npm run ci`
   - Verify: All tests pass, linting works

---

## Post-Update Checklist

- [ ] All CI checks pass (`npm run ci`)
- [ ] Dev server starts without errors
- [ ] Production build succeeds
- [ ] Dark/light theme toggle works
- [ ] Mobile responsive design works
- [ ] No console errors in browser
- [ ] Key pages load: Homepage, Glossary, Analyzer, Wallet

---

## Rollback Strategy

If issues occur:
1. Revert package.json changes: `git checkout package.json package-lock.json`
2. Clean install: `rm -rf node_modules && npm install`
3. Verify: `npm run ci`

---

## One-Command Update (Advanced)

For updating all at once (not recommended for production):

```bash
npm update
```

Or to install all latest versions:

```bash
npx npm-check-updates -u && npm install
```

---

## Notes

- **Tailwind CSS:** Staying on v3.4.19 as per CLAUDE.md (do not upgrade to v4)
- **TypeScript:** At v5.9.3, check if newer version available but be cautious
- **React 19:** Already on latest stable branch
- **Next.js 16:** Already on latest stable minor version
