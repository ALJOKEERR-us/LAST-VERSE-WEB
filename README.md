# LAST VERSE PRO — Official Informational Website

A lightweight, static, four-page Arabic-first website for presenting the LAST VERSE PRO mobile application project.

## Pages
- `index.html` — Home
- `features.html` — Planned application features
- `policies.html` — Preliminary policy drafts
- `support.html` — Contact and support information

## Responsive layouts
- Phone layout: compact header, collapsible navigation, single-column content.
- Tablet layout: collapsible navigation and flexible content grids.
- Computer layout: wide centered content, full navigation, two-column hero, and expanded spacing on wide screens (1200px and above).
- The layout is selected automatically from the screen width; there is no separate setting to switch manually.

## Run locally
Open `index.html` in a browser, or run this command from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish
Upload the complete folder contents to a static hosting provider. No database, backend, build step, or package installation is required. Enable HTTPS on the hosting provider.

## Language
The EN / عربي control switches all translated page text, direction, page title, and description. The selected language is stored locally in the browser when storage is available.

## Important project notes
- The website is informational only; it does not implement application functionality.
- Application capabilities are described as planned features and are not represented as currently launched.
- Policy sections are preliminary drafts and require review before launch.
- WhatsApp inquiries and collaboration: `01025895883` (`https://wa.me/201025895883`).
- Vodafone Cash financial support only: `01094529926`.

See `SECURITY-REVIEW.md` for the static-site review and deployment limitations.
