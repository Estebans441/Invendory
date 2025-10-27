"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import { useState } from "react";

import { menuItems } from "@/src/data/appConstants";

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<string>("");

  return (
    // Landmark semantics: render as <nav> with an explicit label for assistive tech
    <nav className={styles.menuContainer} aria-label="Sidebar">
      <ul className={styles.menuList}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = selectedItem === item.href;
          return (
            <li key={item.href} className={`${styles.menuItem} ${isActive ? styles.selectedMenuItem : ""}`}>
              <Link
                className={styles.option}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setSelectedItem(item.href)}
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
