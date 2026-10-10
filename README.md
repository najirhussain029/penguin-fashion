# Penguin Fashion

Penguin Fashion is a responsive winter jacket landing page built from a Figma design using HTML, CSS, and vanilla JavaScript.

- **Live website:** [penguin-fashion-topaz.vercel.app](https://penguin-fashion-topaz.vercel.app/)
- **GitHub repository:** [najirhussain029/penguin-fashion](https://github.com/najirhussain029/penguin-fashion)

## Overview

The page presents a winter collection with a hero area, women's and men's jacket collections, shopping benefits, and a contact section.

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Google Fonts

The website is a static front-end project. It does not require a JavaScript framework or a build step.

## Project structure

```text
penguin-fashion/
├── assets/
│   └── images/                 # Hero and product images
├── css/
│   ├── base.css                # Theme variables, reset, shared layout
│   ├── header-hero.css         # Header, navigation, hero, image frames
│   ├── products-benefits.css   # Product collections and benefits
│   ├── contact.css             # Contact section and form
│   ├── footer.css              # Footer
│   └── responsive.css          # Responsive breakpoints and reduced motion
├── js/
│   └── main.js                 # Mobile navigation and image error handling
├── index.html
└── README.md
```

The stylesheet files are linked individually from `index.html`.

## Run locally

1. Open a terminal in the project folder.
2. Start a local web server:

   ```bash
   python -m http.server 8000
   ```

3. Visit [http://localhost:8000](http://localhost:8000).

## Typography

The project loads both typefaces from Google Fonts:

- **Bebas Neue** for headings
- **Roboto** for body text

An internet connection is needed for the Google Fonts stylesheet to load.

## Assets

The hero and product image files are kept in `assets/images/`. The project includes:

- `hero-man.png`
- `women-denim-jacket.png`
- `women-hooded-jacket.png`
- `women-purple-jacket.png`
- `jacket-4.png`
- `jacket-5.png`
- `jacket-6.png`

The original image source URLs or attribution details were not provided.

## Design customizations

This project was built from a Figma design. The specific changes made from that design and the reasons for those changes were not provided, so they are not described here.

## Responsive approach

The layout uses a mobile-first approach. The responsive stylesheet defines breakpoints at:

- `560px`
- `800px`
- `1100px`

## JavaScript

`js/main.js` provides two behaviors:

- The mobile navigation button toggles the menu and updates its `aria-expanded` value. The menu closes when a navigation link is clicked or when Escape is pressed.
- If an image fails to load, its image frame displays a placeholder.

## Accessibility

Accessibility considerations in the project include:

- Semantic HTML landmarks and page sections
- ARIA labels and state for navigation and form controls
- Visible focus indicators for keyboard navigation
- Alternative text for content images
- Reduced-motion styling for users who request less motion

## Performance

- Product images use native lazy loading.
- The page uses a static HTML/CSS/JavaScript setup without a build step.

## Challenges

Project-specific challenges encountered during implementation were not provided, so they are not listed here.

## Why custom CSS

The site uses its own CSS files split by page area. The reason for choosing custom CSS over another styling approach was not provided.
