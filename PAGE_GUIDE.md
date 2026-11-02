# Page guide for concept pages

Every concept page lives at `topics/<slug>.html` and must be a complete, standalone HTML document
(`<!doctype html>`, `<html lang="en">`, `<head>`, `<body>`). The reference implementation is
`topics/c3-photosynthesis.html`; read it in full before writing a page, and read `assets/site.css`
for the available classes. Do not edit `assets/`, `index.html`, or another topic's file.

## Audience and depth

A PhD student preparing for a comprehensive exam in ecosystem modelling. Pages must be conceptually
strong: definitions, the governing equations with derivations where an examiner could ask for one,
the assumptions and limits of each model, typical parameter values with units, and the link from
process to ecosystem/land-surface model. Target 1,800–3,000 words of prose plus 2–4 interactive
figures. Write plainly; no filler.

## Required structure (same order as the C3 page)

1. Same `<head>` (Google Fonts link, KaTeX 0.16.9 css/js + auto-render from cdnjs, `../assets/site.css`,
   `../assets/site.js`, all `defer`). Page-specific CSS in a `<style>` block. `<title>` is the concept name.
2. Same `header.topbar` with `#themeBtn`.
3. `div.pagehead` with crumbs (Home › Section › Concept), an `.eyebrow` naming the syllabus section,
   `h1`, and a `p.lead` of one or two sentences.
4. `div.layout` containing `article.prose` and `aside.toc` (TOC links to every section id).
5. Sections inside the article, each a `<section id="...">` with an `h2`:
   - "The one-paragraph version" plus a `.callout` with the "Examiner's lens".
   - 3–6 concept sections. Equations in KaTeX: display `$$...$$` inside `<div class="eq">`, inline `\( ... \)`.
   - 2–4 `.lab` panels (interactive figures). Use the C3 page patterns exactly: `.lab-head`, `.lab-grid`,
     `.controls` with `.ctrl` blocks (`<label for="id"><span>Label (units)</span><output id="idO"></output></label><input type="range" ...>`),
     `dl.readout` for computed values, SVG built in plain JS with `createElementNS` (no chart libraries),
     hover crosshair + `.chart-tip` tooltip for curves, `.legend` with `--c` colours, a collapsed
     `<details>` "Table of values". Include a short "Suggested experiments" note under each lab.
   - A `.keybox` or `.callout` where a derivation or key result deserves emphasis.
   - "Connections to ecosystem models" (how the concept appears in models such as CLM, JULES, ORCHIDEE,
     BioCro, DayCent, MIMICS, Century, etc., as relevant).
   - "Numbers to remember" table (`.tablewrap > table`, `th/td.num` for numeric columns, units always).
   - "Exam-style questions": 6–8 `details.q` items with full model answers (derivations, sketches described in words,
     comparisons). Make them the kind of question an examiner actually asks.
   - "References and further reading": `ol.refs`, 8–14 items, each with a `.why` line. Give DOIs only for papers you
     are confident exist with those details; prefer canonical papers and textbooks. End with the line
     "DOI links were written from memory of the literature; please confirm each resolves before passing the list on."
   - `nav.pager` with previous/next links using the canonical order below (`../index.html` for the first page's previous).
6. Same `footer.site`.

## Interactive figures

- Plain JS, SVG, theme tokens only: curves use `var(--series-1)`, `var(--series-2)`, `var(--series-3)`,
  `var(--accent)`, `var(--accent-2)`; the "net"/main line uses `var(--fg)`. Text uses `fill: var(--fg)` or `var(--muted)`.
  Never hard-code colours that only read in one theme.
- One y-axis per chart. Axes with ticks, axis labels with units, direct labels on curves, legend when ≥2 series.
- Controls change the figure immediately (`input` events). Default slider values must show a realistic, informative state.
- Draw to scale; clamp values to the plot box; keep labels inside the viewBox.
- Respect `prefers-reduced-motion` for anything animated.

## Self-check before finishing

1. Extract the inline `<script>` and run `node --check` on it.
2. Render once with headless Chrome at 1280 px wide and look at the screenshot:
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --window-size=1280,9000 --virtual-time-budget=6000 --screenshot=<out.png> "file://<abs path to page>"`
   Fix anything clipped, overlapping, or overflowing. Crop with `sips -c <h> <w> --cropOffset <y> <x> <png>` to inspect regions.
3. Confirm no element is wider than the viewport at 500 px (headless Chrome's minimum width).

## Canonical page order (slug → title)

Soil–Plant–Atmosphere Continuum
1. c3-photosynthesis → C3 Photosynthesis
2. c4-photosynthesis → C4 Photosynthesis
3. cam-photosynthesis → CAM Photosynthesis
4. fvcb-model → The FvCB Model
5. response-curves → A–Ci, A–Q and A–T Response Curves
6. stomatal-conductance → Stomatal Conductance Models
7. canopy-upscaling → Canopy Upscaling
8. acclimation-thermal-response → Acclimation and Thermal Response
9. water-potential-vpd → Water Potential and VPD
10. transpiration-penman-monteith → Transpiration and Penman–Monteith
11. soil-water-dynamics → Soil Water Dynamics
12. drought-response-lai → Drought Response and Leaf Area Index
13. nutrients → Macro- and Micronutrients
14. root-microbe-interactions → Root–Microbe Interactions

Soil Biogeochemistry
15. som-pools-fluxes → Soil Organic Matter Pools and Fluxes
16. microbial-explicit-models → Microbial-Explicit Models
17. maom-pom → Mineral-Associated and Particulate Organic Matter
18. stoichiometry-cnp → C:N:P Stoichiometry
19. nitrogen-cycling → Nitrogen Cycling
20. phosphorus-cycling → Phosphorus Loss and Retention
21. carbon-cycle-overview → The Carbon Cycle

Statistics, Machine Learning, and Mathematics
22. hypothesis-testing-ci → Hypothesis Testing and Confidence Intervals
23. decision-trees-random-forest → Decision Trees and Random Forests
24. closed-form-convex-loss → Closed-Form Solutions and Convex Loss
25. gradient-descent → Gradient Descent
26. maximum-likelihood → Maximum-Likelihood Estimation
27. bias-variance → Bias–Variance Analysis
28. logistic-regression → Logistic Regression
29. newton-raphson → The Newton–Raphson Method
30. k-means → k-Means Clustering
31. gaussian-mixture-models → Gaussian Mixture Models
32. pca → Principal Component Analysis

Crumb section labels: "Soil–Plant–Atmosphere Continuum" (anchor `../index.html#spac`),
"Soil Biogeochemistry" (`../index.html#biogeo`), "Statistics, ML & Mathematics" (`../index.html#stats`).
Eyebrow text: "Topic N of the <section> section" using the numbering within each section
(SPAC 1–14, Biogeochemistry 1–7, Stats 1–11).
