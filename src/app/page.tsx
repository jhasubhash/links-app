import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-24">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <Image
              src="/images/app-icon.png"
              alt="Links App Icon"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold">Links</span>
          </div>
          <a
            href="https://github.com/jhasubhash/links"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
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
              href="https://github.com/jhasubhash/links"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg transition-colors"
            >
              Coming Soon
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold text-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Main App Screenshot */}
      <section className="container mx-auto px-6 py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
          <Image
            src="/images/home_page.png"
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
                src="/images/quick_save.png"
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
                src="/images/quick_access_to_bookmarks.png"
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
                src="/images/access_from_menu_bar.png"
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
        <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
          Links is currently in development. Star the repo to get notified when it launches.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/jhasubhash/links"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Star on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/app-icon.png"
              alt="Links App Icon"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold">Links</span>
          </div>
          <p className="text-zinc-500 text-sm">
            Built with SwiftUI for macOS. Coming Soon.
          </p>
          <a
            href="https://github.com/jhasubhash/links"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
