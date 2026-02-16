"use client";
import { Button } from "@/components/ui/button";
import { Chrome, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils/assetPath";

export const HeroSection = () => {
  const extensionUrl = process.env.NEXT_PUBLIC_EXTENSION_URL || "https://example.com/extension";
  const nativeAppUrl = process.env.NEXT_PUBLIC_NATIVE_APP_DOWNLOAD_URL || "https://example.com/releases";

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:grid-cols-2 lg:max-w-screen-xl gap-12 mx-auto py-20 md:py-32">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-start space-y-8">
          <div className="max-w-screen-md mx-auto lg:mx-0">
            <h1 className="text-5xl md:text-6xl font-bold">
              Manage Your{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
                CS2 Demos
              </span>{" "}
              Effortlessly
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto lg:mx-0 text-xl text-muted-foreground">
            Automate downloading, organizing, and watching your FACEIT demos.
            Copy playdemo commands with one click.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              className="w-5/6 md:w-auto font-bold bg-orange-600 hover:bg-orange-700"
              asChild
            >
              <Link href={extensionUrl} target="_blank" rel="noopener noreferrer">
                <Chrome className="mr-2 h-5 w-5" />
                Get Extension
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-5/6 md:w-auto font-bold"
              asChild
            >
              <Link href={nativeAppUrl} target="_blank" rel="noopener noreferrer">
                <Monitor className="mr-2 h-5 w-5" />
                Download Windows App
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Works on Windows 10/11
          </p>
        </div>

        {/* Right Column - Extension Screenshot */}
        <div className="relative w-full h-[400px] lg:h-[500px] mt-8 lg:mt-0">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl"></div>
          <Image
            src={getAssetPath("/screenshots/extension-popup-screenshot.png")}
            alt="FACEIT Demo Auto Manager Extension"
            fill
            className="object-contain rounded-lg shadow-2xl relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
};
