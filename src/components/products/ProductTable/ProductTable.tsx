"use client";

import * as React from "react";
import { Product } from "../../../types/product";
import styles from "./ProductTable.module.css";
import ProductDetails from "../ProductDetails/ProductDetails";

type Props = {
  products: Product[];
};

export default function ProductTable({ products }: Props) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const toggle = (ref: string) =>
    setExpanded((prev) => ({ ...prev, [ref]: !prev[ref] }));

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th aria-label="Expand" />
            <th>REF</th>
            <th>Name</th>
            <th>Provider</th>
            <th style={{ textAlign: "right" }}>Quantity</th>
          </tr>
        </thead>
        {/* CONTENT */}
        <tbody>
          {products.map((product) => {
            const isOpen = !!expanded[product.ref];
            return (
              <React.Fragment key={product.ref}>
                <tr className={styles.row}>
                  <td className={styles.expandCell}>
                    <button
                      onClick={() => toggle(product.ref)}
                      aria-expanded={isOpen}
                      aria-controls={`row-${product.ref}-details`}
                      title={isOpen ? "Collapse" : "Expand"}
                      className={styles.toggle}
                    >
                      <span
                        className={styles.chev}
                        data-open={isOpen}
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                    </button>
                  </td>
                  {/* PRODUCT INFO */}
                  <td className={styles.refCell}>{product.ref}</td>
                  <td className={styles.nameCell}>{product.name}</td>
                  <td className={styles.providerCell}>{product.provider}</td>
                  <td className={styles.qtyCell}>{product.quantity}</td>
                </tr>
                {/* PRODUCT ADDITIONAL DETAILS */}
                {isOpen && (
                  <tr id={`row-${product.ref}-details`} className={styles.detailRow}>
                    <td colSpan={5} className={styles.detailCell}>
                      <ProductDetails product={product} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

