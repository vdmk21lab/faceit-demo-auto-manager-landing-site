"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chrome, Monitor } from "lucide-react";
import Link from "next/link";

export const InstallationSection = () => {
  const extensionUrl = process.env.NEXT_PUBLIC_EXTENSION_URL || "https://example.com/extension";
  const nativeAppUrl = process.env.NEXT_PUBLIC_NATIVE_APP_DOWNLOAD_URL || "https://example.com/releases";

  return (
    <section id="installation" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Started in{" "}
          <span className="text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
            Minutes
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Two simple steps to start managing your demos
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Step 1: Browser Extension */}
        <Card className="border-2 hover:border-orange-600/50 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                1
              </div>
              <CardTitle className="text-xl">Install Browser Extension</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Visit Chrome Web Store</li>
              <li>Click &quot;Add to Chrome&quot;</li>
              <li>Pin extension to toolbar</li>
            </ol>
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700 font-bold"
              asChild
            >
              <Link href={extensionUrl} target="_blank" rel="noopener noreferrer">
                <Chrome className="mr-2 h-5 w-5" />
                Get Extension
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Step 2: Native Host */}
        <Card className="border-2 hover:border-orange-600/50 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                2
              </div>
              <CardTitle className="text-xl">Install Native Host</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Download Windows installer</li>
              <li>Run the .exe file</li>
              <li>You are ready to download your first demo!</li>
            </ol>
            <Button
              className="w-full font-bold"
              variant="outline"
              asChild
            >
              <Link href={nativeAppUrl} target="_blank" rel="noopener noreferrer">
                <Monitor className="mr-2 h-5 w-5" />
                Download for Windows
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground text-center pt-2">
              Windows 10/11 supported
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
