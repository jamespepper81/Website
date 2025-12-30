# Dependency Management & Security

This document outlines the dependency management practices for the BitSleuth website to ensure security and stability.

## Security Scanning

### Automated Scanning

- **Dependabot**: Automatically scans for security vulnerabilities and creates PRs for updates
  - Configuration: `.github/dependabot.yml`
  - Schedule: Weekly for npm packages, monthly for GitHub Actions
  - Security updates are prioritized and auto-created

- **npm audit**: Runs in CI/CD pipeline on every build
  - Fails builds on high/critical vulnerabilities
  - Command: `npm audit --audit-level=high`

### Manual Security Checks

Run security audits locally before committing:

```bash
# Check for vulnerabilities
npm audit

# Check for high and critical vulnerabilities only
npm audit --audit-level=high

# Fix vulnerabilities automatically (when possible)
npm audit fix

# Fix vulnerabilities including breaking changes (use with caution)
npm audit fix --force
```

## Version Pinning

### Critical Dependencies

The following critical packages are **pinned** to exact versions (no `^` prefix) to ensure stability and prevent unexpected breaking changes:

- `next`: 16.0.10
- `react`: 19.2.0
- `react-dom`: 19.2.0
- `firebase`: 11.9.1
- `zod`: 3.24.2
- `dotenv`: 16.5.0

### Why Pin Critical Dependencies?

1. **Security**: Prevents automatic updates that could introduce vulnerabilities
2. **Stability**: Ensures consistent behavior across environments
3. **Testing**: All environments run identical code
4. **Control**: Updates happen deliberately through PR review

### Updating Pinned Dependencies

To update a pinned dependency:

1. Check for security advisories
2. Review changelog for breaking changes
3. Update version in `package.json`
4. Run tests: `npm test`
5. Run build: `npm run build`
6. Test locally: `npm run dev`
7. Create PR with changelog summary

## Package Manager

- **npm**: Version 11.7.0 (configured via `packageManager` field)
- Always use `npm ci` in CI/CD for reproducible builds
- Use `npm install` for local development only

## Best Practices

### Adding New Dependencies

1. **Evaluate necessity**: Could this be implemented without a dependency?
2. **Check security**: Review npm audit and GitHub Security Advisories
3. **Check maintenance**: Is the package actively maintained?
4. **Check license**: Ensure license compatibility
5. **Consider size**: Use bundlephobia.com to check bundle impact
6. **Pin critical packages**: If it's core infrastructure, pin the exact version

### Updating Dependencies

1. **Review changes**: Read changelogs and migration guides
2. **Run security audit**: `npm audit`
3. **Update one at a time**: Easier to identify breaking changes
4. **Test thoroughly**: Run full test suite
5. **Check bundle size**: Ensure no significant bloat

### Monitoring

- Review Dependabot PRs weekly
- Check npm audit reports in CI
- Monitor GitHub Security Advisories for used packages

## CI/CD Integration

The CI pipeline (`copilot-test.yml`) includes:

1. **Dependency installation**: `npm ci` for reproducible builds
2. **Security audit**: `npm audit --audit-level=high`
3. **Type checking**: `npm run typecheck`
4. **Linting**: `npm run lint`
5. **Build**: `npm run build`

## Overrides

Current package overrides (for security):

```json
"overrides": {
  "tmp": ">=0.2.4"
}
```

Overrides should be documented with:
- Reason for override
- CVE/Security advisory reference
- Date added
- Target removal date

## Security Incident Response

If a critical vulnerability is discovered:

1. **Assess impact**: Does it affect our usage?
2. **Check for patch**: Is a fix available?
3. **Apply fix immediately**: Update and deploy
4. **Document incident**: Add to changelog
5. **Review dependencies**: Could we reduce attack surface?

## Resources

- [npm audit documentation](https://docs.npmjs.com/cli/v9/commands/npm-audit)
- [Dependabot documentation](https://docs.github.com/en/code-security/dependabot)
- [GitHub Security Advisories](https://github.com/advisories)
- [Snyk Vulnerability Database](https://snyk.io/vuln/)
