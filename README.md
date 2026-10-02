# Suryakanta Bala — Portfolio

Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run

```sh
npm ci
npm run dev
```

Production: `npm run build` then `npm start`.

## Included

- Original portrait and byte-identical `public/Suryakanta_Bala_Resume_Final.pdf`.
- B.Tech currently pursuing at DRIEMS University, 12th Science at KBRC Higher Secondary School, and 10th at OAV Tangi.
- Four projects displayed once in a sequential showcase, with accessible detail dialogs.
- Hero bubbles, drifting ambient light, floating social links, and a pointer ring. No React state updates on pointer movement or scroll; pointer writes are limited to one requestAnimationFrame. Effects pause when the hero is offscreen or the page is hidden. Touch devices omit the cursor and use fewer bubbles. System and manual reduced-motion settings are respected.
- Contact form submits to FormSubmit for `myworldsurya912@gmail.com`, with required fields, length limits, a honeypot, and provider CAPTCHA. The direct email link remains available.

## Remaining owner setup

1. Set `socialLinks.instagram` in `src/data/portfolio.config.ts` to the owner's actual profile URL. Until provided, Instagram is omitted rather than linked to a guessed account.
2. Submit the live contact form and confirm FormSubmit's activation email in `myworldsurya912@gmail.com`. Delivery is not verified until activation and a real end-to-end inbox test are complete.
3. Import this repository into Vercel if not already connected. Use the Next.js preset, root directory, and default build settings. This site needs no environment secrets.

## Verification

Production build and TypeScript validation passed. Local HTTP checks confirmed the page, portrait and original PDF return 200; the PDF and portrait match the supplied files exactly. Served HTML contains the corrected education, resume link, and contact destination.

Browser verification was blocked by the current preview environment. Mobile visual layout, measured frame rate, cursor behavior, and live email receipt are not claimed as verified. A production deployment has not been confirmed.
