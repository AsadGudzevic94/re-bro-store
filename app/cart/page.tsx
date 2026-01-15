"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg
            className="w-24 h-24 text-gray-300 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Vaša korpa je prazna
          </h1>
          <p className="text-gray-600 mb-8">
            Izgleda da još niste dodali proizvode u korpu.
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#2d1810] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3d2817] transition"
          >
            Nastavi kupovinu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Korpa</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item, index) => {
                const finalPrice = item.product.discount
                  ? item.product.price * (1 - item.product.discount / 100)
                  : item.product.price;

                return (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className={`p-6 flex flex-col sm:flex-row gap-4 ${
                      index !== cartItems.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            href={`/products/${item.product.id}`}
                            className="text-lg font-semibold text-gray-900 hover:text-gray-700"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-gray-500 text-sm">
                            {item.product.brand}
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            Veličina: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-900"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-900"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            {Math.round(finalPrice * item.quantity)} DIN
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-gray-500">
                              {Math.round(finalPrice)} DIN / kom
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="mt-4 text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Isprazni korpu
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Pregled narudžbe
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Međuzbir</span>
                  <span>{Math.round(totalPrice)} DIN</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Dostava</span>
                  <span>Besplatna</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Ukupno</span>
                    <span>
                      {Math.round(totalPrice)} DIN
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full mt-6 bg-[#2d1810] text-white py-4 rounded-lg font-semibold hover:bg-[#3d2817] transition text-center"
              >
                Nastavi na plaćanje
              </Link>

              <Link
                href="/products"
                className="block text-center mt-4 text-gray-600 hover:text-gray-900"
              >
                Nastavi kupovinu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
