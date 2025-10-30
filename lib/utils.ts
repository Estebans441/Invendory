import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (
  value: number,
  locale: string = "es-CO",
  currency: string = "COP"
) => new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
