import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d1810] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Re-Bro</h2>
            <p className="text-gray-400 mb-4">
              Vaša omiljena destinacija za kvalitetnu mušku obuću. Nudimo širok izbor
              ljetnih i zimskih cipela u veličinama 40-46.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Proizvodi
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-white transition">
                  Korpa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@re-bro.store</li>
              <li>Tel: +381 63 722 6424</li>
              <li>Adresa: Novi Pazar, Srbija</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Re-Bro. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
