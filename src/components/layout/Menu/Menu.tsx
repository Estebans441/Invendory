"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";

import { menuItems } from "@/src/data/appConstants";

export default function Menu() {
  const pathname = usePathname() || "/";

  return (
    <nav aria-label="Sidebar">
      <ul className={styles.menuList}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <li key={item.href} className={`${styles.menuItem} ${isActive ? styles.selectedMenuItem : ""}`}>
              <Link
                className={styles.option}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} aria-hidden />
                  <span className={styles.label}>{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
