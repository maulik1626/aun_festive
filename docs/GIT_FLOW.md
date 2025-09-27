## Git Flow – Branching, PRs, and Merges

This project uses a simple, production-friendly flow with `main` and `staging` plus short-lived feature branches.

### Branches

- `main`: stable; only fast-forward merges from `staging` after QA
- `staging`: integration branch; all approved features merge here first
- `feature/<scope>`: short-lived branches for a single feature/task

### Initial setup (one-time)

```bash
cd react-app
git init -b main
git add -A
git commit -m "chore: initial scaffold (Vite React)"
git checkout -b staging
```

### Create a new feature

```bash
git checkout staging
git pull origin staging  # once remote is set
git checkout -b feature/<scope>
```

Do the work in small commits (Conventional Commits), then push:

```bash
git push -u origin feature/<scope>
```

Open a PR: `feature/<scope>` → `staging`

### Review & merge to `staging`

- Ensure CI passes and review is approved
- Use squash merge (keeps history clean)

### Promote `staging` to `main`

After staging verification/QA:

```bash
git checkout main
git pull origin main
git merge --ff-only staging
git push origin main
```

### Hotfixes (optional)

For urgent fixes to production:

```bash
git checkout -b hotfix/<issue> main
# implement fix, commit
git push -u origin hotfix/<issue>
# PR: hotfix/<issue> -> main, then cherry-pick to staging
```

### Conventions

- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`
- PR template should include: scope, screenshots, tests, risk, roll-back

### Notes

- [ ] Add PR template and CODEOWNERS
- [ ] Enforce branch protection on `main` and `staging`


