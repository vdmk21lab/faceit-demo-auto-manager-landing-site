"use client";

import Link from "next/link";

export default function WelcomePage() {

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden py-4 px-4">
        {/* Background gradient effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl w-full mx-auto relative z-10">
          {/* Thank You Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 ring-2 ring-primary/20">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Thank You for Installing!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Your browser extension is ready. One more step to enable automatic demo processing.
            </p>

            {/* Open Source Badge */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_REPO || "https://github.com/your-username/faceit-demo-manager"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">Open Source</span>
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium text-green-500">100% Free & Secure</span>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-transparent p-1" />

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column - Instructions */}
                <div className="space-y-6">
                  {/* Warning Banner */}
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h3 className="text-yellow-500 font-bold text-sm uppercase tracking-wide mb-1">
                        Native App Required
                      </h3>
                      <p className="text-sm text-foreground/80">
                        Install the desktop companion to enable file system access and demo processing.
                      </p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Download & Install</h4>
                        <p className="text-sm text-muted-foreground">
                          Free Windows application. No ads, no tracking, no premium tiers.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Automatic Setup</h4>
                        <p className="text-sm text-muted-foreground">
                          The installer registers the native host automatically—no manual configuration.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Start Using</h4>
                        <p className="text-sm text-muted-foreground">
                          Download demos from FACEIT—they&#39;ll be processed and ready in CS2 instantly.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href={process.env.NEXT_PUBLIC_NATIVE_APP_DOWNLOAD_URL || "#"}
                      className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Download Windows App
                      </span>
                    </a>
                    <p className="text-center text-xs text-muted-foreground mt-2">
                      Free & Open Source • ~15MB • Windows 10/11
                    </p>
                  </div>
                </div>

                {/* Right Column - Connection Status */}
                <div className="relative flex flex-col items-center justify-center py-4">
                  {/* Connection Diagram - Full Width */}
                  <div className="w-full mb-6 border-2 border-primary/30 rounded-lg p-4 bg-card/30">
                    <div className="flex items-center justify-between relative">
                      {/* Extension Box */}
                      <div className="flex flex-col items-center z-10 flex-1">
                        <div className="w-14 h-14 rounded-lg bg-secondary border-2 border-primary shadow-[0_0_15px_rgba(242,91,0,0.3)] flex items-center justify-center mb-2">
                          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Extension</span>
                        <span className="text-[10px] text-green-500 font-bold mt-1">INSTALLED</span>
                      </div>

                      {/* Connection Line with Icon */}
                      <div className="flex-1 flex items-center justify-center relative px-4">
                        <div className="h-[2px] w-full bg-gradient-to-r from-primary via-border to-border" style={{backgroundImage: "linear-gradient(to right, currentColor 50%, transparent 50%)", backgroundSize: "10px 2px", backgroundRepeat: "repeat-x"}} />
                        <div className="absolute bg-card px-1">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3" />
                          </svg>
                        </div>
                      </div>

                      {/* Native App Box */}
                      <div className="flex flex-col items-center z-10 flex-1">
                        <div className="w-14 h-14 rounded-lg bg-secondary border-2 border-dashed border-border flex items-center justify-center mb-2 opacity-50">
                          <svg className="w-7 h-7 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Native App</span>
                        <span className="text-[10px] text-yellow-500 font-bold mt-1">NOT INSTALLED</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Card */}
                  <div className="bg-secondary/50 rounded-lg border border-border p-4 w-full">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                        Connection Status
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-xs text-red-400 font-mono">Waiting</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-mono text-foreground/80 text-[11px]">com.faceit.demomanager</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3 text-center">
                        Install native app to establish connection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              ← Back to Home
            </Link>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Need Help?
            </a>
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_REPO || "https://github.com/your-username/faceit-demo-manager"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
