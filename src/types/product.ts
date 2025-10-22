export interface Product {
  ref: string; // unique product reference/identifier
  name: string;
  provider: string;
  quantity: number;
  description: string;
  sellPrice: number;
  buyPrice: number;
  labels: string[];
}

export type BasicProductInfo = Pick<Product, "ref" | "name" | "provider" | "quantity">;
