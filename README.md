# Jiakun Li's Academic Homepage

A buildless bilingual academic homepage with a brief biography, one submitted paper (MonoHeight), and education. The personal blog is maintained separately at [Marine Notes](https://marinenotes.me).

## Content

- `index.html`: English biography, MonoHeight, education, and contact information.
- `scripts/main.js`: Chinese translations and the optional language control.
- `styles/style.css`: White-only academic layout and responsive typography.
- `assets/jiakun-li.jpg`: The user's supplied portrait, displayed beside the biography without click navigation.
- `assets/monoheight-framework.png`: The user's supplied paper figure, displayed without cropping and linked to its full resolution.
- `assets/bupt-logo.png`: The user's supplied university emblem, rendered from PDF for the education entry.

Typography follows the supplied [Xiang Zhu homepage](https://canva4.github.io/): Times, 16px body text, 32px name, and 24px section headings. Chinese text uses a Song-style fallback. The page is always white, regardless of saved theme settings or operating-system appearance.

The display name is Jiakun Li in both languages. MonoHeight is explicitly marked IEEE TIP under review, not an accepted publication; its entry contains only the title, full user-supplied author list, venue, status, and figure. Jiakun Li is bold and underlined in the author list; no author-position label is displayed. There are no project entries, personal-contribution paragraphs, lifestyle sections, or course bookmarks. Language controls occupy a separate header column and never wrap the portrait.

The biography records the user-confirmed computer vision research advised by Zhonghong Ou at BUPT and remote AutoLab research advised by Zhipeng Zhang at SJTU. Advisor, university, and lab links remain clickable in both languages; public profiles verify the linked identities, not the user's private advising relationships.

Research interests sit in a centered Research introduction below the biography, separate from the portrait layout. The MonoHeight entry beneath it retains the left-image, right-text layout on desktop.

## Local Preview

Run `python3 -m http.server 4175 --bind 127.0.0.1` in this directory and open `http://127.0.0.1:4175`.

No package installation or build is needed. All images are local. Language preferences use browser storage when available; the English page is readable with JavaScript disabled.

## Hosting

Published independently at [ljk-777.github.io](https://ljk-777.github.io/) using GitHub Pages with the `main` branch and repository root. There must be no `CNAME` file or custom-domain binding in this repository. The previous `marinenotes.me` Pages binding is removed with the user's approval; that domain remains a separate Vercel blog. Do not change the personal blog's DNS or Vercel configuration when editing this page.

The reference sites' biographies, portraits, and publication images are not reused.
