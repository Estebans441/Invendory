"use client"

import * as React from "react";
import { Product } from "../../../types/product";
import { formatCurrency } from "../../../utils/format";
import styles from "./ProductDetails.module.css";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props){
    const earnings = product.sellPrice - product.buyPrice;
    return (
            // PRODUCT DETAILS
            <div className={styles.detailInner}>
              {/* DESCRIPTION */}
              <div className={styles.description}>
                <strong>Description:</strong> {product.description}
              </div>
              {/* INFO GRID */}
              <div className={styles.infoGrid}>
                <Info label="Sell price" value={formatCurrency(product.sellPrice)} />
                <Info label="Buy price" value={formatCurrency(product.buyPrice)} />
                <Info label="Earnings" value={formatCurrency(earnings)} />
                <Info
                  label="Labels"
                  value={
                    <div className={styles.labelsWrap}>
                      {product.labels.map((l : string) => (
                        <span key={l} className={styles.labelPill}>
                          {l}
                        </span>
                      ))}
                    </div>
                  }
                />
              </div>
            </div>
          )
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div style={{ color: "var(--color-bg)", fontSize: 12 }}>{label}</div>
      <div style={{ color: "var(--color-bg)", fontWeight: 600 }}>{value}</div>
    </div>
  );
}
