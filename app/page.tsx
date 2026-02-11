import { HeroSection } from "@/components/layout/sections/hero";
import { HowItWorksSection } from "@/components/layout/sections/how-it-works";
import { FeaturesSection } from "@/components/layout/sections/features";
import { InstallationSection } from "@/components/layout/sections/installation";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata = {
  title: "FACEIT Demo Manager - CS2 Demo Utility",
  description: "Automate CS2 demo management. Download, organize, and play FACEIT demos with one click.",
  openGraph: {
    type: "website",
    url: "https://example.com",
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
  twitter: {
    card: "summary_large_image",
    site: "https://example.com",
    title: "FACEIT Demo Manager",
    description: "Automate CS2 demo management for FACEIT players",
    images: ["/screenshots/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <InstallationSection />
      <FooterSection />
    </>
  );
}
