# Dev Container Setup — Magnus Modernization

This `.devcontainer/` folder sets up a VS Code dev container inside WSL
that has Claude Code pre-installed and wired to OpenRouter, ready to run
the `MAGNUS_MODERNIZATION_PLAN.md` automatically.

---

## Prerequisites (do these once on your Windows machine)

1. **Windows Subsystem for Linux (WSL 2)**
   - If not installed: open PowerShell as admin and run `wsl --install`
   - Verify: `wsl --list --verbose` should show a distro with `VERSION 2`

2. **Docker Desktop for Windows**
   - Download from https://www.docker.com/products/docker-desktop/
   - During install, enable **"Use the WSL 2 based engine"**
   - In Docker Desktop → Settings → Resources → WSL Integration → enable your distro

3. **VS Code**
   - Install the **Dev Containers** extension (ID: `ms-vscode-remote.remote-containers`)
   - Install the **WSL** extension (ID: `ms-vscode-remote.remote-wsl`)

---

## Step 1 — Clone the repo in the RIGHT place

> ⚠️ This matters. Clone inside the WSL filesystem, NOT on the Windows drive.
> Mounting from `/mnt/c/...` (Windows) into a container is slow and causes
> file permission issues with Node.js and git. Always clone under your WSL
> home directory.

Open a WSL terminal and run:

```bash
# Good path — inside WSL filesystem
cd ~/projects          # or any folder under your WSL home (~)
git clone https://github.com/EriWinckler/magnus.git
cd magnus
```

Your repo is now at something like `/home/<your-wsl-username>/projects/magnus`.

---

## Step 2 — Add your OpenRouter API key to WSL

Claude Code needs this env var to authenticate with OpenRouter.
The dev container reads it automatically from your WSL shell profile.

```bash
# Open your bash profile (use ~/.zshrc if you're on zsh)
nano ~/.bashrc

# Add this line at the bottom (replace with your actual key):
export OPENROUTER_API_KEY="sk-or-v1-xxxxxxxxxxxxxxxxxxxx"

# Save and reload
source ~/.bashrc
```

Get your key from: https://openrouter.ai/settings/keys

> The container will inherit this value via the `remoteEnv` block in
> `devcontainer.json`. Your key never gets committed to the repo.

---

## Step 3 — Copy the .devcontainer folder into your repo

Copy the `.devcontainer/` folder (the one containing this README,
`devcontainer.json`, and `Dockerfile`) into the root of your cloned `magnus` repo:

```bash
cp -r /path/to/this/.devcontainer ~/projects/magnus/
```

Do NOT commit the `.devcontainer` folder if you don't want it in GitHub
(add `.devcontainer/` to `.gitignore`). Or commit it — it's safe, the API
key is never stored inside the files.

---

## Step 4 — Open the repo in VS Code from WSL

```bash
cd ~/projects/magnus
code .
```

VS Code opens. It detects the `.devcontainer/` folder and shows a popup:
**"Reopen in Container"** — click it.

> If the popup doesn't appear: press `F1` → type `Dev Containers: Reopen in Container`

VS Code will:
1. Build the Docker image (first time takes ~2 minutes)
2. Install Claude Code globally inside the container
3. Mount your WSL repo at `/workspace`
4. Install all VS Code extensions

---

## Step 5 — Verify Claude Code is wired to OpenRouter

Open the integrated terminal inside VS Code (`` Ctrl+` ``), then:

```bash
claude --version      # should print a version number
```

Then start a Claude Code session and run `/status`:

```
> /status
Auth token: ANTHROPIC_AUTH_TOKEN
Anthropic base URL: https://openrouter.ai/api
```

If the base URL shows `https://openrouter.ai/api` — you're connected.

---

## Step 6 — Run the modernization plan

Copy the `MAGNUS_MODERNIZATION_PLAN.md` file into the repo root, then
start Claude Code and give it this prompt:

```
Follow MAGNUS_MODERNIZATION_PLAN.md exactly.
Work through it task by task in order.
After each task, run the verification step described in the plan.
If verification passes, make the git commit described in the plan.
If verification fails, fix the issue before moving on.
Do not skip tasks or combine multiple tasks into one commit.
```

Claude Code will then execute the full modernization autonomously.

---

## Model configuration

The container is pre-configured to use these OpenRouter models:

| Claude Code tier | Model |
|---|---|
| Opus (complex tasks) | `anthropic/claude-sonnet-4-6` |
| Sonnet (general coding) | `anthropic/claude-sonnet-4-6` |
| Haiku (quick tasks) | `anthropic/claude-haiku-4-5-20251001` |
| Subagent | `anthropic/claude-sonnet-4-6` |

To change models, edit `ANTHROPIC_DEFAULT_*` in `.devcontainer/devcontainer.json`
and rebuild the container (`F1` → `Dev Containers: Rebuild Container`).

Browse available models at https://openrouter.ai/models — filter by
"Anthropic" to stay on Claude models, which work best with Claude Code.

---

## Troubleshooting

**"ANTHROPIC_API_KEY not set" or auth errors**
The container sets `ANTHROPIC_API_KEY=""` intentionally. If you see auth
errors, make sure `OPENROUTER_API_KEY` is set in your WSL `~/.bashrc` and
you ran `source ~/.bashrc` before opening VS Code.

**Container builds but Claude Code can't connect**
Run `echo $ANTHROPIC_BASE_URL` in the container terminal.
It must show `https://openrouter.ai/api`. If it's empty, rebuild the container.

**Slow file operations / EACCES errors**
You are likely working from `/mnt/c/...` (Windows drive). Move the repo
to `~/projects/` inside WSL and reopen. See Step 1.

**npm install fails inside container**
Run `npm install` from the `/workspace` directory inside the container terminal.
The `node_modules/` from your WSL host is ignored inside the container.
