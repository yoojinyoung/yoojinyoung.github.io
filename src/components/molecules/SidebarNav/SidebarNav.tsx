import React, { PropsWithChildren } from "react";
import SidebarNavItem from "../SidebarNavItem";
import * as styles from "./SidebarNav.module.scss";

export default function SidebarNav() {
  return (
    <nav className={styles.sidebarNav}>
      <ul>
        <SidebarNavItem title="첫 화면" href="/" />
        <SidebarNavItem title="소개" href="/about" />
        <SidebarNavItem title="글 모음" href="/posts" />
      </ul>
    </nav>
  );
}
