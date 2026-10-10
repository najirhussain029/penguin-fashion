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

All image files are kept in `assets/images/`.

**From the provided Figma design:**

- `jacket-4.png`
- `jacket-5.png`
- `jacket-6.png`

**Sourced externally from Google Images or websites:**

- `hero-man.png`
- `women-denim-jacket.png`
- `women-hooded-jacket.png`
- `women-purple-jacket.png`

These external images are used only as demo content for this learning project. I do not claim ownership of them. They were found through Google Images and are used here for demonstration only. They can be replaced with free-license images from Unsplash or Pexels.

The icons and illustrations are emojis and CSS-drawn shapes, so no icon library is used.

## Design customizations

I followed the Figma layout and made these changes:

- I changed the prices from USD ($234) to BDT (৳800 to ৳1,200). The original USD price would be far too high for local customers, so I set realistic prices for each jacket myself.
- I added a Contact & Live Support section with a message form to make the page more complete.
- Navigation labels and some headings were reworded to suit the winter collection theme.
- Button color is teal instead of the original green.

## Responsive approach

The layout uses a mobile-first approach. The responsive stylesheet defines breakpoints at:

- `560px`
- `800px`
- `1100px`

On small screens the menu becomes a hamburger button and products appear in a single column. On larger screens the full navigation bar and multi-column product grids are shown.

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
- Possible improvement: convert the PNG images to WebP to reduce file size.

## Challenges

- Making the hero section stack on mobile and sit side by side on desktop without breaking the layout.
- Keeping product images consistent in size, since the images came from different sources and some had backgrounds that did not match.
- Building the mobile menu so it works with a keyboard and screen reader (`aria-expanded`, Escape key).

## Why custom CSS

I wrote custom CSS instead of using a framework to have full control over the design, to match the Figma layout closely, and to avoid loading unnecessary libraries. I split the CSS by page section (header, products, contact, footer, responsive) so it is easy to read and maintain.
