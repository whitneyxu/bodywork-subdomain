# Gentle Tiger Bodywork Website — Claude Code Guide

## What this repo is

This is the source code for the Gentle Tiger Bodywork website (bodywork.whitneyx.info). It's a collection of HTML and CSS files. When you edit a file here and push it to GitHub, the live website updates automatically.

## Start of every session: check for local changes first, then pull

Before making any changes, first check if there are any unsaved local edits:

```
git status
```

If `git status` shows modified files (other than `.DS_Store`), **stop and ask the user** what they'd like to do before pulling. They may have edited files directly and those changes could get overwritten. Options to offer:

1. **Keep their local changes** — save them to GitHub first (`git add -A`, `git commit`, `git push`), then there's nothing to lose
2. **Discard their local changes** — only do this if the user explicitly says they don't want those edits
3. **Look at what changed** — run `git diff` and show them a plain-English summary of what's different

Once any local changes are handled, pull the latest version from GitHub:

```
git pull
```

If git pull gives an error about `.DS_Store`, run this instead:

```
git checkout -- .DS_Store && git pull
```

## Machine setup (Whitney's MacBook Pro)

This section applies specifically to **Whitney's MacBook Pro**. On a different machine, this setup won't exist and will need to be done separately.

This Mac has Homebrew and the GitHub CLI (`gh`) installed and authenticated as `whitneyxu`. Git push works via `gh`'s credential helper.

If `git push` ever fails with an authentication error, run this first to re-link git with GitHub:

```
/opt/homebrew/bin/gh auth setup-git
```

Then try `git push` again. If `gh` itself is not found, it lives at `/opt/homebrew/bin/gh`.

## End of every session: push your changes

After making changes, save them to GitHub in three steps:

```
git add -A
git commit -m "describe what you changed here"
git push
```

Replace the commit message with a plain-English description of what you did, e.g. `"updated pricing on book.html"` or `"added new massage type to services"`.

Once pushed, the live website will reflect your changes.

## How the site is structured

- `index.html` — the homepage
- `book.html` — the main booking/services page
- `about-me.html` — about the practitioner(s)
- `book-*.html` — individual booking pages for each service type
- `assets/css/main.css` — all the visual styling (colors, spacing, fonts)
- `images/` — photos used on the site

## Working style

The person using this repo may be new to coding and git. Claude should:

- Always run `git pull` at the start of a session without being asked
- Always run `git add -A`, `git commit`, and `git push` at the end of a session, or when the user asks to save/publish
- **After every change or group of changes, offer to save and publish to GitHub.** Say something like: "Want me to save this to GitHub so it goes live?" Don't wait until the end of the session — the user may forget. Nudge proactively but don't push without confirmation.
- Explain what each git command does in plain English when running it
- Avoid jargon — say "save to GitHub" instead of "commit", "publish" instead of "push" when talking to the user
- When making HTML or CSS changes, describe what visually changed in one plain sentence
- Prefer small, targeted edits over large rewrites
- If something goes wrong with git, walk through it step by step and explain what happened
