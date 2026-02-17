"use client";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  const githubRepo = process.env.NEXT_PUBLIC_GITHUB_REPO || "https://example.com/repo";
  const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL || "https://example.com/docs";

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="#" className="flex font-bold items-center gap-2 mb-4">
              <Image src="/icon-128.png" alt="FACEIT Demo Auto Manager" width={32} height={32} className="w-8 h-8" />
              <h3 className="text-xl">FACEIT Demo Auto Manager</h3>
            </Link>
            <p className="text-sm text-muted-foreground">
              Enhancing your FACEIT experience one demo at a time.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Product</h3>
            <div>
              <Link href="#how-it-works" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                How It Works
              </Link>
            </div>
            <div>
              <Link href="#features" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Features
              </Link>
            </div>
            <div>
              <Link href="#installation" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Installation
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Resources</h3>
            <div>
              <Link
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                GitHub Repository
              </Link>
            </div>
            <div>
              <Link
                href={docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                Documentation
              </Link>
            </div>
            <div>
              <Link
                href="/privacy"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Connect</h3>
            <Link
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 FACEIT Demo Auto Manager. Not affiliated with FACEIT or Valve.</p>
        </div>
      </div>
    </footer>
  );
};
