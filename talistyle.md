# 🧠 Skill: Premium Landing Page System

A reusable design + copy framework for building editorial, trust-heavy Hebrew RTL landing pages for high-ticket service providers (interior designers, architects, stylists, coaches, aesthetic clinics, boutique studios). Built for clients whose work *is* the product — where visuals must carry weight and copy must feel quiet and certain, not loud.

---

## 1. Core Identity

**Positioning:** An editorial boutique page, not a marketing funnel. The reader should feel they landed inside a magazine spread, not on an ad.

**What makes it premium:**
- **Warmth over contrast.** Cream/sand base (`#f8f3ec` / `#f1e8dc`), terracotta accent (`#b1663f`), ink (`#211a15`). No pure white, no pure black.
- **One serious display typeface** (FUP Galil or any high-quality Hebrew serif/humanist), used at large size with tight letter-spacing (`-0.01em`), generous line-height, and minimal weight variation (300 / 400 / 500 / 700 only).
- **Air.** Section padding ≥ `5rem` vertical. Content max-width `1160px`. Nothing fights for attention.
- **Silence in the copy.** Short declarative sentences. No exclamation marks. No "אני כאן בשבילך". No superlatives ("הכי", "הטוב ביותר", "מקצועי ביותר").
- **The work is the hero.** Projects / case studies sit above the fold conceptually — even when the visual hero is a portrait or a scroll-scrubbed canvas.

**Overall feel:** calm, confident, curated, Scandinavian-Levantine. A reader should scroll without friction and finish feeling *"this person is the real thing."*

---

## 2. Non-Negotiable Design Rules

### Layout
- Single column flow. Grids only inside sections (2-col about, 3-col pillars, 3-col projects, etc.).
- Container: `width: min(1160px, calc(100% - 2.4rem))`. Never edge-to-edge text on desktop.
- Sticky nav with `backdrop-filter: blur(10px) saturate(120%)` on a translucent cream background. Brand centered absolute, links right (RTL), CTA left. Always one line.
- Section alternation: cream → cream-alt → cream → dark (once, late in the page) → cream. Dark section used exactly once, for weight.

### Spacing
- Vertical section padding: `5rem` desktop, `3.8rem` mobile.
- Inside-section element gap: `1.6rem–2rem`.
- Never stack more than two consecutive full-width blocks without a visual break (image, divider, color shift).

### Typography
- H1 `clamp(2.35rem, 6vw, 4.3rem)`, H2 `clamp(1.8rem, 4.5vw, 3rem)`, H3 `clamp(1.15rem, 2.8vw, 1.45rem)`.
- Body `17px`, line-height `1.7`.
- Eyebrow labels: `0.82rem`, `font-weight: 700`, `letter-spacing: 0.12em`, uppercase, accent color.
- Max one font family. Max four weights.

### Visual hierarchy
- Every section: `eyebrow → h2 → lead paragraph (≤ 760px) → content`.
- One primary CTA per section maximum. Repeated CTAs use the same label.
- Accent color (`#b1663f`) used only for: eyebrows, primary CTA background, link underlines, active states. Never for body text, never for headlines.

### DO NOT
- ❌ No gradient backgrounds on sections (one subtle dark overlay on hero is the only exception).
- ❌ No box-shadows heavier than `0 12px 30px rgba(0,0,0,.12)`.
- ❌ No emojis in UI. No emoji bullets.
- ❌ No rounded corners above `24px` except for pill buttons (`999px`).
- ❌ No stock photography of "smiling woman on laptop." No generic business imagery.
- ❌ No testimonial stars. No "⭐⭐⭐⭐⭐". Quotes only, with name + short descriptor.
- ❌ No "click here", "לחץ כאן", "הירשם עכשיו!!!". No urgency manipulation.
- ❌ No three-column feature grid with icon + title + paragraph (the SaaS cliché). If using a grid of pillars, use serial numbers (01, 02, 03) and short phrases — not icons.
- ❌ No auto-playing video with sound. No carousels that auto-advance faster than 6s.
- ❌ No pop-ups, exit-intent modals, or scroll-locked overlays.

---

## 3. Page Structure System

Fixed order. Sections can be renamed per client but sequence is rigid.

1. **Hero** — *Purpose:* establish identity + aesthetic in < 2 seconds. *Must achieve:* the visitor decides "this is for me" before reading a word. Use either (a) a portrait + name + one-line positioning, or (b) a scroll-scrubbed canvas frame sequence of the work itself. Single quiet CTA.

2. **Problem / Tension** — *Purpose:* name what the reader is silently feeling. *Must achieve:* recognition. Three short lines, no headline fireworks. The reader thinks "yes, that's me."

3. **Solution / Pillars** — *Purpose:* reframe the problem as a method. *Must achieve:* the reader sees this provider has *a way of working*, not just a service. 3–4 numbered pillars, each a phrase + one sentence.

4. **Proof — Work** — *Purpose:* show, don't tell. *Must achieve:* dropped jaw. Project grid (3 across desktop, 1 mobile), each project = one hero image + title + one-line context. Optional before/after. No long captions.

5. **Proof — People** — *Purpose:* transfer trust from past clients. *Must achieve:* "others like me trusted her." Testimonial carousel, 3–6 quotes, name + descriptor ("אמא לשניים, רמת השרון"). No photos unless high quality.

6. **Process** — *Purpose:* remove fear of the unknown. *Must achieve:* the reader can picture the next 30 days. 4–6 numbered steps, each a verb-led phrase + one sentence. No clip-art icons.

7. **Offer / Services** — *Purpose:* make the path forward concrete. *Must achieve:* reader identifies which package fits. 2–3 service cards max. Price optional; if shown, shown confidently with no strike-through theatrics.

8. **FAQ** *(optional)* — *Purpose:* neutralize final objections. 4–6 questions, accordion, honest answers.

9. **Final CTA** — *Purpose:* one clean invitation. *Must achieve:* action. Single form (name + phone + one optional field) OR single WhatsApp CTA. Never both competing.

10. **Footer** — credits, contact line, Instagram link, small-print credit to the studio.

**Floating elements:** WhatsApp button bottom-left (transparent, no chrome, icon only). Accessibility button bottom-right with a functional panel (font size, contrast, grayscale, link highlight, pause animations, reset — persisted in `localStorage`). Both always visible. Nothing else floats.

---

## 4. Copywriting Formula

### Headline style
- Declarative, not promotional. `"בית שמרגיש כמוך"` not `"הבית של החלומות שלך מחכה!"`.
- Max 7 Hebrew words in the H1.
- Subhead: one sentence, states who it's for and what happens. No buzzwords.

### Tone of voice
- **Quiet authority.** Written like the provider is sitting across from you at a café, not shouting from a stage.
- First person singular ("אני", "שלי") in About only. Second person ("את", "אתה") or neutral elsewhere.
- No question-marks-as-hooks ("רוצה בית מושלם?"). Statements only.
- Hebrew: mixed register — clean literary flow with one or two conversational anchors per section. No English loanwords unless standard ("דיזיין", "סטיילינג" OK; "אקסייטינג", "ג'רני" not).

### Sentence structure
- **Short. Medium. Short.** Rhythm matters more than information density.
- Max one subordinate clause per sentence.
- Lists use complete phrases, not single words.

### Emotional triggers (used sparingly)
- **Recognition** — "את מכירה את הרגע הזה."
- **Permission** — "מותר שיהיה יפה גם בלי להפוך את הכל."
- **Specificity** — a detail only the ideal client would notice (the weight of a door handle, the temperature of morning light in a specific room).
- **Restraint** — what is *not* said signals confidence. Never list 12 benefits; list 3.

### Forbidden phrases
`"פתרונות מותאמים אישית"`, `"יחס אישי"`, `"צוות מקצועי"`, `"מעל X שנות ניסיון"` as an opener, `"אנחנו כאן בשבילך"`, `"החלום שלך"`, `"רק בזמן מוגבל"`.

---

## 5. Visual Language

### Imagery
- **Only real work.** Professional photography of the provider's actual projects/clients. If missing, that is the *first* blocker — do not ship with stock.
- One portrait of the provider, natural light, neutral background, looking away from camera or at work — not a forced studio headshot.
- Crops: wide for establishing shots, tight for detail shots. Avoid perfect centered symmetry.
- Grain and warmth welcome. Over-saturated HDR is a signal of amateur work — avoid.

### Color logic
- **Base:** cream / sand / bone.
- **Ink:** warm near-black, never `#000`.
- **Accent:** one earthy pigment (terracotta, olive, clay, ochre, deep burgundy) — chosen from the client's actual work, not pulled from a trend palette.
- **Dark mode section:** used exactly once, deep brown-black (`#1b1612`), not blue-black.
- Contrast ratio: body text ≥ 7:1 against background. Never rely on color alone for meaning.

### High-end vs cheap — tell them apart
| High-end | Cheap |
|---|---|
| One accent color | Three+ competing colors |
| Custom type, tight tracking | System font at default settings |
| Full-bleed photography of real work | Icon-driven feature grid |
| Testimonials as pull-quotes | Testimonials as star-ratings + avatars |
| Single CTA, understated | "Call now!" "Buy!" "Subscribe!" stacked |
| Air and silence | Every pixel filled |

---

## 6. Motion & Interaction

### Appearance
- **Reveal-on-scroll** via `IntersectionObserver`: opacity `0 → 1`, translateY `20px → 0`, duration `600ms`, easing `cubic-bezier(0.22, 1, 0.36, 1)`. Applied to section heads, cards, quotes. Never to body paragraphs.
- Stagger of `80ms` between siblings in a grid.

### Scroll behavior
- `scroll-behavior: smooth` on HTML.
- Optional hero: canvas-based frame scrubber (sequence of JPEGs mapped to scroll position inside a sticky container). Height `280svh`, preload frames, draw in `requestAnimationFrame`.
- Sticky nav with translucent blur.
- No parallax on multiple elements simultaneously — at most one parallax layer.

### Micro-interactions
- Link hover: underline animates from right (RTL origin), color shifts one shade darker, `translateY(-1px)`.
- Button hover: border darkens, background lightens, `translateY(-1px)`. No scale.
- Card hover: shadow deepens slightly, image zooms `1.02`, transition `400ms`.
- Focus states: always visible, always accent-colored, always `2px` offset.

### Forbidden motion
- ❌ Bounce, elastic, or overshoot easings.
- ❌ Entrance animations longer than `700ms`.
- ❌ Multiple elements animating on the same scroll tick except in an intentional stagger.
- ❌ Cursor-follow effects, magnetic buttons, AOS-style zoom-ins.
- ❌ Auto-advancing carousels faster than 6s. Swipe/drag must work on touch.

---

## 7. Adaptation Rules

### What changes per client
- **Accent color** — pulled from the client's actual portfolio or brand.
- **Display typeface** — if the client has a wordmark/brand type, match or complement it; default is FUP Galil for Hebrew.
- **Copy voice** — calibrate register (more literary for a gallery, warmer for a family-facing practice, more clinical for a medical aesthetic provider).
- **Hero format** — portrait-led for personal brands, work-led (scrubber or grid) for portfolio-driven brands.
- **Section naming** — same purposes, localized labels ("העבודות שלי" / "הקולקציה" / "תיקי לקוחות").
- **Offer structure** — number and shape of packages fits the business model.

### What stays fixed
- **Color philosophy** — warm neutrals + single earthy accent. Always.
- **Typography system** — one family, four weights max, same scale ratios.
- **Section sequence** — Hero → Tension → Method → Work → People → Process → Offer → FAQ → CTA → Footer.
- **Spacing system** — `5rem` section padding, `1160px` container, `1.7` line-height.
- **Nav pattern** — sticky blurred cream, centered brand, RTL links right, CTA left, one line.
- **Motion vocabulary** — reveal-up, underline-from-origin, 1px lift on hover. Nothing else.
- **Floating UI** — WhatsApp bottom-left, functional accessibility panel bottom-right.
- **The DO NOT list** — all items in §2 are universal.

---

## 8. Generation Instructions

### Input required before starting
1. **Business type** and **one-sentence positioning** from the client's own mouth.
2. **Target audience** — age range, life stage, budget tier, emotional state when searching.
3. **The offer** — 2–3 packages or the single offer, with honest prices or price ranges.
4. **The work** — minimum 6 professional photos of real projects/clients/outputs. *This is the gating requirement. If missing, stop and request it before designing anything.*
5. **One portrait** of the provider.
6. **Three existing testimonials** with permission to quote. Name + descriptor each.
7. **The accent color** — either chosen from their work or agreed with them.
8. **Contact channel** — WhatsApp number, email, Instagram handle.

### Step-by-step application

1. **Scaffold** from the base template: copy `index.html`, `style.css`, `script.js`, font folder, `vercel.json`. Change `<html lang>` and `dir` to match target language. Keep `FUP Galil` for Hebrew; swap for an equivalent premium typeface for other languages (e.g. Söhne, GT Sectra, Canela).
2. **Set tokens** in `:root`: `--bg`, `--bg-alt`, `--ink`, `--accent`, `--accent-strong`, `--dark`. Pull `--accent` from the client's portfolio, not from generic palettes.
3. **Write copy first, design second.** Draft all nine sections as plain text in the tone rules of §4. Read aloud. Cut 30%. Read aloud again. If any sentence sounds like an ad, rewrite it.
4. **Place the work.** Projects section gets the highest-resolution, most curated 3–9 images. Each caption is one sentence.
5. **Fill the structure.** Map copy into the section order of §3. Resist the urge to add extra sections.
6. **Apply motion.** Only reveal-up and hover micro-interactions from §6. Test on mobile first.
7. **Add function:** working WhatsApp FAB, working accessibility panel with `localStorage`, working form submission (mailto or endpoint), working FAQ accordion.
8. **Audit against §2 DO NOT list.** Every item. Out loud.
9. **Mobile pass.** Nav on one line. Hero legible. No horizontal scroll. Touch targets ≥ 44px. FABs don't cover content.
10. **Performance pass.** Preload hero font and hero image. Lazy-load below-fold images. Compress frames to ≤ 120KB each if using scrubber. Lighthouse ≥ 90 on mobile.
11. **Accessibility pass.** All images have `alt`. All buttons have `aria-label`. Focus order is logical. Keyboard-only navigation completes the primary CTA path.
12. **Ship.** Cache-bust CSS (`?v=N`). Deploy to Vercel. Test on a real phone, not just DevTools.

### How to ensure it doesn't look generic

- **The generic test:** could this page be swapped onto any other service provider in the same industry with only a logo change? If yes, it is generic. Fix by: replacing one section with something the competitor literally cannot say (a specific method name, a specific portfolio detail, a specific belief).
- **The silence test:** remove every sentence that doesn't contain a concrete noun or verb specific to this client. If a paragraph shrinks to nothing, it was filler.
- **The photo test:** would the photos alone, with no text, already convince the ideal client? If no, the photos are the problem — not the copy.
- **The restraint test:** after finishing, remove three things. A line, a section divider, a button. The page should feel better, not worse. If it feels worse, you built the right amount. If it feels better, keep removing.

### Credit
Every page ends with a small studio credit in the footer (e.g. `עוצב ופותח ע"י [studio]`), quiet, one line, accent-colored link. This is the signature, not a banner.
