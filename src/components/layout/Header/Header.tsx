"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";

import { menuItems } from "@/src/data/appConstants";

export default function Header() {
  const [open, setOpen] = useState(false);
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

        { /* Mobile menu button and navigation */ }
        <button
          aria-label={open ? "Open menu" : "Close menu"}
          onClick={() => setOpen((s) => !s)}
          className={styles.menuButton}
        >
          {open ? <X /> : <MenuIcon />}
        </button>

        { /* Mobile navigation options */ }
        <nav className={`${styles.mobileMenuNav} ${open ? styles.open : ""}`}>
          <ul className={styles.mobileMenuList}>
            {menuItems.map((item) => (
              <li key={item.href} className={styles.mobileMenuItem}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
