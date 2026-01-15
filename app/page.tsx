import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const discountedProducts = products.filter((p) => p.discount);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Animated Background Shoes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Shoe 1 - Top Right */}
          <div className="absolute -top-20 right-[10%] opacity-10 animate-float">
            <img
              src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80"
              alt=""
              className="w-96 h-96 object-contain transform rotate-12"
            />
          </div>

          {/* Shoe 2 - Middle Left */}
          <div className="absolute top-1/4 -left-32 opacity-10 animate-float-delayed">
            <img
              src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80"
              alt=""
              className="w-80 h-80 object-contain transform -rotate-45"
            />
          </div>

          {/* Shoe 3 - Bottom Center */}
          <div className="absolute bottom-0 right-[20%] opacity-10 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1605733513597-8c034b65e3e8?w=600&q=80"
              alt=""
              className="w-72 h-72 object-contain transform rotate-[25deg]"
            />
          </div>

          {/* Shoe 4 - Top Left Background */}
          <div className="absolute top-10 left-[15%] opacity-5 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80"
              alt=""
              className="w-64 h-64 object-contain transform -rotate-12"
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 animate-gradient">
                Re-Bro
              </span>
            </h1>
            <p className="text-3xl md:text-4xl text-gray-200 mb-4 font-light">
              Kvalitetna obuća za savremenog muškarca
            </p>
            <p className="text-xl text-gray-400 mb-10 max-w-xl">
              Pronađite svoj stil. Veličine 40-46.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-block bg-white text-gray-900 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-2xl text-center text-lg"
              >
                Pogledaj kolekciju
              </Link>
              <Link
                href="/products?category=elegantne"
                className="inline-block border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 text-center text-lg backdrop-blur-sm"
              >
                Elegantne cipele
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[20%] w-2 h-2 bg-white/20 rounded-full animate-ping" />
          <div className="absolute top-40 right-[30%] w-3 h-3 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-[40%] w-2 h-2 bg-white/15 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
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
