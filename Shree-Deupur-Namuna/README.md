# System Blueprint: Patichaur Private Boarding School Portal

This document serves as the master specification and implementation roadmap for the Agentic Mode build inside Antigravity IDE. Execute all steps sequentially using React, Tailwind CSS, and React Router.

## 1. Project Core & Meta Definition
- **Institution Name:** Shree Deupur Namuna English Secondary Boarding School
- **Type:** Private Boarding School
- **Location:** Modi Rural Municipality, Patichaur, Parbat, Nepal
- **Academic Scope:** Nursery to Grade 10 (Secondary Education Examination - SEE)
- **Key Offerings:** Quality education, Computer Lab facility, Library facility, Science Lab, Annual Sports Week, Extra-Curricular Activities (ECA), and Cultural Programs.
- **Official Facebook Page:** https://www.facebook.com/p/Shree-Deupur-Namuna-English-Secondary-Boarding-School-100054545496805/

## 2. Global Navigation Architecture (Tabs)
The application must configure a robust client-side router (`react-router-dom`) supporting five primary views across a sticky, glassmorphism navigation bar:
1. `Home` (`/`) - Core landing page, feature highlights, and leadership messages.
2. `About Us` (`/about`) - Vision, academic philosophy, history, and leadership details.
3. `Facilities` (`/facilities`) - Dedicated breakdowns of the Computer Lab, Library, Science Lab, and boarding amenities.
4. `Admissions` (`/admissions`) - Process, eligibility criteria, and a dynamic fee estimation slider.
5. `Events & Activities` (`/events`) - Showcasing Sports Week, ECA programs, and cultural celebrations.

## 3. UI/UX Style & Design Tokens
- **Primary Color Palette:** Deep Corporate Slate Navy (`bg-slate-900`, `text-slate-100`) inspired by `image_08eb82.png`.
- **Secondary Accent:** Crisp Emerald Green / Mint (`#10B981`) or Warm Amber to reflect a modern educational aesthetic.
- **Typography:** Playfair Display (Serif) for headings and Source Sans 3 (Sans-Serif) for highly legible body copy.

---

## 4. Homepage Component Breakdown & Specification

### Section A: Hero & Introduction Banner
- Modern split or centered layout introducing the school's mission.
- Highlight the geographical setting (nestled in Modi Rural Municipality, Parbat) with smooth scroll actions leading to the admissions pipeline.

### Section B: Leadership Messages (Founder & Principal)
- Two symmetrical UI grid cards featuring placeholder portraits.
- **Card 1: Message from the Founder:** Focused on the vision of bringing modern, high-quality boarding education to the Parbat region.
- **Card 2: Message from the Principal:** Focused on the day-to-day academic excellence, SEE preparation, and the balance of sports/ECA with strict scientific and computing disciplines.

### Section C: Combined Master Footer Design
Synthesize the structural designs from `image_08eb82.png` and `image_08ebc2.jpg` into a single, cohesive, four-column layout wrapped in a premium Slate Navy background:

1. **Column 1: Identity & Description (From image_08eb82.png)**
   - Display the School Logo placeholder on the left.
   - Positioned directly underneath the logo, render a clean, brief description text establishing the school's background, its dedication to nursery through Grade 10 (SEE) training, and its core purpose in Patichaur.
2. **Column 2: Navigation Links (From image_08eb82.png)**
   - Vertical list of clean bullet links: Home, About Us, Facilities, Admissions, Events & Activities.
3. **Column 3: Contact Details (From image_08eb82.png)**
   - Structured typography showing:
     - *Address:* Patichaur, Modi Rural Municipality, Parbat, Nepal
     - *Phone:* [Insert Phone Number Placeholder]
     - *Email:* [Insert School Email Placeholder]
   - Elegant, minimalist circular social icons arranged cleanly underneath the text block.
4. **Column 4: Locate Us Map Integration (From image_08ebc2.jpg)**
   - Heading: "LOCATE US"
   - Embed a responsive Google Maps iframe pinpointing the school coordinates. 
   - Add a beautifully styled Tailwind button or overlay reading "Open in Maps ↗" that links directly to the official Google Maps link: https://maps.app.goo.gl/42Exk8gpffw8RQes6

---

## 5. Sequential Implementation Checklist for the Agent

- [ ] **Task 1:** Initialize Vite project structure (`npm create vite@latest . -- --template react`).
- [ ] **Task 2:** Install runtime dependencies (`npm install react-router-dom lucide-react`).
- [ ] **Task 3:** Install and initialize Tailwind CSS, mapping out the deep slate navy color tokens.
- [ ] **Task 4:** Create structural layout wrappers (`Navbar.jsx`, `Footer.jsx` with the hybrid map layout).
- [ ] **Task 5:** Scaffold individual pages inside `/src/pages/` focusing heavily on the homepage components (Hero, Founder/Principal blocks, Core facilities highlights).
- [ ] **Task 6:** Create a `netlify.toml` file at the root to handle client-side path rewriting (`status = 200` to `/index.html`).
- [ ] **Task 7:** Run local production compiler tests (`npm run build`) to ensure zero broken imports or linter faults.