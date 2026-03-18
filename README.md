# Swapnil Badgujar Portfolio

Single-page React portfolio built with Vite, Tailwind CSS, and GSAP.

## Tech Stack

- React
- Tailwind CSS
- GSAP with ScrollTrigger
- Lucide React icons

## Development

1. Install dependencies with `npm install`
2. Start local development with `npm run dev`
3. Build for production with `npm run build`

## EmailJS Setup

1. Create a `.env` file in the project root.
2. Add these variables:
	- `VITE_EMAILJS_SERVICE_ID`
	- `VITE_EMAILJS_TEMPLATE_ID`
	- `VITE_EMAILJS_PUBLIC_KEY`
3. In your EmailJS template, use these variables:
	- `to_name`
	- `to_email`
	- `from_name`
	- `from_email`
	- `reply_to`
	- `subject`
	- `message`

## Editable Content

- Main profile data: `src/data/portfolio.js`
- Section layouts: `src/components/`
- Theme and effects: `src/index.css`

## Notes

- The contact form sends with EmailJS when the environment variables are configured.
- Project cards are placeholders so real projects can be added later.