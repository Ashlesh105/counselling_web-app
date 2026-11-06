# 🪷 Sacred Healing & Counseling Sanctum

A modern + traditional spiritual counseling and vibrational healing web application built with **React 18 + TypeScript + Vite + Tailwind CSS**.

Consecrated for the auspicious launch at **Sri Venkateswara Kshetram (Tirupati Tirumala)**.

---

## 🌟 Highlights & Key Features

1. **Auspicious Tirupati Tirumala Launch Banner & Countdown**:
   - Live custom countdown timer to the launch moment tomorrow.
   - Dual divine presence: **Lord Venkateswara (Tirupati Balaji)** & **Lord Mahadev (Shiva)** with authentic Sanskrit slokas and translations.
   - **Automatic Consecration**: The millisecond the timer finishes:
     - 🔔 The bronze temple bell (*Ghanta*) chimes automatically via Web Audio API.
     - 🪷 Golden stars, marigold petals, and sacred vermilion sparks shower across the screen.
     - 🔱 The full divine darshan modal automatically pops up with blessings!
   - **432Hz Healing Frequency**: One-click toggle for a calming meditative drone.

2. **Soulful Counselor & Healer Journey**:
   - Focuses on non-judgmental listening, karma guidance, and prana/aura cleansing.
   - Ancient temple sanctum aesthetic: deep charcoal stone `#0B0F19`, warm temple gold `#D4AF37`, and sandalwood warmth.

3. **Interactive Energy & Vibe Assessment**:
   - 3-step interactive self-assessment diagnosing the seeker's current emotional state and recommending the ideal healing container.

4. **Multi-Channel Consultation Booking**:
   - Confidential booking form with intake note.
   - 1-click **Instant WhatsApp Connect** that pre-fills a respectful, formatted message for immediate chat with the counselor.

5. **100% Modular & Editable Content**:
   - Everything (launch date/time, counselor bio, offerings, pricing, phone numbers, and Sanskrit slokas) is managed in a single file: [`src/config/siteContent.ts`](file:///c:/Users/ASUS/Desktop/Personal%20projects/counsling_app/src/config/siteContent.ts).

---

## 🚀 How to Run the App

### Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `/dist` that can be deployed to **Vercel, Netlify, Cloudflare Pages, or GitHub Pages** in 1 click with zero server setup!

### 🐳 Run with Docker
Build and run using Docker:
```bash
docker build -t sacred-counseling-app .
docker run -d -p 8080:80 --name counseling-sanctum sacred-counseling-app
```
Or using Docker Compose:
```bash
docker compose up -d --build
```
Open **`http://localhost:8080`** in your browser.

---

## ⚙️ How to Change the Launch Date & Time

Open [`src/config/siteContent.ts`](file:///c:/Users/ASUS/Desktop/Personal%20projects/counsling_app/src/config/siteContent.ts) and edit:
```typescript
launch: {
  // Set your desired launch date and time here:
  defaultLaunchTimestamp: "2026-11-07T06:00:00+05:30",
  // ...
}
```

---

## ✏️ How to Customize Counselor Details

In [`src/config/siteContent.ts`](file:///c:/Users/ASUS/Desktop/Personal%20projects/counsling_app/src/config/siteContent.ts), update:
- `counselor.name`: Counselor's name
- `counselor.whatsapp`: WhatsApp number for direct chats (e.g. `919876543210`)
- `counselor.phone` & `email`: Direct contact info
- `counselor.bio` & `credentials`: Spiritual journey & background
- `offerings`: Service titles, durations, and fees
