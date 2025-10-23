import ProductTable from "../../src/components/products/ProductTable/ProductTable";
import { PRODUCTS } from "../../src/data/products";

export default function ProductsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <p className="text-zinc-600 mb-6">
        Click the arrow at the start of a row to view more details.
      </p>
      <ProductTable products={PRODUCTS} />
    </section>
  );
}
