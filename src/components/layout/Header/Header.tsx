import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const imageWidth = 180;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={imageWidth}
            height={imageWidth / 4}
            priority
          />
        </div>
      </div>
    </header>
  );
}
