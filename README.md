# Penguin Fashion

A responsive winter-jacket collection landing page built with HTML, CSS, and vanilla JavaScript.

## Project structure

```text
penguin-fashion/
├── assets/
│   └── images/               # Hero and product images
├── css/
│   ├── base.css              # Theme variables, reset, and shared layout
│   ├── header-hero.css       # Header, navigation, hero, and image frames
│   ├── products-benefits.css # Product collections and benefits section
│   ├── contact.css           # Contact section and form
│   ├── footer.css            # Footer
│   └── responsive.css        # Breakpoints and reduced-motion styles
├── js/
│   └── main.js               # Mobile navigation and missing-image handling
├── index.html
└── README.md
```

The page loads the CSS files separately from `index.html` in the order listed above. This keeps styles organized by section while preserving the original custom-CSS design. No CSS framework, package installation, or build step is required.

## Run locally

From the project folder, start a static web server:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

## Deployment

- **GitHub repository:** [najirhussain029/penguin-fashion](https://github.com/najirhussain029/penguin-fashion)
- **Vercel site:** [penguin-fashion-topaz.vercel.app](https://penguin-fashion-topaz.vercel.app/)

The project is a static site and can be deployed to Vercel with the project root as its root directory and no build command or output directory.

## Page sections

- Responsive navigation and winter collection hero
- Women's and men's jacket collections
- Shopping benefits
- Contact and live support form
- Contact details in the footer
