import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const discountedProducts = products.filter((p) => p.discount);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#2d1810] text-white overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d2817] via-[#2d1810] to-[#1a0f08]" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />

          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Spotlight Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(45,24,16,0.5)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                  Premium Muška Obuća
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Re-Bro
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-2xl">
                Neka vaši koraci pričaju o udobnosti.
              </p>

              <p className="text-lg text-gray-400 max-w-xl">
                Pronađite svoj stil.<br />
                Besplatna dostava za sve porudžbine.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                >
                  <span className="relative z-10">Pogledaj kolekciju</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-gray-400">Modela</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-sm text-gray-400">Veličina</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-gray-400">Podrška</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Shoe Image with Glow */}
                <div className="relative z-10 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700/20 to-orange-800/20 blur-3xl" />
                  <img
                    src="/hero-shoe.jpg"
                    alt="Premium cipela"
                    className="relative w-full max-w-2xl drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-amber-700/20 to-orange-800/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-tr from-orange-800/20 to-amber-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Kategorije
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link
            href="/products?category=leto"
            className="relative group overflow-hidden rounded-lg shadow-lg h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
              style={{
                backgroundImage: "url('/1.jpg')",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white">Leto</h3>
              <p className="text-gray-200">Lagane i prozračne cipele za toplu sezonu</p>
            </div>
          </Link>

          <Link
            href="/products?category=zima"
            className="relative group overflow-hidden rounded-lg shadow-lg h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
              style={{
                backgroundImage: "url('/4.jpg')",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white">Zima</h3>
              <p className="text-gray-200">Tople i izdržljive čizme za hladnije dane</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Discounted Products */}
      {discountedProducts.length > 0 && (
        <section className="bg-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Na akciji</h2>
              <Link
                href="/products"
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                Pogledaj sve →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {discountedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Istaknuti proizvodi</h2>
          <Link
            href="/products"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Pogledaj sve →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="p-3 sm:p-6">
              <div className="w-12 h-12 bg-[#2d1810] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Besplatna dostava</h3>
              <p className="text-gray-700 text-sm">
                Na sve narudžbe širom Srbije
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-[#2d1810] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">30 dana povrat</h3>
              <p className="text-gray-700 text-sm">
                Laka zamjena ili povrat novca
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-[#2d1810] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Garancija kvalitete</h3>
              <p className="text-gray-700 text-sm">
                Samo provjereni brendovi
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-[#2d1810] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sigurna kupovina</h3>
              <p className="text-gray-700 text-sm">
                Plaćanje pouzećem
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
