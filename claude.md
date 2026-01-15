# Re-Bro - Online Prodavnica Muške Obuće

## O Projektu
Re-Bro je moderna online prodavnica specijalizovana za mušku obuću. Nudimo kvalitetne cipele u veličinama 40-46.

## Tech Stack

### Frontend Framework
- **Next.js 16** - React framework sa App Router-om
- **React 19** - UI biblioteka
- **TypeScript** - Type-safe JavaScript

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS procesor

### State Management
- **React Context API** - Za upravljanje korpom
- **localStorage** - Perzistencija korpe

## Struktura Projekta

```
app/
├── components/          # Reusable komponente
│   ├── Header.tsx      # Navigacija
│   ├── Footer.tsx      # Footer
│   └── ProductCard.tsx # Kartica proizvoda
├── context/
│   └── CartContext.tsx # Cart state management
├── data/
│   └── products.ts     # Podaci o proizvodima
├── products/
│   ├── page.tsx        # Lista proizvoda
│   └── [id]/
│       └── page.tsx    # Detalji proizvoda
├── cart/
│   └── page.tsx        # Korpa
├── checkout/
│   └── page.tsx        # Forma za narudžbu
├── layout.tsx          # Root layout
├── page.tsx            # Početna stranica
└── globals.css         # Globalni stilovi
```

## Funkcionalnosti

### Proizvodi
- Samo muške cipele
- Veličine: 40, 41, 42, 43, 44, 45, 46
- Kategorije: elegantne, casual, čizme

### Korpa
- Dodavanje/uklanjanje proizvoda
- Odabir veličine
- Promjena količine
- Perzistencija u localStorage
- Besplatna dostava za narudžbe iznad 100 KM

### Checkout
- Forma za podatke kupca:
  - Ime i prezime
  - Adresa dostave
  - Email ili broj telefona
- Pregled narudžbe prije potvrde

## Pokretanje

```bash
npm install
npm run dev
```

Server će biti dostupan na http://localhost:3000

## Kontakt
- Email: info@re-bro.com
- Lokacija: Bosna i Hercegovina
