# olanrewajufarooq.github.io

A professional, modular personal website showcasing research, education, and projects in robotics and control engineering.

## 🌐 Overview

This is my GitHub Pages personal website, hosted at **https://olanrewajufarooq.github.io**

Refactored with a clean, modular architecture for easy maintenance and scalability.

## 📂 Project Structure

```
olanrewajufarooq.github.io/
├── index.html                 # Home & About
├── research.html              # Research Focus
├── projects.html              # Notable Projects
├── publications.html          # Papers & Publications
│
├── assets/
│   ├── css/
│   │   └── style.css         # Global styles
│   ├── js/
│   │   └── main.js           # Navigation & project loading
│   └── images/               # (for future use)
│
├── data/
│   └── projects.json         # Project data (loaded dynamically)
│
├── README.md
└── LICENSE
```

## 🌐 Pages

| Page | Purpose |
|------|---------|
| **index.html** | Home page with welcome, interests, and tech stack |
| **research.html** | Research focus, methodology, and collaboration interests |
| **projects.html** | Featured research projects with categories |
| **publications.html** | Published papers, under review, and in-draft work |

## ✨ Features

### Architecture
- ✅ **Modular design** - Separate HTML pages for different sections
- ✅ **Extracted CSS** - Single `style.css` for all pages
- ✅ **Dynamic content** - Projects loaded from `data/projects.json`
- ✅ **Reusable JavaScript** - Navigation state, project rendering

### Design
- 🎨 Dark theme with cyan accents (#7cebf5)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading - no external dependencies
- 🖨️ Print-friendly styles

### Content
- 🔬 Research overview and focus areas
- 📁 11+ research projects with descriptions
- 📚 Publications (published, under review, in draft)
- 🛠️ Tech stack: Python, MATLAB, ROS, Simulink, etc.
- 🎓 Education timeline (PhD, Masters, Bachelor's)
- 💼 Work experience highlights

## 🚀 Local Development

View locally:
```bash
# Option 1: Simple HTTP server (Python 3)
python -m http.server 8000
# Visit http://localhost:8000

# Option 2: Live server (VS Code extension)
# Install "Live Server" and right-click index.html → Open with Live Server

# Option 3: Open directly in browser
open index.html
```

## 📝 Adding New Content

### Add a Project
1. Edit `data/projects.json`
2. Add a new entry with title, url, date, description, technologies
3. Project automatically renders on `projects.html`

### Add a Publication
1. Edit `publications.html`
2. Add new timeline item in the appropriate section

### Update Styling
1. Modify `assets/css/style.css`
2. Changes apply to all pages automatically

## 🔧 Navigation

All pages have consistent header with navigation menu:
- 🏠 Home
- 🔬 Research
- 📁 Projects
- 📚 Publications

Active page is highlighted automatically via JavaScript.

## 📱 Responsive

Optimized for all screen sizes:
- 📱 Mobile (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktop (1200px+)

## 🔗 Links

- [GitHub](https://github.com/olanrewajufarooq)
- [LinkedIn](https://www.linkedin.com/in/olanrewajufarooq/)
- [ORCID](https://orcid.org/0000-0002-8953-4564)
- [Google Scholar](https://scholar.google.com/citations?user=olanrewajufarooq)

## 🔮 Future Enhancements

- [ ] Add CV/Resume download button
- [ ] Add dark/light theme toggle
- [ ] Add search functionality for projects
- [ ] Add contact form
- [ ] Add blog section
- [ ] Integrate with academic databases

## 📝 License

See [LICENSE](LICENSE) for details.
