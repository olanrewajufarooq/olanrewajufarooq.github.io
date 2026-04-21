# olanrewajufarooq.github.io

Personal academic website for Farooq Olanrewaju — PhD researcher in Systems and Control Engineering at KFUPM, with a focus on robotics, marine systems, and AI.

**Live:** [https://olanrewajufarooq.github.io](https://olanrewajufarooq.github.io)

## 🛠 Tech Stack

- **[Astro 5](https://astro.build)** — static site generation, pages, layouts
- **[React 18](https://react.dev)** — interactive islands (theme toggle, project grid/timeline)
- **TypeScript** — type-safe components and data
- **GitHub Actions** — automated build and deploy to GitHub Pages

## 📂 Project Structure

```
olanrewajufarooq.github.io/
├── src/
│   ├── layouts/        # MainLayout.astro (sidebar, header, footer)
│   ├── components/     # Sidebar.astro, Hero.astro, ThemeToggle.tsx, ProjectsSection.tsx
│   ├── pages/          # index.astro, education.astro, research.astro, publications.astro
│   ├── styles/         # style.css, themes.css, animations.css, layout-design5.css
│   └── data/           # profile.json, projects.json, publications.json, education.json, mooc.json
│
├── public/
│   └── assets/
│       ├── images/     # logos/, certificates/, me/, research/
│       ├── files/      # cv.pdf
│       ├── js/         # particles.js
│       └── references/ # .bib files
│
├── .github/workflows/
│   └── deploy.yml      # Build + deploy to GitHub Pages
│
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🌐 Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | About, featured projects, publications preview |
| Education | `/education.html` | Degrees, tech skills, MOOC certificates |
| Research | `/research.html` | Research focus, all projects (grid & timeline view) |
| Publications | `/publications.html` | Published papers and works under review |

## ✨ Features

- 🎨 **Dark/light theme** — persistent via `localStorage`, no flash on load (FOUC-free)
- 📌 **Fixed sidebar** — headshot, nav links, social icons, short bio
- ⚛️ **Astro Islands** — React hydrated only for interactive components; rest is zero-JS static HTML
- 📊 **Project views** — toggle between grid and timeline layouts
- 🎓 **Education cards** — degree cards with institution logos, skills, and MOOC certificates
- 📚 **Publications** — only published and under-review work shown (drafts hidden)
- 📱 **Responsive** — hamburger nav on mobile
- 🚀 **CI/CD** — every push to `main` builds and deploys automatically

## 🚀 Local Development

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview built site
```

## 📝 Updating Content

All content lives in `src/data/` as JSON — no need to touch HTML or components.

| File | What to edit |
|------|-------------|
| `profile.json` | Name, bio, nav links, social links |
| `projects.json` | Research projects |
| `publications.json` | Papers (set `status` to `"published"`, `"review"`, or `"draft"`) |
| `education.json` | Degrees and skills |
| `mooc.json` | Online certificates |

## 🔗 Links

- [GitHub](https://github.com/olanrewajufarooq)
- [LinkedIn](https://www.linkedin.com/in/olanrewajufarooq/)
- [ORCID](https://orcid.org/0000-0002-8953-4564)

## 📝 License

See [LICENSE](LICENSE) for details.
