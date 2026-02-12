import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <header className="container mx-auto px-6 py-12">
        <nav className="flex items-center justify-center mb-8">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src={`${basePath}/images/app-icon.png`}
              alt="Links App Icon"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-xl font-bold">Links</span>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 pb-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-zinc-400 mb-8">Last updated: February 11, 2026</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p>
              Links (&quot;the App&quot;) is a bookmark manager for macOS developed by onesyntax.in.
              We are committed to protecting your privacy. This policy explains how the App handles your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Collection</h2>
            <p>
              <strong className="text-white">Links does not collect, transmit, or share any personal data.</strong>
            </p>
            <p className="mt-3">
              All your bookmarks, folders, tags, and settings are stored locally on your device.
              The App does not include any analytics, tracking, or telemetry services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">iCloud Sync</h2>
            <p>
              If you enable iCloud Sync, your bookmarks are synced across your devices using Apple&apos;s
              iCloud service (CloudKit). This data is stored in your private iCloud container and is
              governed by Apple&apos;s privacy policy. The developer has no access to your iCloud data.
            </p>
            <p className="mt-3">
              You can disable iCloud Sync at any time in the App&apos;s settings. When disabled, all
              data remains stored locally on your device only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Browser Integration</h2>
            <p>
              The App uses macOS Automation (AppleScript) to read the current browser tab URL and
              title when you use the Quick Save or Instant Save features. This information is only
              used to create bookmarks locally on your device and is never transmitted to any server.
            </p>
            <p className="mt-3">
              Browser access requires your explicit permission through macOS Privacy &amp; Security settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Metadata Fetching</h2>
            <p>
              When you save a bookmark, the App may fetch the webpage to retrieve its title,
              description, and favicon. These network requests go directly to the bookmarked
              website. No intermediary server is involved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
            <p>
              Links does not integrate with any third-party analytics, advertising, or data
              collection services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be reflected
              on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at{" "}
              <a href="mailto:contact@onesyntax.in" className="text-blue-400 hover:underline">
                contact@onesyntax.in
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src={`${basePath}/images/app-icon.png`}
              alt="Links App Icon"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold">Links</span>
          </Link>
          <p className="text-zinc-500 text-sm">
            &copy; 2026 onesyntax.in
          </p>
        </div>
      </footer>
    </div>
  );
}
