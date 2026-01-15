import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const discountedProducts = products.filter((p) => p.discount);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Re-Bro
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                Kvalitetna obuća za savremenog muškarca
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Pronađite svoj stil. Veličine 40-46.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 text-center shadow-lg"
                >
                  Pogledaj kolekciju
                </Link>
                <Link
                  href="/products?category=elegantne"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 text-center"
                >
                  Elegantne cipele
                </Link>
              </div>
            </div>

            {/* Animated Shoe Image */}
            <div className="relative hidden lg:block">
              <div className="relative animate-float">
                <img
                  src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80"
                  alt="Elegantna muška cipela"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 to-transparent rounded-lg" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Kategorije
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/products?category=elegantne"
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
              <h3 className="text-2xl font-bold text-white">Elegantne</h3>
              <p className="text-gray-200">Za poslovne i svečane prilike</p>
            </div>
          </Link>

          <Link
            href="/products?category=casual"
            className="relative group overflow-hidden rounded-lg shadow-lg h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
              style={{
                backgroundImage: "url('/7.jpg')",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white">Casual</h3>
              <p className="text-gray-200">Za svakodnevno nošenje</p>
            </div>
          </Link>

          <Link
            href="/products?category=cizme"
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
              <h3 className="text-2xl font-bold text-white">Čizme</h3>
              <p className="text-gray-200">Za hladnije dane</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
