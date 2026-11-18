# Jiakun Li's Academic Homepage

A buildless bilingual academic homepage with a brief biography, one submitted paper (MonoHeight), and education. The personal blog is maintained separately at [Marine Notes](https://marinenotes.me).

## Content

- `index.html`: English biography, MonoHeight, education, and contact information.
- `scripts/main.js`: Chinese translations, language control, and theme toggle.
- `scripts/theme.js`: Applies the saved appearance before the stylesheet loads to avoid a light flash.
- `styles/style.css`: Light/dark academic layout and responsive typography.
- `assets/jiakun-li.jpg`: The user's supplied portrait, displayed beside the biography without click navigation.
- `assets/monoheight-framework.png`: The user's supplied paper figure, displayed without cropping and linked to its full resolution.
- `assets/bupt-logo.png`: The user's supplied university emblem, rendered from PDF for the education entry.


## Local Preview

Run `python3 -m http.server 4175 --bind 127.0.0.1` in this directory and open `http://127.0.0.1:4175`.

No package installation or build is needed. All images are local. Language and theme preferences use browser storage when available; the English page is readable with JavaScript disabled. Bump the stylesheet/script URL version when changing their contents for a release so returning visitors do not combine cached scripts with new markup.

## Hosting

Published independently at [ljk-777.github.io](https://ljk-777.github.io/) using GitHub Pages with the `main` branch and repository root. There must be no `CNAME` file or custom-domain binding in this repository. The previous `marinenotes.me` Pages binding is removed with the user's approval; that domain remains a separate Vercel blog. Do not change the personal blog's DNS or Vercel configuration when editing this page.

The reference sites' biographies, portraits, and publication images are not reused.
