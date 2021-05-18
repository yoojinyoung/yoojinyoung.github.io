import React, { useEffect, useLayoutEffect, useState } from "react";
import * as styles from "./SidebarNavItem.module.scss";

interface Props {
  title: string;
  href: string;
}

function SidebarNavItem(props: Props) {
  const { title, href } = props;
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    const currentPath =
      typeof window !== "undefined" ? window?.location?.pathname : undefined;
    setIsActive(href === currentPath);
  }, [typeof window, setIsActive]);

  return (
    <li className={styles.sidebarNavItem}>
      <a className={isActive ? styles.active : undefined} href={href}>
        {title}
      </a>
    </li>
  );
}

export default React.memo(SidebarNavItem);
