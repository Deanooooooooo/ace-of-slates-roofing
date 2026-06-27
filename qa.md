# QA - The Ace of Slates Roofing Contractors

## Source Audit

- Business identity verified from Facebook redirect, official website, and Yell.
- Contact routes verified:
  - `0161 768 2003` from official website.
  - `theaceofslates@gmail.com` from official website.
  - `07760 516595` from Yell.
- Public services verified from official website and Yell:
  - roof installations,
  - pitched and flat roofs,
  - natural slate and stone slate,
  - heritage and conservation roofing,
  - chimney restoration,
  - roof repairs,
  - fascias, soffits and guttering,
  - lead flashing,
  - storm damage repairs.
- Testimonials used from official website and Yell review text.
- Hours: official website and Yell both indicate 24/7 / open 24 hours.

## Asset Audit

- Hero: generated atmosphere only, recorded in `image-map.md`.
- Real business media: official site roof images used in gallery.
- Gallery framing rule applied:
  - landscape images use wide 4:3-like cards,
  - portrait image uses portrait-width card,
  - small roof-structure image is a support card and not stretched into hero.

## Pending QA

- `npm run build`
- `npm run build:github`
- forbidden phrase scan
- one H1 / one form / one iframe
- image dimension check
- desktop/mobile screenshots
- gallery movement measurement and crop inspection
- deploy to GitHub Pages with `.nojekyll`
- live CSS/hero/HTML checks
