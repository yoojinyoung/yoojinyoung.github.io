import React from "react";
import Logo from "../../atoms/Logo";
import SidebarNav from "../../molecules/SidebarNav";
import * as styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <SidebarNav />
    </aside>
  );
}
