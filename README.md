# Comprehensive Exam Study Site

Interactive study notes for a PhD comprehensive exam in ecosystem modelling.
One HTML page per syllabus concept: explanation at exam depth, equations,
small interactive figures, exam-style questions with hidden answers, and references.

The syllabus is in `Syllabus for Comprehensive Exam.docx.md`.

## Layout

```
index.html                      landing page: all syllabus concepts, links to finished pages
assets/site.css                 shared styles (light + dark theme)
assets/site.js                  theme toggle, table-of-contents highlighting, KaTeX rendering
topics/<slug>.html              32 concept pages, one per syllabus topic (see PAGE_GUIDE.md for the canonical order)
PAGE_GUIDE.md                   template and conventions for writing or revising a concept page
.nojekyll                       tells GitHub Pages to serve files as-is
```

Everything is static HTML, CSS and JavaScript. The only external resources are
Google Fonts and KaTeX (from cdnjs) for equations, so an internet connection is
needed for fonts and maths, but no build step or server is required.

## Viewing locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Status

All 32 syllabus concepts have a page (14 SPAC, 7 biogeochemistry, 11 statistics/ML).
Every page has interactive figures, exam-style questions with model answers, and a reference
list. Reference DOIs were written from memory and should be spot-checked before relying on them;
each page says so at the end of its reference list.

## Revising or adding a page

Follow `PAGE_GUIDE.md`. Copy an existing page, keep the shared head/header/footer, and keep the
pager links in the canonical order listed in the guide. Cards on `index.html` link to `topics/<slug>.html`.

## Publishing with GitHub Pages

1. Push the repository to GitHub.
2. On GitHub: Settings → Pages → Build and deployment → Source: *Deploy from a branch*,
   Branch: `main`, folder: `/ (root)`. Save.
3. After a minute the site is live at `https://djaiswal.github.io/Haripriya-comp/`.

## Keeping the repository private

GitHub Pages on a **private** repository requires GitHub Pro, Team or Enterprise.
Teachers can get Pro free through GitHub Education (https://education.github.com/teachers).
Options, from simplest to most private:

| Option | Repo visibility | Site visibility | Cost |
|---|---|---|---|
| Public repo + GitHub Pages | Public | Public URL | Free |
| Private repo + GitHub Pages | Private | Public URL (unlisted, anyone with the link) | GitHub Pro (free for verified teachers) |
| Private repo, no hosting; student added as collaborator | Private | Student downloads/clones and opens `index.html` | Free |
| Private repo + Cloudflare Pages with Cloudflare Access | Private | Only invited email addresses | Free for up to 50 users |

To make the repository private from the command line:

```
gh repo edit djaiswal/Haripriya-comp --visibility private --accept-visibility-change-consequences
```

To give the student access to a private repository:

```
gh repo add-collaborator djaiswal/Haripriya-comp <student-github-username>
```

(or Settings → Collaborators → Add people on GitHub).
