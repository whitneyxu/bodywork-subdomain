# Leyla profile update — design

Date: 2026-07-22

## Goal

Update Leyla's photo, bio, and service menu on the Gentle Tiger Bodywork site. Add a
gua sha FAQ entry, and an inline expandable explainer wherever gua sha is mentioned.

Whitney's photo, bio, and services are out of scope, with one explicitly authorised
exception: a stale price in her specialty descriptions (see the end of this document).

## Background

Leyla currently has six booking pages. Two of them — 30 and 60 minute assisted
stretching — already have working TidyCal links but are not linked from `book.html`,
so those services are invisible to visitors despite the intro blurb advertising them.

Her three massage services show `~ sliding scale` instead of actual prices.

Gua sha appears nowhere on the site today. Her new copy introduces it in several places.

## Scope

### 1. Photo

Source is 1238x1004. Two derived files:

- `images/leyla-flowers.jpg` — full frame, for the bio on `about-me.html`
- `images/leyla-flowers-square.jpg` — 700x700 crop at offset (40, 272), for the 220px
  circular profile photo on `book.html`. Cropped in ~30% from centre so the face reads
  at avatar size rather than sitting small in a wide field of flowers, with the crop
  window raised so her head sits centred in the circle rather than near the top.

The previous `leyla-portrait-small.jpg` and `leyla-square-small.jpg` stay on disk but
become unreferenced. The repo already retains superseded images this way (`*-old.jpg`).

### 2. Bio

Replace the bio text in `about-me.html` inside `#leyla-content`. Verbatim from Leyla.

### 3. Service menu

Rebuild Leyla's section of `book.html` into two groups, matching the lowercase `<h1>`
style used in Whitney's section.

**sliding scale offerings**

| Service | Price | Booking page | TidyCal |
|---|---|---|---|
| 60 min bodywork session | $90–$150 | `book-leyla-massage-60.html` | exists |
| 90 min bodywork session | $120–$190 | `book-leyla-massage-90.html` | exists |
| 120 min bodywork session | $170–$250 | `book-leyla-massage-120.html` | exists |
| 30 min cupping + (feet/hands/skull) | $35–$50 | `book-leyla-cupping-30.html` | **NEEDED** |
| 30 min assisted stretching | $35–$55 | `book-leyla-stretch-30.html` | exists |
| 60 min assisted stretching | $60–$110 | `book-leyla-stretch-60.html` | exists |

**specialty services**

| Service | Price | Booking page | TidyCal |
|---|---|---|---|
| 60 min arms and hands | $150 fixed | `book-leyla-armshands-60.html` | **NEEDED** |
| foot and calf massage | ask | none, email to book | n/a |

Booking page filenames are left unchanged even though the copy now says "bodywork
session" rather than "massage". Filenames are internal plumbing; renaming risks
breaking links Leyla may have shared and buys nothing.

Body Speak 75 is not in the new menu. It is already commented out in `book.html` and
stays commented out rather than being deleted, in case it returns.

Also update the intro blurb (`book.html`, practitioner selector) to mention cupping
alongside massage and assisted stretching.

### 4. Glossary explainer

Wherever gua sha is mentioned in Leyla's copy, the term is underlined and followed by a
FontAwesome info icon (`fa-info-circle`, already available site-wide via `main.css`).
Clicking the term opens a pop-up explaining it.

Three locations, all in `book.html`: the 60 / 90 / 120 minute service descriptions.

Leyla's bio does **not** get this treatment — the term there is a plain link to
`FAQ.html#gua-sha`, since a pop-up in continuous prose adds little.

The pop-up is built by `assets/js/glossary.js`, which holds the definition text once and
creates the dialog on demand. It closes on the X, on a backdrop click, and on Escape;
it locks background scrolling while open, moves focus to the close button, and restores
focus afterwards. The dialog is capped at `85vh` and scrolls internally, so the long
contraindication list stays reachable on small screens.

Terms are marked up as `<a role="button" tabindex="0">` rather than `<button>`, because
the site styles bare `button` elements as blue pills — an inline `<button>` would have
had to fight that. For the same reason the close button's own rule is scoped as
`.glossary-modal .glossary-modal-close` to win the cascade outright.

Built generically via `data-term`, so cupping — which has its own contraindication list
in the menu copy — can be added later without new code.

### 5. FAQ

Add "What is Gua Sha?" to `FAQ.html` with `id="gua-sha"`, using Leyla's text verbatim,
including contraindications and aftercare.

**All six questions become collapsible**, closed by default, so the page can be scanned
rather than read top to bottom. Built on `<details class="faq">`, requiring no
JavaScript to open and close.

Each `<summary>` keeps its `<h2>` inside it. A prior commit ("headings for SEO properly
tagged") shows heading structure is deliberate here, and `<summary>` permits heading
content, so collapsing costs nothing in SEO terms.

A small inline script opens the question matching the URL fragment, so the
`FAQ.html#gua-sha` links land on an open answer rather than a closed one. It also
handles `hashchange`, and briefly highlights the opened answer.

The "Why sliding scale" answer is rewritten in first person plural and now quotes both
practitioners' ranges, replacing a stale claim of an "$80 lowest tier". Both are
referred to as they/them, matching the existing wording on `book.html`.

The page header still reads "bodywork by Whitney" and the copyright line still names
her alone. Left alone as out of scope.

### 6. New booking pages

`book-leyla-cupping-30.html` and `book-leyla-armshands-60.html`, copying the structure
of the existing booking pages, with a clearly marked placeholder where the TidyCal URL
goes.

Both services are already being offered, so rather than a disabled button they get an
"email to book" button (`mailto:` with a pre-filled subject line naming the service) and
a line explaining that only the online booking is pending. The foot and calf massage,
originally listed "coming soon", gets the same treatment.

The two placeholder pages stay in the repo unlinked, ready for when the TidyCal links
exist.

## Out of scope

- Any change to Whitney's photo, bio, services, prices, or booking pages
- The `FAQ.html` header, and the single-practitioner voice of answers other than the
  sliding scale one
- Whitney's 60/90/120 linking straight to tidycal.com while Leyla's route through
  wrapper pages
- Deleting superseded images or the commented-out Body Speak block

## Follow-up for Leyla (not committed)

Create in TidyCal:
- 30 min cupping + (feet/hands/skull), $35–$50
- 60 min arms and hands, fixed $150

Verify prices on the six existing TidyCal event types match the new ranges above.

## Verification

Render `book.html`, `about-me.html`, and `FAQ.html` with headless Chrome at desktop and
phone widths, driving real clicks rather than inspecting markup. Confirm:

- the square crop frames her head centred inside the 220px circle
- clicking a term opens the pop-up, populated, with background scroll locked
- the pop-up fits the viewport at 360 / 390 / 500 / 768 / 1100px and scrolls internally
- the FAQ opens only the linked question when arriving at `FAQ.html#gua-sha`, and
  nothing is open on a plain visit
- all six FAQ `<h2>` tags survive the move into `<summary>`
- floated images inside collapsed answers stay contained
- the bio image floats cleanly at its new landscape aspect ratio

## Whitney price correction (added after review)

Whitney's three specialty services showed `~ $180` in the heading but "fixed price of
$150" in the body text. Git history resolves which is current: commit `340e798`
(2026-04-27) raised all three headings from $150 to $180 as part of a site-wide
increase, and the body text was not updated to match. The heading is current; the body
text was stale.

The body text is therefore corrected to $180, not the heading to $150 — the latter would
have silently rolled back a deliberate price increase.

This is the only change to Whitney's content in this work, and it was explicitly
authorised.

Leyla's 60 min arms and hands remains $150. The two practitioners charging differently
for similarly-named services is intentional.

## Known issue, not addressed

The remaining `FAQ.html` answers are still written in Whitney's first person and
describe her home, her palo santo, and her table. These were left alone: pluralising
them would assert things about Leyla's setup that nobody has confirmed.
