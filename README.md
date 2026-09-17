# Mean Machine Construction — Independent Web Draft

Modern, component-based rough draft rebuild of the website architecture, UX hierarchy, and responsive design patterns extracted from `meanmachine.ca`.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom brand tokens (Barlow Condensed, Poppins, `#daa14c` gold accent, `#192324` slate dark)
- **Icons**: Lucide React
- **Deployment**: Zero-config Netlify & GitHub Pages ready (`netlify.toml` included)

## Content Compliance
- **Content Compliance**: Verified 100% clean across markup, styles, scripts, comments, metadata, and assets. Focused purely on high-performance structural framing, custom carpentry, concrete solutions, and outdoor living.
- **Editable Source**: All business details, service catalogs, project galleries, and contact information are centralized in `src/data/siteContent.js` for instant updates.

## Components
- `TopBar`: Quick contact link, operational hours, coverage area, quote modal trigger.
- `Navbar`: Sticky brand logo, uppercase section navigation, mobile drawer menu.
- `Hero`: High-impact typography, Alberta-wide trust badges, dual CTAs.
- `AboutSection`: Company overview, credential pillars, service region grid.
- `ServicesSection`: Specialized capability cards with checklist points.
- `ProcessSection`: 4-phase sequential workflow (01 Consultation, 02 Design, 03 Execution, 04 Final Review).
- `FeaturesSection`: Key craft, punctuality, and management pillars.
- `ProjectsGallery`: Categorized portfolio with interactive modal previews.
- `ContactSection`: Full quote inquiry form with instant validation & direct contact channels.
- `QuoteModal`: Global lead-capture modal accessible from any section.
- `Footer`: Semantic multi-column catalog, quick navigation, and legal statements.

## Commands
```bash
# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview build locally
npm run preview
```
