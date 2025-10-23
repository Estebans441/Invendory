import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
  ];

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.href} className={styles.menuItem}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
