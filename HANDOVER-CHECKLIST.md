# Handover Checklist

Step-by-step for moving this project from the work computer to your personal computer.

## 1. Copy to your personal Google Drive (or any cloud storage)

- [ ] Upload `growthbymarta-handover.zip` (see the final message for the exact filename) to Google Drive, Dropbox, or iCloud Drive.
- [ ] Optional but recommended: also keep a copy on a USB drive or AirDrop it directly to your personal computer, so you have two independent copies during the transition.
- [ ] Do **not** rely on email — the zip is large enough that most providers will reject or strip the attachment.

## 2. What to install on your personal computer

- [ ] **Node.js ≥ 22.12** — download from [nodejs.org](https://nodejs.org) (get the LTS installer, or use `nvm` if you're comfortable with it). This is the only real prerequisite; `npm` comes bundled with it.
- [ ] A code editor — VS Code or Claude Code both work fine with this project. Nothing project-specific to configure.
- [ ] Optionally, GitHub Desktop if you'd rather not use `git` from the terminal for the GitHub step below.

## 3. Unzip and verify it runs

- [ ] Unzip `growthbymarta-handover.zip` somewhere sensible (e.g. `~/Projects/growthbymarta`).
- [ ] Open a terminal in that folder.
- [ ] Run `npm install` — this will take a minute or two and recreates `node_modules` (which was deliberately excluded from the zip).
- [ ] Run `npm run dev` and open `http://localhost:4321` — you should see the site exactly as it looked on the work computer, home page in Spanish.
- [ ] Click through: Home → About → Work → a couple of case studies → Contact, in both `/es/` and `/en/`. Confirm images, the world map, testimonials, and both CV download buttons all work.
- [ ] Run `npm run build` — should complete with no errors and report `21 page(s) built`.

If any of this doesn't match, stop and don't delete anything on the work computer yet — something didn't transfer correctly.

## 4. Create a personal GitHub repository

- [ ] Log in to (or create) your GitHub account at [github.com](https://github.com).
- [ ] Click **New repository**. Name it (e.g. `growthbymarta`), set it to **Private** (you can make it public later if you ever want the code itself visible).
- [ ] Do **not** initialize it with a README/`.gitignore`/license — this project already has all three.
- [ ] In your project folder, restore git history and connect the remote:
  ```bash
  git init                     # only needed if .git wasn't included/restored — see note below
  git add -A
  git commit -m "Initial commit"   # only if git init was just run fresh
  git remote add origin git@github.com:<your-username>/growthbymarta.git
  git branch -M main
  git push -u origin main
  ```
- [ ] If `git push` asks for authentication and rejects a password: GitHub no longer accepts plain passwords over HTTPS. Either set up an SSH key (`ssh-keygen -t ed25519`, then paste the public key into GitHub → Settings → SSH and GPG keys) and use the `git@github.com:...` remote form above, or generate a Personal Access Token (GitHub → Settings → Developer settings → Personal access tokens) and use it as the password when prompted over HTTPS.

## 5. Connect to Vercel

- [ ] Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
- [ ] **Add New Project** → select the `growthbymarta` repo you just pushed.
- [ ] Vercel auto-detects Astro. Leave build settings as default (`npm run build`, output `dist`).
- [ ] No environment variables to add — click **Deploy**.
- [ ] Once deployed, Vercel gives you a `*.vercel.app` URL. You can add a custom domain later from the project's Settings → Domains tab.

## 6. Verify nothing is missing

- [ ] Compare the file count: `find . -type f -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" | wc -l` should return the same number on both computers (see `PROJECT-INVENTORY.md` for the reference count at handover time).
- [ ] Confirm both CV PDFs open correctly (`public/files/CV_Marta_Armengod_ES.pdf` and `_EN.pdf`).
- [ ] Confirm the deployed Vercel URL looks identical to what you saw on `localhost:4321`.

## 7. What you can safely delete from the work computer afterwards

Only once **all** of the above is confirmed working on your personal computer:

- [ ] The project folder (`growthbymarta/`) itself.
- [ ] The backup zip(s) left on the work computer's Desktop (`growthbymarta-full-backup.zip` and/or `growthbymarta-handover.zip`), **once you've confirmed the copy in your cloud storage/personal computer is intact** — don't delete the only remaining copy until a second copy exists somewhere else.
- [ ] Anything else you created on the work computer specifically for this project (there shouldn't be anything outside the project folder — no global config, no environment variables, no installed services tied to it).

Do **not** delete anything until step 3 (unzip + verify it runs) has actually succeeded on the personal computer. Not before.
