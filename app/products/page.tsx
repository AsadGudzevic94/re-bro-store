"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const categoryName = {
    leto: "Letnja kolekcija",
    zima: "Zimska kolekcija",
  }[category || ""] || "Svi proizvodi";

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length} proizvoda | Veličine 40-46
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <a
            href="/products"
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              !category
                ? "bg-[#2d1810] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Sve
          </a>
          <a
            href="/products?category=leto"
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              category === "leto"
                ? "bg-[#2d1810] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Leto
          </a>
          <a
            href="/products?category=zima"
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              category === "zima"
                ? "bg-[#2d1810] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Zima
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nema proizvoda u ovoj kategoriji.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Učitavanje...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
