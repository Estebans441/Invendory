import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>In<u>Vendor</u>y</div>
      </div>
    </header>
  );
}
