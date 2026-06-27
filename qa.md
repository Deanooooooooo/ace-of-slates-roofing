# QA - The Ace of Slates Roofing Contractors

## Source Audit

- Business identity verified from Facebook redirect, official website, and Yell.
- Contact routes verified:
  - `0161 768 2003` from official website.
  - `theaceofslates@gmail.com` from official website.
  - `07760 516595` from Yell.
- Exact map address supplied by Dean: `9 Brownson Close, Hyde, United Kingdom, SK14 2AE`.
- Map/embed query intentionally uses address only, without business name, because Dean noted there is no Google Business Profile at the address and business-name matching can show another company.
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

## QA Result

- `npm run build` - PASS
- `npm run build:github` - PASS
- `.nojekyll` included in `gh-pages` export - PASS
- Forbidden phrase/template scan - PASS
- One H1 / one primary form / one map iframe - PASS
- Verified `mailto:theaceofslates@gmail.com` route - PASS
- Image dimension check - PASS
- Desktop hero/form screenshot - PASS
- Mobile hero/form screenshot - PASS
- Gallery screenshot and crop inspection - PASS
- Gallery movement measured locally: approximately `909px` - PASS
- GitHub Pages build status: `built` - PASS
- Live HTML 200 and contains fresh Ace of Slates markers - PASS
- Live CSS 200 - PASS
- Live hero image 200 - PASS
- Live browser check: one H1, one form, one iframe, mailto present - PASS
- Live gallery movement measured: approximately `910px` - PASS
