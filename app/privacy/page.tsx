"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]" />
      </div>

      <main className="flex-grow relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We respect your privacy. Here&apos;s how FaceIT Demo Auto Manager handles your data.
            </p>
            <p className="text-sm text-green-500 font-medium mt-2">
              TL;DR: We don&apos;t collect, track, or share any of your personal data. Everything stays on your device.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-primary/20 to-transparent p-1" />

            <div className="p-8 space-y-8">
              {/* Quick Summary Banner */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-green-500">The Simple Version</h2>
                    <ul className="space-y-2 text-sm text-foreground/90">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>All your data stays <strong>on your computer</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>We don&apos;t collect personal information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>No tracking, no analytics, no third-party services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Open source - you can verify everything yourself</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Detailed Sections */}
              <Section
                title="What Data We Store"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                }
              >
                <p className="mb-3">
                  The extension stores <strong>only</strong> the following data locally on your device using Chrome&apos;s storage API:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Demo filenames</strong> - Just the names of demos you&apos;ve processed (e.g., &quot;1-de_mirage-2024-02-15.dem&quot;)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Processing timestamps</strong> - When each demo was processed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Console commands</strong> - The CS2 commands to play your demos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>UI preferences</strong> - Whether you&apos;ve seen welcome banners</span>
                  </li>
                </ul>
                <p className="mt-3 text-muted-foreground text-sm">
                  This data is stored <strong>locally in your browser</strong> and never leaves your device.
                </p>
              </Section>

              <Section
                title="What We DON'T Collect"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                }
              >
                <p className="mb-3 font-medium">
                  We explicitly do NOT collect, track, or store:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Your personal information (name, email, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Your browsing history or activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Analytics or usage statistics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>IP addresses or location data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>FaceIT account credentials or login tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Game files or demo content</span>
                  </li>
                </ul>
              </Section>

              <Section
                title="How the Extension Works"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                }
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Browser Extension</h4>
                    <p className="text-sm text-muted-foreground">
                      The Chrome extension monitors downloads from FaceIT and detects CS2 demo files (.dem.zst).
                      When detected, it sends a message to the native Windows application via Chrome&apos;s Native Messaging API.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Native Windows Application</h4>
                    <p className="text-sm text-muted-foreground">
                      The desktop app processes demo files locally on your computer - decompressing .zst files and
                      moving them to your CS2 directory. All processing happens <strong>offline on your device</strong>.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    No data is sent to external servers. The extension only communicates with your local Windows application.
                  </p>
                </div>
              </Section>

              <Section
                title="Permissions Explained"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                }
              >
                <p className="mb-3">The extension requests the following Chrome permissions:</p>
                <ul className="space-y-3 ml-4">
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-mono text-sm mt-0.5">storage</span>
                      <span className="text-sm text-muted-foreground flex-1">
                        To save your demo history locally in Chrome&apos;s storage
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-mono text-sm mt-0.5">downloads</span>
                      <span className="text-sm text-muted-foreground flex-1">
                        To detect when FaceIT demo files are downloaded
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-mono text-sm mt-0.5">nativeMessaging</span>
                      <span className="text-sm text-muted-foreground flex-1">
                        To communicate with the Windows application installed on your computer
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-mono text-sm mt-0.5">notifications</span>
                      <span className="text-sm text-muted-foreground flex-1">
                        To notify you when demos are successfully processed
                      </span>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  We request <strong>only</strong> the minimum permissions needed for functionality.
                  No access to browsing history, web content, or other sensitive data.
                </p>
              </Section>

              <Section
                title="Open Source & Transparency"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                }
              >
                <p className="mb-3">
                  This project is <strong>100% open source</strong>. You can review the entire codebase on GitHub:
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium">View Source Code</span>
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Transparency is important to us. If you have any concerns about privacy,
                  you can inspect the code yourself or have a security expert review it.
                </p>
              </Section>

              <Section
                title="Third-Party Services"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                }
              >
                <p className="font-medium mb-2">We do NOT use:</p>
                <ul className="space-y-2 ml-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>Google Analytics or any analytics platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>Error tracking services (Sentry, Bugsnag, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>Advertising networks or trackers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>Social media integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>Cloud storage or external servers</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm">
                  The extension operates <strong>100% offline</strong> after installation. No external connections.
                </p>
              </Section>

              <Section
                title="Data Retention & Deletion"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                }
              >
                <ul className="space-y-3">
                  <li>
                    <strong className="block mb-1">Automatic Deletion:</strong>
                    <p className="text-sm text-muted-foreground">
                      Demo history is limited to the last 50 entries. Older entries are automatically removed.
                    </p>
                  </li>
                  <li>
                    <strong className="block mb-1">Manual Deletion:</strong>
                    <p className="text-sm text-muted-foreground">
                      You can delete individual demos from the extension popup at any time.
                    </p>
                  </li>
                  <li>
                    <strong className="block mb-1">Complete Removal:</strong>
                    <p className="text-sm text-muted-foreground">
                      Uninstalling the extension completely removes all stored data from your browser.
                      No traces remain on our end because we never had access to it in the first place.
                    </p>
                  </li>
                </ul>
              </Section>

              <Section
                title="Updates to Privacy Policy"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                }
              >
                <p className="text-sm text-muted-foreground">
                  If we ever change this privacy policy, we&apos;ll update this page and notify users through the extension.
                  However, our commitment to privacy is fundamental - we won&apos;t start collecting data that we don&apos;t collect today.
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Last Updated:</strong> February 15, 2026
                </p>
              </Section>

              <Section
                title="Contact & Questions"
                icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                }
              >
                <p className="text-sm text-muted-foreground mb-3">
                  If you have any questions or concerns about privacy:
                </p>
                <ul className="space-y-2 ml-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    <span>
                      Open an issue on{" "}
                      <a
                        href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    <span>Review the source code yourself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    <span>Ask the community in discussions</span>
                  </li>
                </ul>
              </Section>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center space-x-6 mb-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              ← Back to Home
            </Link>
            <Link href="/welcome" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Welcome Page
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"}
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

// Reusable Section Component
function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border pb-6 last:border-0 last:pb-0">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h3 className="text-xl font-bold mt-0.5">{title}</h3>
      </div>
      <div className="ml-11 text-foreground/90">{children}</div>
    </div>
  );
}
