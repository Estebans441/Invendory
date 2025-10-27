"use client"

import * as React from "react";
import Image from "next/image";
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
        <div className={styles.detailContainer}>
          {/* IMAGE COLUMN */}
          <div className={styles.imageWrap}>
            {product.imageUrl ? (
              <Image 
                src={product.imageUrl} 
                alt={product.name ?? "Product image"} 
                className={styles.productImage} 
                height={150}
                width={150}
              />
            ) : (
              <div className={styles.noImage}>No image</div>
            )}
          </div>

          {/* DETAILS COLUMN */}
          <div className={styles.detailInner}>
            {/* DESCRIPTION */}
            {product.description && (
              <div className={styles.description}>
                <strong>Description:</strong>
                <br />
                {product.description}
              </div>
            )}
            {/* LABELS */}
            <div className={styles.labelsWrap}>
              <strong>Labels:</strong>
              {(product.labels ?? []).map((l: string) => (
                <span key={l} className={styles.labelPill}>
                  {l}
                </span>
              ))}
            </div>
            { /* COLORS */}
            { product.colors && (
              <div className={styles.labelsWrap}>
                <strong>Colors:</strong>
                { product.colors.map((c: string) => (
                  <span
                    key={c}
                    title={c}
                    aria-label={`color-${c}`}
                    className={styles.colorBox}
                    style={{
                      backgroundColor: c,
                    }}
                  />
                ))}
              </div>
            )}
            {/* INFO GRID */}
            <div className={styles.infoGrid}>
              <Info label="Sell price" value={formatCurrency(product.sellPrice)} />
              <Info label="Buy price" value={formatCurrency(product.buyPrice)} />
              <Info label="Earnings" value={formatCurrency(earnings)} />
              {product.extraFields && Object.entries(product.extraFields).map(([key, value]) => (
                <Info key={key} label={key} value={value} />
              ))}
            </div>
          </div>
        </div>
    );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className={styles.infoLabel}>{label}</div>
      <div className={styles.infoValue}>{value}</div>
    </div>
  );
}
