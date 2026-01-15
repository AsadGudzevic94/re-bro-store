"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }
    addToCart(product, selectedSize);
    setSelectedSize(null);
    setShowSizeError(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 w-full bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
              -{product.discount}%
            </span>
          )}
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900 hover:text-gray-700 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">{product.brand}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            {product.discount ? (
              <>
                <span className="text-base sm:text-xl font-bold text-gray-900">
                  {Math.round(product.price * (1 - product.discount / 100))} DIN
                </span>
                <span className="text-xs sm:text-sm text-gray-500 line-through">
                  {product.price} DIN
                </span>
              </>
            ) : (
              <span className="text-base sm:text-xl font-bold text-gray-900">
                {product.price} DIN
              </span>
            )}
          </div>
        </div>

        <div className="mt-3 sm:mt-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2">
            Izaberite veličinu
          </label>
          <select
            value={selectedSize || ""}
            onChange={(e) => {
              setSelectedSize(Number(e.target.value));
              setShowSizeError(false);
            }}
            className={`w-full px-2 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2d1810] focus:border-transparent text-gray-900 bg-white text-sm ${
              showSizeError ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Izaberite broj</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {showSizeError && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              Molimo izaberite veličinu
            </p>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-3 sm:mt-4 bg-[#2d1810] text-white py-2 px-2 sm:px-4 rounded-lg hover:bg-[#3d2817] transition-colors text-sm sm:text-base"
        >
          Dodaj u korpu
        </button>
      </div>
    </div>
  );
}
