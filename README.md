# Funda English Redirect Extension

A browser extension that automatically redirects Dutch Funda URLs to their English versions.

## What it does

When you visit any URL starting with `https://www.funda.nl/` that is NOT already in English, the extension automatically redirects you to the English version.

### Examples

- `https://www.funda.nl` → `https://www.funda.nl/en`
- `https://www.funda.nl/` → `https://www.funda.nl/en/`
- `https://www.funda.nl/detail/koop/kudelstaart/huis-daltonstraat-6/43390254/` → `https://www.funda.nl/en/detail/koop/kudelstaart/huis-daltonstraat-6/43390254/`
- `https://www.funda.nl/en/detail/koop/...` → No redirect (already in English)

## Installation

### Chrome / Edge (Chromium-based)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the `funda-english-extension` folder
5. The extension is now active!

### Firefox

1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select the `manifest.json` file from the `funda-english-extension` folder
4. The extension is now active!

## Development

The extension uses Manifest V3 (the latest standard) and consists of:

- `manifest.json` - Extension configuration and permissions
- `background.js` - Background script that handles the redirect logic

### How it works

1. Listens for `onBeforeNavigate` events
2. Checks if the URL is a Funda Dutch page (not already `/en/`)
3. Redirects to the English version by inserting `/en` into the path

## Permissions

- `webNavigation` - To detect navigation events
- `tabs` - To update tab URLs on redirect
- `declarativeNetRequest` - For potential future redirect optimizations
- `host_permissions` for `https://www.funda.nl/*` - To work on Funda pages

## License

MIT