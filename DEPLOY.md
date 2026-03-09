# Deployment Checklist

Before pushing to GitHub:

1. **Run verification**
   ```bash
   npm run verify
   ```
   Ensures all required files exist and links are valid.

2. **Test locally** (optional)
   ```bash
   npm run serve
   ```
   Open http://localhost:3000 and http://localhost:3000/terminal.html to verify.

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

4. **Verify deployment**
   After push, GitHub Pages deploys in 1–2 minutes. Check:
   - https://abhishekjani123.github.io/
   - https://abhishekjani123.github.io/terminal.html
   - https://abhishekjani123.github.io/Abhishek.pdf
