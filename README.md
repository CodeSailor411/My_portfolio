# Elyes Thabet - Portfolio

Personal portfolio for [Elyes Thabet](https://github.com/CodeSailor411), a Biomedical Engineering student and researcher focused on biosignal processing, wearable AI, embedded systems, and accessible healthcare technology.

[View the live portfolio](https://elyes-thabet.netlify.app/) | [LinkedIn](https://www.linkedin.com/in/elyes-thabet-alchemist/) | [GitHub](https://github.com/CodeSailor411)

## What the site covers

- Cervical-PPG silent-speech research and end-to-end embedded inference
- Selected biomedical and assistive engineering projects
- Research experience at Queen's University Belfast, National Chung Cheng University, AI4U, and ISTMT
- Biomedical Engineering education, technical capabilities, leadership, and publication
- Downloadable July 2026 resume with an in-browser PDF preview

## Experience

The interface keeps the original dark-purple identity while adding:

- Resume-backed content and a clearer research narrative
- Lightweight, code-native biosignal and project visuals
- Responsive layouts for desktop, tablet, and mobile
- Intersection-based reveals and restrained ambient motion
- Full `prefers-reduced-motion` support
- Visible keyboard focus, semantic landmarks, and labeled controls
- SEO, Open Graph, PWA metadata, and Netlify route fallback

## Built with

- React 17
- React Router
- React Icons
- CSS custom properties, Grid, and responsive animation
- Create React App build tooling
- Netlify

## Run locally

You will need Node.js and Git.

```bash
git clone https://github.com/CodeSailor411/My_portfolio.git
cd My_portfolio
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000).

Create an optimized production build with:

```bash
npm run build
```

Run the test suite with:

```bash
npm test -- --watchAll=false
```

## Project structure

```text
public/                    Site metadata, favicon, and Netlify redirects
src/Assets/resume.pdf      Current one-page resume
src/components/            Pages and reusable interface components
src/data/portfolio.js      Resume-backed content source
src/App.js                 Routing and application shell
src/index.css              Global tokens and base styles
src/style.css              Portfolio layout, components, and motion
```

## Deployment

The public site is deployed at [elyes-thabet.netlify.app](https://elyes-thabet.netlify.app/).
