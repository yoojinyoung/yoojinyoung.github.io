import React, { PropsWithChildren } from "react";
import SidebarNavItem from "../SidebarNavItem";
import * as styles from "./SidebarNav.module.scss";

export default function SidebarNav() {
  const currentPath = window?.location?.pathname;
  const isActive = (href) => href === currentPath;

  return (
    <nav className={styles.sidebarNav}>
      <ul>
        <SidebarNavItem title="첫 화면" href="/" active={isActive("/")} />
        <SidebarNavItem
          title="소개"
          href="/about"
          active={isActive("/about")}
        />
        <SidebarNavItem
          title="글 모음"
          href="/posts"
          active={isActive("/posts")}
        />
      </ul>
    </nav>
  );
}
