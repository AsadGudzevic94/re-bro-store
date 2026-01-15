"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

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
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mt-1">{product.brand}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            {product.discount ? (
              <>
                <span className="text-xl font-bold text-gray-900">
                  {Math.round(product.price * (1 - product.discount / 100))} DIN
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.price} DIN
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-gray-900">
                {product.price} DIN
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Dodaj u korpu
        </button>
      </div>
    </div>
  );
}
