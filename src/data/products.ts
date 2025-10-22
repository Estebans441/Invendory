import { Product } from "../types/product";

export const PRODUCTS: Product[] = [
  {
    ref: "REF-001",
    name: "Widget A",
    provider: "Acme Co.",
    quantity: 120,
    description: "Durable multi-purpose widget ideal for home and office use.",
    sellPrice: 49.99,
    buyPrice: 30.0,
    labels: ["bestseller", "hardware"],
  },
  {
    ref: "REF-002",
    name: "Gadget Pro",
    provider: "Globex",
    quantity: 45,
    description: "Professional-grade gadget with extended warranty included.",
    sellPrice: 129.99,
    buyPrice: 85.5,
    labels: ["electronics", "premium"],
  },
  {
    ref: "REF-003",
    name: "Tool Kit 12pc",
    provider: "Initech Tools",
    quantity: 200,
    description: "Comprehensive 12-piece tool kit with ergonomic handles.",
    sellPrice: 79.0,
    buyPrice: 42.75,
    labels: ["tools", "bundle", "new"],
  },
  {
    ref: "REF-004",
    name: "Eco Bottle",
    provider: "Soylent Supplies",
    quantity: 350,
    description: "Reusable BPA-free bottle made from recycled materials.",
    sellPrice: 19.95,
    buyPrice: 7.5,
    labels: ["eco", "accessory"],
  },
];
