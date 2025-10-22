export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        padding: "16px",
        background: "#ffffff",
        marginTop: 24,
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto", color: "#6b7280", fontSize: 14 }}>
        © {new Date().getFullYear()} Invendory · All rights reserved
      </div>
    </footer>
  );
}
