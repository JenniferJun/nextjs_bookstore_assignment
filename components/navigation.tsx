"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={(path === "/" || path.includes("/list/")) ? styles.sel_menu : styles.menu}>
          <Link href="/">Home</Link>
          {(path === "/" || path.includes("/list/")) ? "✔️" : ""}
        </li>
        <li className={(path === "/about-us") ? styles.sel_menu : styles.menu}>
          <Link href="/about-us">About Us</Link>
          {(path === "/about-us") ? "✔️" : ""}
        </li>
      </ul>
    </nav>
  );
}
