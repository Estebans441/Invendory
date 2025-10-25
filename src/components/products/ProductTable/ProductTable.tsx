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
            <th>REF</th>
            <th>Name</th>
            <th>Provider</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {/* CONTENT */}
        <tbody>
          {products.map((product) => {
            const isOpen = !!expanded[product.ref];
            return (
              <React.Fragment key={product.ref}>
                <tr className={styles.row} onClick={() => toggle(product.ref)}>
                  {/* PRODUCT INFO */}
                  <td className={styles.cell} data-label="REF">{product.ref}</td>
                  <td className={styles.cell} data-label="Name">{product.name}</td>
                  <td className={styles.cell} data-label="Provider">{product.provider}</td>
                  <td className={styles.cell} data-label="Quantity">{product.quantity}</td>
                </tr>
                {/* PRODUCT ADDITIONAL DETAILS */}
                <tr
                  id={`row-${product.ref}-details`}
                  className={`${styles.detailRow} ${isOpen ? styles.open : ""}`}>
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

