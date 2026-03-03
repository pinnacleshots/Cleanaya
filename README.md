# Cleanaya - Cleaning Company Website

A modern, aesthetic website for Cleanaya cleaning services in Minnesota. Built with React, Vite, React Router, and Tailwind CSS.

## Tech Stack

- **React 19** – UI framework
- **Vite 7** – Build tool
- **React Router 7** – Client-side routing
- **Tailwind CSS 4** – Styling

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the site.

## Project Structure

- `src/pages/` – Route pages (Home, Services, About, Contact, Booking)
- `src/components/` – Reusable components (Layout, Hero, Logo, etc.)
- `public/logo.png` – Cleanaya logo

## BookingKoala Integration

When you're ready to connect BookingKoala:

1. Sign up and configure your BookingKoala account
2. Get your booking widget embed code or iframe URL
3. Open `src/pages/Booking.jsx` and replace the placeholder section with your BookingKoala embed

Example:

```jsx
{/* Replace the placeholder div with something like: */}
<iframe
  src="https://your-bookingkoala-url"
  title="Book a cleaning"
  className="w-full h-[600px] rounded-2xl border-0"
/>
```

Or use the BookingKoala JavaScript widget if provided.

## Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## Brand Colors

- **Slate** (CLEAN): `#4a5763`
- **Aqua** (AYA): `#22bed9`
- **Dark**: `#0a0a0a`
