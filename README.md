# ARVYS Book Club

A responsive, single-page landing site for a tech book club. It covers the club's pitch, how membership works, pricing tiers, a testimonial and a closing call to action. Built with plain HTML, CSS and JavaScript, with no frameworks or build step.

## Project structure

```
techbookclub/
├── index.html      # Page markup
├── styles.css      # All styling and responsive rules
├── script.js       # Smooth scrolling, image fallback, footer year
├── README.md
└── images/
    ├── hero.jpg            # Hero section photo
    ├── read-together.jpg   # "Read together, grow together" photo
    └── community.jpg       # "Not your average book club" photo
```

## Getting started

1. Download or clone the project and keep the folder structure as shown above.
2. Open `index.html` in any modern browser.

To serve it locally instead, run one of these from the project folder and open the address it prints:

```bash
python3 -m http.server 8000
# or
npx serve
```

An internet connection is needed on first load for the Google Fonts (Space Mono and Inter). Without it, the page falls back to system fonts.

## Page sections

1. **Hero:** headline, short pitch, call-to-action button and social proof.
2. **Read together, grow together:** photo with a checklist of member benefits.
3. **Not your average book club:** community description with a circled "club" and TS, GitHub and React badges.
4. **Your tech reading journey:** four-step process.
5. **Membership options:** Starter ($19/month), Pro ($29/month) and Enterprise (custom).
6. **Testimonial:** a single customer quote.
7. **Closing call to action and footer:** second button, social proof, copyright and social icons.

## Customization

**Colors, fonts and radius:** edit the CSS variables at the top of `styles.css`:

```css
:root {
  --ink: #0f2a33;      /* text and dark footer */
  --peach: #fbf3f1;    /* light background tint */
  --blue: #d3e3ea;     /* gradient end color */
  --accent: #e9a27f;   /* stars, circled word, step arrows */
  --mono: "Space Mono", monospace;
  --sans: "Inter", sans-serif;
}
```

**Text and pricing:** edit the content directly in `index.html`. Each pricing plan is an `<article class="plan">` block.

**Photos:** replace the files in `images/`, keeping the same file names, or update the `src` attributes in `index.html`. Photos are cropped to fit, so images with a similar aspect ratio work best. If a photo is missing, the script hides it and a brown gradient placeholder shows instead.

**Links:** the "Subscribe now" and "Talk to us" buttons and the footer social icons point to `#`. Replace them with your real URLs.

## JavaScript behavior

- Smooth-scrolls the "Review membership options" buttons: the first goes to the pricing section, the second back to the top.
- Hides any image that fails to load so the placeholder shows.
- Sets the footer year automatically.

## Responsive behavior

- Above 800px: two-column layouts, four-step journey in one row, three pricing cards side by side.
- 800px and below: sections stack into one column, the journey becomes a 2×2 grid, the pricing cards stack, and the floating tech badges and step arrows are hidden.
- Smooth scrolling and button transitions are turned off for visitors who prefer reduced motion.

## Browser support

Works in current versions of Chrome, Edge, Firefox and Safari.

## Credits

- Fonts: [Space Mono](https://fonts.google.com/specimen/Space+Mono) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- Photos: supplied by the project owner. Make sure you have the right to use them before publishing.
