# tools

`og-card.html` is the source of `public/og-image.png`, the 1200x630 image link previews show
(LinkedIn, WhatsApp, Slack). To regenerate it after changing the card or the photo:

```bash
npx vite --port 5174                      # serve the repo root (fonts and photo load by absolute path)
# open http://localhost:5174/tools/og-card.html in a 1200x630 viewport, wait for fonts,
# and screenshot it to public/og-image.png (e.g. with Playwright: page.screenshot({ path }))
```
