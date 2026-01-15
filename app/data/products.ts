export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: "leto" | "zima";
  sizes: number[];
  description: string;
  discount?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Oxford",
    brand: "Elegance",
    price: 8000,
    image: "/1.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Elegantne kožne cipele savršene za poslovne prilike. Izrađene od vrhunske talijanske kože sa udobnim đonom.",
  },
  {
    id: 2,
    name: "Derby Formal Black",
    brand: "BusinessPro",
    price: 8000,
    image: "/2.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Formalne Derby cipele za posebne prilike. Ručna izrada sa detaljima koji čine razliku.",
  },
  {
    id: 3,
    name: "Loafer Classic Brown",
    brand: "GentleMan",
    price: 8000,
    image: "/3.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Elegantni mokasinke za casual i poslovne prilike. Udobne i lagane za cjelodnevno nošenje.",
    discount: 20,
  },
  {
    id: 4,
    name: "Chelsea Boot Premium",
    brand: "Heritage",
    price: 9000,
    image: "/4.jpg",
    category: "zima",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Klasične Chelsea čizme od prave kože. Vremenska izdržljivost i elegantan dizajn za moderne muškarce.",
    discount: 20,
  },
  {
    id: 5,
    name: "Leather Ankle Boot",
    brand: "UrbanStyle",
    price: 9000,
    image: "/5.jpg",
    category: "zima",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Moderne gležnjače od prave kože. Savršene za jesen i zimu, lako se kombinuju sa svim stilovima.",
  },
  {
    id: 6,
    name: "Combat Boot Classic",
    brand: "ToughWear",
    price: 8000,
    image: "/6.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Robusne čizme za sve vremenske uslove. Vodootporne sa čvrstim đonom za maksimalnu izdržljivost.",
  },
  {
    id: 7,
    name: "Casual Leather Sneaker",
    brand: "UrbanWalk",
    price: 8000,
    image: "/7.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Moderne casual patike od prave kože. Idealne za svakodnevno nošenje sa stilom.",
  },
  {
    id: 8,
    name: "Suede Desert Boot",
    brand: "ClassicMan",
    price: 8000,
    image: "/8.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Casual desert čizme od antilop kože. Lagane i udobne za svakodnevne aktivnosti.",
  },
  {
    id: 9,
    name: "Slip-On Comfort",
    brand: "EasyStep",
    price: 8000,
    image: "/9.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Udobne slip-on cipele za opušteni stil. Elastični gornji dio za lako obuvanje.",
  },
  {
    id: 10,
    name: "Brogue Wingtip",
    brand: "Heritage",
    price: 8000,
    image: "/10.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Klasične brogue cipele sa dekorativnim perforacijama. Savršene za formalne i poluformalne prilike.",
  },
  {
    id: 11,
    name: "Monk Strap Double",
    brand: "Elegance",
    price: 8000,
    image: "/11.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Elegantne monk strap cipele sa dvostrukom kopčom. Sofisticiran izbor za poslovnog muškarca.",
  },
  {
    id: 12,
    name: "Leather Boat Shoe",
    brand: "SeaBreeze",
    price: 8000,
    image: "/1.jpg",
    category: "leto",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description: "Klasične boat cipele od meke kože. Idealne za opušten ljetni stil.",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
