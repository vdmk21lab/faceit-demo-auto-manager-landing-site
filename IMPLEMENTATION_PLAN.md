# FACEIT Demo Manager - Landing Page Implementation Plan

## Project Structure Analysis

**Current Setup:**
- Next.js 14 + React 18 + TypeScript
- Shadcn/UI components (pre-built)
- Tailwind CSS + lucide-react icons
- 12 pre-built sections (Hero, Features, Benefits, Services, etc.)

**Location:** `faceit-demo-manager/faceit-demo-landing-page/`

---

## Implementation Strategy

### Phase 1: Configuration & Setup ✅

**1. Environment Variables** ✅ DONE
Created `.env.local` with:
- `NEXT_PUBLIC_EXTENSION_URL` - Chrome Web Store link
- `NEXT_PUBLIC_NATIVE_APP_URL` - GitHub Releases link
- `NEXT_PUBLIC_GITHUB_REPO` - GitHub repository
- `NEXT_PUBLIC_DOCS_URL` - Documentation link

**2. Update Metadata** (app/page.tsx)
```typescript
export const metadata = {
  title: "FACEIT Demo Manager - CS2 Demo Utility",
  description: "Automate CS2 demo management. Download, organize, and play FACEIT demos with one click.",
  openGraph: {
    type: "website",
    url: "https://YOUR_USERNAME.github.io/faceit-demo-manager",
    title: "FACEIT Demo Manager",
    description: "Automate CS2 demo management for FACEIT players",
    images: [
      {
        url: "/screenshots/og-image.png",
        width: 1200,
        height: 630,
        alt: "FACEIT Demo Manager",
      },
    ],
  },
};
```

---

### Phase 2: Page Structure Redesign

**Current Sections (12):**
- ✅ HeroSection
- ❌ SponsorsSection (remove)
- 🔄 BenefitsSection (rename to HowItWorksSection)
- ✅ FeaturesSection (keep, customize)
- ❌ ServicesSection (remove)
- ❌ TestimonialSection (remove)
- ❌ TeamSection (remove)
- ❌ CommunitySection (remove)
- ❌ PricingSection (remove)
- 🔄 ContactSection (rename to InstallationSection)
- ✅ FAQSection (keep, optional)
- ✅ FooterSection (keep, customize)

**New Structure (app/page.tsx):**
```typescript
export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />  {/* replaces BenefitsSection */}
      <FeaturesSection />
      <InstallationSection />  {/* replaces ContactSection */}
      <FAQSection />  {/* optional */}
      <FooterSection />
    </>
  );
}
```

---

### Phase 3: Component Customization

## 1. Hero Section
**File:** `components/layout/sections/hero.tsx`

**Current Structure:** Generic hero with title, description, CTA buttons

**Customization Plan:**
```typescript
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Download, Chrome } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const extensionUrl = process.env.NEXT_PUBLIC_EXTENSION_URL;
  const nativeAppUrl = process.env.NEXT_PUBLIC_NATIVE_APP_URL;

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      {/* Left Column - Text Content */}
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Manage Your{" "}
            <span className="inline bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
              CS2 Demos
            </span>{" "}
            Effortlessly
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Automate downloading, organizing, and watching your FACEIT demos.
          Copy playdemo commands with one click.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-1/3 bg-orange-600 hover:bg-orange-700"
            asChild
          >
            <a href={extensionUrl} target="_blank" rel="noopener">
              <Chrome className="mr-2 h-5 w-5" />
              Get Extension
            </a>
          </Button>

          <Button
            variant="outline"
            className="w-full md:w-1/3"
            asChild
          >
            <a href={nativeAppUrl} target="_blank" rel="noopener">
              <Download className="mr-2 h-5 w-5" />
              Download Native App
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          ✓ Works on Windows 10/11
        </p>
      </div>

      {/* Right Column - Extension Screenshot */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/screenshots/extension-popup-screenshot.png"
          alt="FACEIT Demo Manager Extension"
          fill
          className="object-contain rounded-lg shadow-2xl"
          priority
        />
      </div>
    </section>
  );
};
```

**Key Changes:**
- Replace generic headline with CS2/demo-specific copy
- Add custom gradient for "CS2 Demos"
- Update CTAs to link to extension store + native app download
- Replace illustration with actual extension screenshot
- Use orange theme colors (orange-600, orange-400)

---

## 2. How It Works Section
**File:** Create new `components/layout/sections/how-it-works.tsx`

**Replace:** `benefits.tsx`

**Structure:**
```typescript
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Download, Settings, Terminal } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download Demo",
    description: "Download demo from your FACEIT match history",
  },
  {
    icon: Settings,
    title: "Auto-Process",
    description: "Extension decompresses and moves file to CS2 folder",
  },
  {
    icon: Terminal,
    title: "Copy & Play",
    description: "Copy command, paste in CS2 console (~), watch instantly",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        How It{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
          Works
        </span>
      </h2>
      <p className="text-muted-foreground text-center mt-4 mb-8 text-lg">
        Start reviewing matches in seconds
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {steps.map((step, index) => (
          <Card key={index} className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2
                            bg-orange-600 text-white rounded-full w-12 h-12
                            flex items-center justify-center font-bold text-xl
                            shadow-lg">
              {index + 1}
            </div>
            <CardContent className="pt-12 text-center space-y-4">
              <step.icon className="h-12 w-12 mx-auto text-orange-600" />
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
```

**Key Changes:**
- 3 numbered cards with icons
- Orange gradient for "Works"
- Step numbers in orange circular badges
- Clear, concise descriptions

---

## 3. Features Section
**File:** `components/layout/sections/features.tsx`

**Current Structure:** Feature grid with icons

**Customization:**
```typescript
import { Card, CardContent } from "@/components/ui/card";
import { Zap, FolderOpen, Copy, Trash2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automatic Detection",
    description: "Monitors FACEIT demo downloads and processes them automatically",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description: "Generates playdemo commands ready to paste in CS2 console",
  },
  {
    icon: FolderOpen,
    title: "Demo History",
    description: "Browse all demos with map names, dates, and metadata",
  },
  {
    icon: Trash2,
    title: "Smart Cleanup",
    description: "Delete demos directly from extension to free disk space",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Powerful{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
          Features
        </span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 text-lg">
        Built for players who need quick demo access
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg
                              flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
```

**Key Changes:**
- 4 feature cards (Automatic Detection, One-Click Copy, Demo History, Smart Cleanup)
- Orange icon backgrounds
- Hover effects for interactivity

---

## 4. Installation Section
**File:** Create new `components/layout/sections/installation.tsx`

**Replace:** `contact.tsx`

**Structure:**
```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chrome, Download } from "lucide-react";

export const InstallationSection = () => {
  const extensionUrl = process.env.NEXT_PUBLIC_EXTENSION_URL;
  const nativeAppUrl = process.env.NEXT_PUBLIC_NATIVE_APP_URL;

  return (
    <section id="installation" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Get Started in{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
          Minutes
        </span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 text-lg">
        Two simple steps to start managing your demos
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Step 1: Browser Extension */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8
                              flex items-center justify-center font-bold">
                1
              </div>
              <CardTitle>Install Browser Extension</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Visit Chrome Web Store</li>
              <li>Click "Add to Chrome"</li>
              <li>Pin extension to toolbar</li>
            </ol>
            <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
              <a href={extensionUrl} target="_blank" rel="noopener">
                <Chrome className="mr-2 h-5 w-5" />
                Get Extension
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Step 2: Native Host */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8
                              flex items-center justify-center font-bold">
                2
              </div>
              <CardTitle>Install Native Host</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Download Windows installer</li>
              <li>Run the .exe file</li>
              <li>Native host registers automatically</li>
            </ol>
            <Button className="w-full" variant="outline" asChild>
              <a href={nativeAppUrl} target="_blank" rel="noopener">
                <Download className="mr-2 h-5 w-5" />
                Download for Windows
              </a>
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Windows 10/11 supported
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
```

**Key Changes:**
- 2 cards: Browser Extension + Native Host
- Step numbers in orange circles
- Clear installation steps
- Direct download CTAs

---

## 5. Footer Section
**File:** `components/layout/sections/footer.tsx`

**Current Structure:** Footer with links

**Customization:**
```typescript
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";

export const FooterSection = () => {
  const githubRepo = process.env.NEXT_PUBLIC_GITHUB_REPO;
  const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL;

  return (
    <footer className="container py-24 sm:py-32">
      <div className="border rounded-2xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-2">FACEIT Demo Manager</h3>
            <p className="text-muted-foreground text-sm">
              Enhancing your FACEIT experience
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#how-it-works" className="hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#installation" className="hover:text-foreground">
                  Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={githubRepo} target="_blank" className="hover:text-foreground">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href={docsUrl} target="_blank" className="hover:text-foreground">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <a
              href={githubRepo}
              target="_blank"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 FACEIT Demo Manager. Not affiliated with FACEIT or Valve.</p>
        </div>
      </div>
    </footer>
  );
};
```

**Key Changes:**
- Simplified footer (remove unused links)
- 4 columns: Brand, Product, Resources, Connect
- GitHub link prominent
- Disclaimer about FACEIT/Valve affiliation

---

## 6. FAQ Section (Optional)
**File:** `components/layout/sections/faq.tsx`

**Keep or Remove:** Keep if you have common questions, otherwise remove

**Sample FAQs:**
```typescript
const faqs = [
  {
    question: "Is this safe to use?",
    answer: "Yes, the extension only reads downloaded files and communicates with the local native host. No game files are modified.",
  },
  {
    question: "Does it work with Firefox?",
    answer: "Currently Chrome only. Firefox support is planned for future releases.",
  },
  {
    question: "How do I uninstall?",
    answer: "Remove the extension from Chrome and uninstall the native host from Windows Settings > Apps.",
  },
  {
    question: "Where are demos stored?",
    answer: "Demos are stored in your CS2 game folder: ...\\Counter-Strike Global Offensive\\game\\csgo\\",
  },
];
```

---

## Phase 4: Theming & Styling

### Color Customization
**File:** `tailwind.config.ts`

Add orange color scheme:
```typescript
extend: {
  colors: {
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',  // Primary orange
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
  },
},
```

### Global Styles
**File:** `app/globals.css`

Update CSS variables for orange theme:
```css
:root {
  --primary: 24.6 95% 53.1%; /* Orange-600 */
  --primary-foreground: 0 0% 100%;
}

.dark {
  --primary: 24.6 95% 53.1%; /* Orange-600 */
  --primary-foreground: 0 0% 100%;
}
```

---

## Phase 5: Assets & Images

### Required Images
1. **Extension Screenshot** ✅
   - Location: `/screenshots/extension-popup-screenshot.png`
   - Already exists
   - Use in Hero section

2. **OG Image** (for social sharing)
   - Create: 1200x630px
   - Location: `/public/screenshots/og-image.png`
   - Content: Extension UI preview + logo + tagline

3. **Favicon**
   - Update: `/app/favicon.ico`
   - Create icon representing demo/CS2 theme

### Image Optimization
```bash
# Install sharp for Next.js image optimization
npm install sharp
```

---

## Phase 6: Deployment

### Build Configuration
**File:** `next.config.mjs`

Add configuration for static export (GitHub Pages):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/faceit-demo-manager' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/faceit-demo-manager/' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
```

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Static export (for GitHub Pages)
npm run build && npm run export
```

### GitHub Pages Setup
1. Build static site: `npm run build`
2. Output directory: `/out`
3. Push to GitHub
4. Settings > Pages > Deploy from branch: `gh-pages`
5. Use GitHub Actions for auto-deploy (optional)

---

## Implementation Checklist

### Phase 1: Setup ✅
- [x] Create `.env.local` with environment variables
- [ ] Update placeholder URLs with actual links
- [ ] Install dependencies: `npm install`

### Phase 2: Page Structure
- [ ] Update `app/page.tsx` - remove unused sections
- [ ] Update metadata (title, description, OG tags)
- [ ] Create `how-it-works.tsx` component
- [ ] Create `installation.tsx` component

### Phase 3: Component Customization
- [ ] Customize Hero section (`hero.tsx`)
- [ ] Create How It Works section (`how-it-works.tsx`)
- [ ] Customize Features section (`features.tsx`)
- [ ] Create Installation section (`installation.tsx`)
- [ ] Customize Footer section (`footer.tsx`)
- [ ] Update/Remove FAQ section (`faq.tsx`)

### Phase 4: Theming
- [ ] Update `tailwind.config.ts` with orange colors
- [ ] Update `globals.css` with CSS variables
- [ ] Test dark mode consistency

### Phase 5: Assets
- [ ] Optimize extension screenshot
- [ ] Create OG image (1200x630px)
- [ ] Update favicon
- [ ] Add all images to `/public/screenshots/`

### Phase 6: Testing & Polish
- [ ] Test all CTAs (extension link, native app link)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark mode
- [ ] Optimize images
- [ ] Check accessibility

### Phase 7: Deployment
- [ ] Configure `next.config.mjs` for static export
- [ ] Build: `npm run build`
- [ ] Test locally: `npm run start`
- [ ] Deploy to GitHub Pages
- [ ] Test live site

---

## File Changes Summary

### New Files
- `.env.local` ✅ Created
- `components/layout/sections/how-it-works.tsx`
- `components/layout/sections/installation.tsx`

### Modified Files
- `app/page.tsx` - Remove unused sections, add new sections
- `app/layout.tsx` - Update metadata
- `components/layout/sections/hero.tsx` - Complete rewrite
- `components/layout/sections/features.tsx` - Update content
- `components/layout/sections/footer.tsx` - Simplify
- `tailwind.config.ts` - Add orange colors
- `app/globals.css` - Update CSS variables
- `next.config.mjs` - Configure for static export

### Deleted Files (Optional)
- `components/layout/sections/benefits.tsx` (replaced by how-it-works.tsx)
- `components/layout/sections/contact.tsx` (replaced by installation.tsx)
- `components/layout/sections/sponsors.tsx` (not needed)
- `components/layout/sections/services.tsx` (not needed)
- `components/layout/sections/testimonial.tsx` (not needed)
- `components/layout/sections/team.tsx` (not needed)
- `components/layout/sections/community.tsx` (not needed)
- `components/layout/sections/pricing.tsx` (not needed)

---

## Next Steps

1. **Update `.env.local`** with actual URLs (Chrome Store, GitHub Releases)
2. **Start implementation** - I'll begin with Phase 2 (page structure)
3. **Provide feedback** - Review each section as I build it
4. **Test & iterate** - Deploy to GitHub Pages for final testing

Ready to start? Let me know and I'll begin implementing! 🚀
