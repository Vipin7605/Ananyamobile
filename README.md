# Ananya Mobiles

A responsive, dependency-free shop website for Ananya Mobiles, Nachipalayam, Tiruppur. Built with semantic HTML, CSS and vanilla JavaScript. The original repository's phone, email and address are preserved.

## Run locally

Open `index.html` directly, or run `python3 -m http.server 8000` from this directory and visit http://localhost:8000.

## Features

- Responsive storefront with original vector/CSS device and shop illustrations.
- Phone finder by budget and priority, with a reviewable WhatsApp enquiry.
- Service links that preselect the enquiry category.
- Validated enquiry form, accessible modal, mobile navigation and sticky mobile contact actions.
- Direct call, email and Google Maps search links, FAQs, keyboard focus and reduced-motion support.
- No build pipeline, database, analytics, tracking cookies or client-side storage.

Enquiries are **not sent automatically**. A user reviews a prepared message, opens WhatsApp, and chooses whether to send it. Purchases, repair bookings, prices and availability must be confirmed by the shop. This is a storefront and enquiry frontend, not an ecommerce backend.

## Shop configuration

- Phone / WhatsApp: `+91 99657 89494` / `919965789494`, in `index.html` and `app.js`.
- Email: `ananyamobilesnp@gmail.com`, in `index.html`.
- Address and Maps search: in `index.html`. Replace the search URL with a verified place link when available.
- The original page gave both 7 AM–11 PM and 8 AM–10 PM. The redesign says to call and confirm hours until the owner resolves this conflict.
- Brand names indicate brands customers can ask about, not live inventory. There are no hard-coded product prices, fabricated reviews, ratings, or guaranteed EMI/exchange claims.
- Images are representative illustrations and are labelled accordingly.

## Deploy

Serve these files with any static host. For GitHub Pages, after merging the changes, select **Settings → Pages → Deploy from a branch → main → /(root)**. No build is required. Confirm shop details before publishing.

Google Fonts is an optional external request; system-font fallbacks keep the website usable if it is blocked. WhatsApp, Maps and email/phone handlers need the relevant external services or installed apps.
