import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-24">
        <nav className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-3">
            <Image
              src={`${basePath}/images/app-icon.png`}
              alt="Links App Icon"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold">Links</span>
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Your Bookmarks, Supercharged
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            A beautiful, native macOS bookmark manager with lightning-fast search,
            quick save from any browser, and seamless iCloud sync.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/jhasubhash/links-app/releases/download/v1.1.0/Links-1.1.0-arm64.dmg"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
              Download for Mac
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold text-lg transition-colors"
            >
              Learn More
            </a>
          </div>
          <p className="text-sm text-zinc-500 mt-4">Version 1.1.0 &middot; macOS 14.0+ &middot; Apple Silicon</p>
        </div>
      </header>

      {/* Main App Screenshot */}
      <section className="container mx-auto px-6 py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
          <Image
            src={`${basePath}/images/home_page.png`}
            alt="Links App Main Interface"
            width={1200}
            height={750}
            className="w-full"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Everything you need to manage bookmarks
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Feature 1: Quick Save */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src={`${basePath}/images/quick_save.png`}
                alt="Quick Save Feature"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Quick Save with ⌘S</h3>
              <p className="text-zinc-400 text-lg">
                Save bookmarks instantly from any browser with a single keyboard shortcut.
                The smart shortcut only activates in browsers, so it never interferes with other apps.
              </p>
            </div>
          </div>

          {/* Feature 2: Quick Access */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src={`${basePath}/images/quick_access_to_bookmarks.png`}
                alt="Quick Access Feature"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Spotlight-like Search</h3>
              <p className="text-zinc-400 text-lg">
                Access your bookmarks from anywhere with a beautiful floating panel.
                Lightning-fast fuzzy search finds what you need instantly.
              </p>
            </div>
          </div>

          {/* Feature 3: Menu Bar */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-zinc-800/50 p-8 flex justify-center">
              <Image
                src={`${basePath}/images/access_from_menu_bar.png`}
                alt="Menu Bar Access"
                width={350}
                height={450}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Always in Your Menu Bar</h3>
              <p className="text-zinc-400 text-lg">
                Quick access to your recent bookmarks right from the menu bar.
                Search, browse, and open links without switching apps.
              </p>
            </div>
          </div>

          {/* Feature 4: Organization */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">📁</span>
                  <span>Folders & Nested Organization</span>
                </div>
                <div className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">🏷️</span>
                  <span>Color-coded Tags</span>
                </div>
                <div className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">⭐</span>
                  <span>Favorites & Pinned Items</span>
                </div>
                <div className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">🔍</span>
                  <span>Smart Folders with Filters</span>
                </div>
                <div className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">☁️</span>
                  <span>iCloud Sync Across Devices</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Powerful Organization</h3>
              <p className="text-zinc-400 text-lg">
                Organize your bookmarks with folders, tags, and smart filters.
                Everything syncs automatically via iCloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Support */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white/5 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Works with All Major Browsers</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Safari, Chrome, Arc, Brave, Firefox, Edge, and more
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            {['Safari', 'Chrome', 'Arc', 'Brave', 'Firefox', 'Edge'].map((browser) => (
              <div key={browser} className="px-6 py-3 bg-white/10 rounded-full text-lg">
                {browser}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Download Links</h2>
        <p className="text-xl text-zinc-400 max-w-xl mx-auto mb-10">
          Free to download. Requires macOS 14.0 or later on Apple Silicon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/jhasubhash/links-app/releases/download/v1.1.0/Links-1.1.0-arm64.dmg"
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold text-xl transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>
            Download for Mac
          </a>
          <a
            href="https://github.com/jhasubhash/links-app/releases/tag/v1.1.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 rounded-2xl font-semibold text-xl transition-colors"
          >
            View Release Notes
          </a>
        </div>
        <p className="text-zinc-500 text-sm mt-6">Version 1.1.0 &middot; Apple Silicon &middot; macOS 14+</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={`${basePath}/images/app-icon.png`}
              alt="Links App Icon"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold">Links</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-500 text-sm">
            <span>&copy; 2026 onesyntax.in</span>
            <span>&middot;</span>
            <a href={`${basePath}/privacy`} className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
