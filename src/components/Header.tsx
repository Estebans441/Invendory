import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        padding: "12px 16px",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 700 }}>Invendory</div>
        <nav style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
          <Link href="/" style={{ textDecoration: "none", color: "#111827" }}>Home</Link>
          <Link href="/products" style={{ textDecoration: "none", color: "#111827" }}>Products</Link>
        </nav>
      </div>
    </header>
  );
}
