# FACEIT Demo Auto Manager - Landing Page

Official landing page for FACEIT Demo Auto Manager - a browser extension and native app for automatic CS2 demo management.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide Icons** - Icon library

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── welcome/page.tsx     # Post-install welcome page
│   ├── privacy/page.tsx     # Privacy policy
│   └── layout.tsx           # Root layout
├── components/
│   ├── layout/sections/     # Page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── how-it-works.tsx
│   │   ├── installation.tsx
│   │   └── footer.tsx
│   └── ui/                  # Reusable UI components (shadcn)
├── lib/
│   └── utils/               # Utility functions
└── public/                  # Static assets
```

## Development

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env .env.local
```

3. Update `.env.local` with your actual URLs

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` folder.

## Environment Variables

Required environment variables (set in `.env`):

```env
# Chrome Web Store extension URL
NEXT_PUBLIC_EXTENSION_URL=https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID

# Native app installer direct download
NEXT_PUBLIC_NATIVE_APP_DOWNLOAD_URL=https://github.com/.../FaceitDemoAutoManagerSetup.exe

# GitHub releases page
NEXT_PUBLIC_NATIVE_APP_URL=https://github.com/vdmk21lab/faceit-demo-auto-manager-native-app/releases

# GitHub repository
NEXT_PUBLIC_GITHUB_REPO=https://github.com/vdmk21lab/faceit-demo-auto-manager-native-app

# Documentation URL
NEXT_PUBLIC_DOCS_URL=https://your-docs-url.com
```

## Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages via GitHub Actions on push to `master`.

Workflow: `.github/workflows/deploy.yml`

### Manual Deployment

```bash
npm run build
# Upload the `out/` folder to your hosting provider
```

## Pages

- **/** - Homepage with hero, features, how it works, installation
- **/welcome** - Post-extension-install page prompting native app download
- **/privacy** - Privacy policy

## Customization

### Adding New Sections

1. Create a new component in `components/layout/sections/your-section.tsx`
2. Import and use it in `app/page.tsx`

### Styling

Tailwind CSS is configured in `tailwind.config.ts`. The theme uses:
- Primary color: Orange (#f25b00)
- Dark mode support via `next-themes`

## License

MIT License

## Support

For issues or questions:
- Email: vdmk21lab@gmail.com
- GitHub Issues: [Report an issue](https://github.com/vdmk21lab/faceit-demo-auto-manager-native-app/issues)
