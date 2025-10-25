import { Product } from "../types/product";

export const PRODUCTS: Product[] = [
  {
    ref: "REF-001",
    name: "Widget A",
    provider: "Acme Co.",
    quantity: 120,
    imageUrl: "https://tecnologia-informatica.com/wp-content/uploads/2018/12/que-son-los-gadgets-6.jpeg",
    description: "",
    sellPrice: 5000.0,
    buyPrice: 3000.0,
    labels: ["bestseller", "hardware"],
    extraFields: {
      color: "red",
      weight: "1.5kg",
    },
  },
  {
    ref: "REF-002",
    name: "Gadget Pro",
    provider: "Globex",
    quantity: 45,
    imageUrl: "https://gadgetprocy.com/wp-content/uploads/2024/11/Gadgetpro-security-cameras-banner.jpg",
    description: "Professional-grade gadget with extended warranty included.",
    sellPrice: 15000.0,
    buyPrice: 8550.0,
    labels: ["electronics", "premium"],
    extraFields: {
      warrantyPeriod: "2 years",
      powerSource: "battery",
    },
  },
  {
    ref: "REF-003",
    name: "Tool Kit 12pc",
    provider: "Initech Tools",
    quantity: 200,
    imageUrl: "https://www.linkqage.com/wp-content/uploads/2022/06/f41930d1f65edee875eda545b6b086db.jpg",
    description: "Comprehensive 12-piece tool kit with ergonomic handles.",
    sellPrice: 7900.0,
    buyPrice: 4200.75,
    labels: ["tools", "bundle", "new"],
    extraFields: {
      pieces: "12",
      caseMaterial: "plastic",
    },
  },
  {
    ref: "REF-004",
    name: "Eco Bottle",
    provider: "Soylent Supplies",
    quantity: 350,
    imageUrl: "https://muscleshop.lt/wp-content/uploads/2021/02/Smart-Shake-EcoBottle-650ml-Ekologiska-gertuve-gamtoje.jpg",
    description: "Reusable BPA-free bottle made from recycled materials.",
    sellPrice: 1900.95,
    buyPrice: 700.5,
    labels: ["eco", "accessory"],
    extraFields: {
      capacity: "750ml",
      material: "recycled plastic",
    },
  },
];
