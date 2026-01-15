"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import emailjs from "@emailjs/browser";

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ime je obavezno";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Prezime je obavezno";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Adresa je obavezna";
    }
    if (!formData.city.trim()) {
      newErrors.city = "Grad je obavezan";
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Poštanski broj je obavezan";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Broj telefona je obavezan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmailConfirmation = async () => {
    if (!formData.email.trim()) return;

    const orderItems = cartItems
      .map(
        (item) =>
          `${item.product.name} (Vel: ${item.size}, Kol: ${item.quantity}) - ${Math.round(
            (item.product.discount
              ? item.product.price * (1 - item.product.discount / 100)
              : item.product.price) * item.quantity
          )} DIN`
      )
      .join("\n");

    const templateParams = {
      to_name: `${formData.firstName} ${formData.lastName}`,
      to_email: formData.email,
      order_items: orderItems,
      total_price: `${Math.round(totalPrice)} DIN`,
      shipping_address: `${formData.address}, ${formData.postalCode} ${formData.city}`,
      phone: formData.phone,
    };

    try {
      await emailjs.send(
        "service_ti3wvlp",
        "template_x007xh2",
        templateParams,
        "5WiXOhqiN3g-48Pcy"
      );
      console.log("Email poslan uspješno!");
    } catch (error) {
      console.log("Greška pri slanju emaila:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Pošalji email potvrdu ako je email unesen
    if (formData.email.trim()) {
      await sendEmailConfirmation();
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    clearCart();
    setOrderComplete(true);
    setIsSubmitting(false);
  };

  if (cartItems.length === 0 && !orderComplete) {
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
            Dodajte proizvode u korpu prije nego nastavite sa kupovinom.
          </p>
          <Link
            href="/products"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Pogledaj proizvode
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Hvala na narudžbi!
          </h1>
          <p className="text-gray-600 mb-6">
            Vaša narudžba je uspješno zaprimljena. Kontaktirat ćemo vas uskoro
            sa detaljima o dostavi.
            {formData.email && (
              <span className="block mt-2">
                Potvrda je poslana na: <strong>{formData.email}</strong>
              </span>
            )}
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md mb-6 text-left">
            <p className="text-gray-900">
              <strong>Kupac:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p className="text-gray-900">
              <strong>Adresa:</strong> {formData.address}, {formData.postalCode}{" "}
              {formData.city}
            </p>
            <p className="text-gray-900">
              <strong>Telefon:</strong> {formData.phone}
            </p>
            {formData.email && (
              <p className="text-gray-900">
                <strong>Email:</strong> {formData.email}
              </p>
            )}
          </div>
          <Link
            href="/"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Povratak na početnu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Završi kupovinu</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Podaci za dostavu
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Ime *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Unesite ime"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Prezime *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Unesite prezime"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Adresa *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ulica i broj"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Grad *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Unesite grad"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Poštanski broj *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white ${
                      errors.postalCode ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="11000"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Broj telefona *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="061 123 456"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Email <span className="text-gray-500 font-normal">(opciono - za potvrdu narudžbe)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 bg-white"
                  placeholder="email@primjer.com"
                />
                <p className="text-gray-500 text-xs mt-1">
                  Ako unesete email, poslaćemo vam potvrdu narudžbe
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Obrađujem narudžbu..." : "Potvrdi narudžbu"}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Pregled narudžbe
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => {
                  const finalPrice = item.product.discount
                    ? item.product.price * (1 - item.product.discount / 100)
                    : item.product.price;

                  return (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex gap-4"
                    >
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-gray-900">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Vel: {item.size} | Kol: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium text-gray-900">
                        {Math.round(finalPrice * item.quantity)} DIN
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Međuzbir</span>
                  <span>{Math.round(totalPrice)} DIN</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Dostava</span>
                  <span>Besplatna</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Ukupno</span>
                    <span>{Math.round(totalPrice)} DIN</span>
                  </div>
                </div>
              </div>

              <Link
                href="/cart"
                className="block text-center mt-6 text-gray-700 hover:text-gray-900"
              >
                ← Vrati se na korpu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
