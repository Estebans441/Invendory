"use client";

import * as React from "react";
import { Product } from "@/src/types/product";
import styles from "./ProductTable.module.css";
import ProductDetails from "../ProductDetails/ProductDetails";

type Props = {
  products: Product[];
};

export default function ProductTable({ products }: Props) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const toggle = (ref: string) =>
    setExpanded((prev) => ({ ...prev, [ref]: !prev[ref] }));

  const onRowKey = (e: React.KeyboardEvent<HTMLTableRowElement>, ref: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(ref);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">REF</th>
            <th scope="col">Name</th>
            <th scope="col">Provider</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        {/* CONTENT */}
        <tbody>
          {products.map((product) => {
            const isOpen = !!expanded[product.ref];
            const detailsId = `row-${product.ref}-details`;
            return (
              <React.Fragment key={product.ref}>
                {/* Row is interactive: expose as a button for screen readers and keyboard users */}
                <tr
                  className={styles.row}
                  onClick={() => toggle(product.ref)}
                  onKeyDown={(e) => onRowKey(e, product.ref)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                >
                  {/* PRODUCT INFO */}
                  <td className={styles.cell} data-label="REF">{product.ref}</td>
                  <td className={styles.cell} data-label="Name">{product.name}</td>
                  <td className={styles.cell} data-label="Provider">{product.provider}</td>
                  <td className={styles.cell} data-label="Quantity">{product.quantity}</td>
                </tr>
                {/* PRODUCT ADDITIONAL DETAILS */}
                <tr id={detailsId} className={`${styles.detailRow} ${isOpen ? styles.open : ""}`}>
                  <td colSpan={4} className={styles.detailCell}>
                    <div className={styles.detailContent} aria-hidden={!isOpen}>
                      <ProductDetails product={product} />
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
