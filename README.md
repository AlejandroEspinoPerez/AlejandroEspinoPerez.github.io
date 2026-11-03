# alejandroespinoperez.github.io

Personal portfolio of **Alejandro Espino Pérez**, Full-Stack Developer (Laravel · React/Next.js · TypeScript).

**Live:** https://alejandroespinoperez.github.io

- Plain HTML, CSS and vanilla JavaScript. No build step, no dependencies.
- English by default with a Spanish toggle (`?lang=es` also works); light and dark themes.
- Self-hosted fonts: [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (SIL Open Font License), from Fontsource.

## Structure

```
index.html            page content (English); Spanish strings live in assets/js/main.js
assets/css/styles.css theme tokens, layout, responsive rules
assets/js/main.js     theme + language toggles, mobile menu, scroll effects
assets/img/           photo, project screenshots, Open Graph image, icons
404.html              GitHub Pages not-found page
```

The `cv/` PDFs are the public copies of the resume (no phone number).

To preview locally, serve the folder with any static server, for example `npx serve .`.
