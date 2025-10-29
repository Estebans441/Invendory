import ProductTable from "@/src/components/products/ProductTable/ProductTable";
import { PRODUCTS } from "@/src/data/products";

export default function ProductsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <form className="mb-6" action="#" method="get">
        <label htmlFor="product-search" className="sr-only">
          Search products
        </label>
        <input 
          type="text"
          id="product-search"
          name="product-search"
          placeholder="Search products..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-md"
        />
      </form>
      <ProductTable products={PRODUCTS} />
    </section>
  );
}
