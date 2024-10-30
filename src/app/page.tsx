import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex w-full justify-between items-center">
            {/* Logo/Brand */}
            <div className="text-[#25CE7B] font-semibold text-xl">
              WeFlex
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="/"
                className="text-sm font-medium transition-colors hover:text-[#25CE7B]"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="text-sm font-medium transition-colors hover:text-[#25CE7B]"
              >
                About
              </Link>
              <Link 
                href="/zendesk"
                className="text-sm font-medium transition-colors hover:text-[#25CE7B]"
              >
                Zendesk
              </Link>
              <Link 
                href="/support"
                className="text-sm font-medium transition-colors hover:text-[#25CE7B]"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-1 items-center text-center max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#25CE7B] to-[#1FA161] bg-clip-text text-transparent">
            WeFlex Technical Support
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Expert technical assistance when you need it most
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-8">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#25CE7B] transition-colors">
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our technical team is available around the clock to assist you with any issues
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#25CE7B] transition-colors">
              <h3 className="text-xl font-semibold mb-3">Expert Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced engineers ready to tackle your technical challenges
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#25CE7B] text-white gap-2 hover:bg-[#1FA161] text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
              href="/contact"
            >
              Get Support Now
            </a>
            <a
              className="rounded-full border border-solid border-[#25CE7B] transition-colors flex items-center justify-center hover:bg-[#25CE7B]/10 text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
              href="/documentation"
            >
              View Documentation
            </a>
          </div>
        </main>

        <footer className="row-start-2 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
          <a
            className="flex items-center gap-2 hover:text-[#25CE7B] transition-colors"
            href="/faq"
          >
            FAQ
          </a>
          <a
            className="flex items-center gap-2 hover:text-[#25CE7B] transition-colors"
            href="/knowledge-base"
          >
            Knowledge Base
          </a>
          <a
            className="flex items-center gap-2 hover:text-[#25CE7B] transition-colors"
            href="/contact"
          >
            Contact Us
          </a>
        </footer>
      </div>
    </div>
  );
}
