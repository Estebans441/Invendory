import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={250}
            height={250 / 4}
            className={styles.logo}
            priority
          />
        </div>
      </div>
    </header>
  );
}
