## Run the App – Step by Step

Follow this guide to run the React app locally, including required Node.js setup.

---

### Quick checklist

- [ ] Node.js v22 LTS (or >= 20.19)
- [ ] Dependencies installed
- [ ] Dev server running and reachable in browser

---

### 1) Install/Use the correct Node.js version (macOS)

Vite 7 requires Node.js >= 20.19 or >= 22.12. Recommended: v22 LTS.

```bash
brew install nvm
mkdir -p ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc

nvm install 22
nvm use 22
nvm alias default 22

node -v
npm -v
```

If you already have `nvm`, just run:

```bash
nvm install 22 && nvm use 22 && nvm alias default 22
```

---

### 2) Install dependencies

```bash
cd react-app
npm install --no-audit --no-fund
```

If switching Node versions, consider a clean install:

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install --no-audit --no-fund
```

---

### 3) Start the dev server

```bash
npm run dev
```

Open the printed URL (typically `http://localhost:5173`).

---

### 4) Preview a production build (optional)

```bash
npm run build
npm run preview
```

---

### Troubleshooting

- crypto.hash is not a function / engine warnings
  - Cause: Unsupported Node version (e.g., 20.5.0). Fix by upgrading to Node v22 LTS or >= 20.19.

- Port already in use (5173)
  - Find and kill process:
    ```bash
    lsof -i :5173 | awk 'NR>1 {print $2}' | xargs -r kill -9
    ```

- Stale cache or modules
  - Clear and reinstall:
    ```bash
    rm -rf node_modules package-lock.json
    npm cache clean --force
    npm install --no-audit --no-fund
    ```
  - Clear Vite cache (if present):
    ```bash
    rm -rf node_modules/.vite
    ```

---

### Notes

- [ ] Team Node standard (e.g., v22 LTS)
- [ ] Proxy/Corporate network considerations

---

### Definition of Done (Run)

- [ ] `node -v` shows v22.x (or >= 20.19)
- [ ] `npm run dev` serves the app without errors
- [ ] App reachable at the printed localhost URL


