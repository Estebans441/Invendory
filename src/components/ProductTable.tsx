"use client";

import * as React from "react";
import { Product } from "../types/product";
import { formatCurrency } from "../utils/format";

type Props = {
  products: Product[];
};

export default function ProductTable({ products }: Props) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const toggle = (ref: string) =>
    setExpanded((prev) => ({ ...prev, [ref]: !prev[ref] }));

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th aria-label="Expand" />
            <th>REF</th>
            <th>Name</th>
            <th>Provider</th>
            <th style={{ textAlign: "right" }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            const isOpen = !!expanded[p.ref];
            const earnings = p.sellPrice - p.buyPrice;
            return (
              <React.Fragment key={p.ref}>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ width: 40 }}>
                    <button
                      onClick={() => toggle(p.ref)}
                      aria-expanded={isOpen}
                      aria-controls={`row-${p.ref}-details`}
                      title={isOpen ? "Collapse" : "Expand"}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        border: "1px solid #e5e7eb",
                        borderRadius: 4,
                        padding: 2,
                        width: 28,
                        height: 28,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          transition: "transform 0.15s ease",
                          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                        }}
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                    </button>
                  </td>
                  <td style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{p.ref}</td>
                  <td>{p.name}</td>
                  <td>{p.provider}</td>
                  <td style={{ textAlign: "right" }}>{p.quantity}</td>
                </tr>
                {isOpen && (
                  <tr id={`row-${p.ref}-details`}>
                    <td colSpan={5} style={{ background: "#fafafa" }}>
                      <div style={{ padding: "12px 8px" }}>
                        <div style={{ marginBottom: 8 }}>
                          <strong>Description:</strong> {p.description}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12 }}>
                          <Info label="Sell price" value={formatCurrency(p.sellPrice)} />
                          <Info label="Buy price" value={formatCurrency(p.buyPrice)} />
                          <Info label="Earnings" value={formatCurrency(earnings)} />
                          <Info
                            label="Labels"
                            value={
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                {p.labels.map((l) => (
                                  <span
                                    key={l}
                                    style={{
                                      background: "#eef2ff",
                                      color: "#3730a3",
                                      border: "1px solid #c7d2fe",
                                      borderRadius: 9999,
                                      padding: "2px 8px",
                                      fontSize: 12,
                                    }}
                                  >
                                    {l}
                                  </span>
                                ))}
                              </div>
                            }
                          />
                        </div>
                      </div>
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

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div style={{ color: "#6b7280", fontSize: 12 }}>{label}</div>
      <div style={{ fontWeight: 600 }}>{value}</div>
    </div>
  );
}
