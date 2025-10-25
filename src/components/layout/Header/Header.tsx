"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";

import { menuItems } from "@/src/data/appConstants";

export default function Header() {
  const [open, setOpen] = useState(false);

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

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((s) => !s)}
          className={styles.hamburger}
        >
          {open ? <X /> : <MenuIcon />}
        </button>

        <nav className={`${styles.mobileNav} ${open ? styles.open : ""}`}>
          <ul className={styles.mobileList}>
            {menuItems.map((item) => (
              <li key={item.href} className={styles.mobileItem}>
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
