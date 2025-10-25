"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import { useState } from "react";

import { menuItems } from "@/src/data/appConstants";

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<string>("");

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href} className={`${styles.menuItem} ${selectedItem === item.href ? styles.selectedMenuItem : ""}`}>
              <Link 
                  className={styles.option}
                  href={item.href} 
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
    </div>
  );
}
