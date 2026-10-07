# Peihan Cui Portfolio

A responsive, dark React portfolio with five pages: Home, Projects, Experience,
About, and Contact. Includes animated artwork, project filters and detail dialogs,
mobile navigation, keyboard accessibility, and reduced-motion support.

## Get started

Use Node.js 22.12+ (or 20.19+) and npm.

```sh
npm install
npm run dev
```

## Make it yours

- Edit **`src/data.js`** for your name, role, bio, skills, interests, education,
  experience, and projects. All initial projects and experience entries are samples.
- Replace `hello@example.com` with your real email address. The contact form opens
  an email draft in the visitor’s email app; it does not send or store messages.
- Add social links to `portfolio.socials`, for example
  `{ name: 'GitHub', url: 'https://github.com/your-username' }`.
- Add full `https://` URLs to each project’s `liveUrl` and `sourceUrl` to display
  links. Leave them empty to hide the buttons.
- Replace the monogram placeholder in the About page (`src/App.jsx`) with your
  photo if desired. Place your images in `public/` and use meaningful alt text.
- Change colors and fonts in **`src/index.css`**, layouts in **`src/App.css`**,
  and page text or markup in **`src/App.jsx`**.
- Update the title, description, and theme color in **`index.html`** and the icon
  in **`public/favicon.svg`**.

Fonts load from Google Fonts, with local sans-serif and Georgia fallbacks.
The project previews are built with CSS and require no external images.

## Validate and deploy

```sh
npm run lint
npm run build
npm run preview
```

Deploy the generated **`dist/`** directory to any static host. Navigation uses
hash URLs (such as `/#projects`), so no server-side route rewrites are needed.
For a GitHub Pages project site, build with
`npm run build -- --base=/Peihan_Cui_Portfolio/` and publish `dist/`.
For a custom domain or a root-level site, the default base is correct.

No backend, API keys, or additional services are required.
