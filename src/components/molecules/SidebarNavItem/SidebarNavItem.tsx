import React from "react";
import * as styles from "./SidebarNavItem.module.scss";

interface Props {
  title: string;
  href: string;
  active?: boolean;
}

function SidebarNavItem(props: Props) {
  const { title, href, active } = props;
  return (
    <li className={styles.sidebarNavItem}>
      <a className={active ? styles.active : undefined} href={href}>
        {title}
      </a>
    </li>
  );
}

export default React.memo(SidebarNavItem);
