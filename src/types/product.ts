export interface Product {
  ref: string;
  name: string;
  imageUrl?: string;
  provider: string;
  quantity: number;
  description: string;
  colors?: string[];
  sellPrice: number;
  buyPrice: number;
  labels: string[];
  extraFields?: Record<string, string>;
}

export type BasicProductInfo = Pick<Product, "ref" | "name" | "provider" | "quantity">;
