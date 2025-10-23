"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import { useState } from "react";

import { Box, Truck, User } from 'lucide-react';

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const menuItems = [
    { href: "/products", label: "Products", icon: <Box /> },
    { href: "/providers", label: "Providers", icon: <Truck /> },
  ];

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.href} className={`${styles.menuItem} ${selectedItem === item.href ? styles.selectedMenuItem : ""}`}>
            <Link 
                className={styles.option}
                href={item.href} 
                onClick={() => setSelectedItem(item.href)}
              >
              <div className={`${styles.iconWrapper}`}>
                {item.icon}
                {item.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
