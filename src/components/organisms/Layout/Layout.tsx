import React, { PropsWithChildren } from "react";
import Sidebar from "../Sidebar";
import * as styles from "./Layout.module.scss";

export default function Layout(props: PropsWithChildren<{}>) {
  const { children } = props;
  return (
    <div id="layout" className={styles.layout}>
      <Sidebar />
      <main id="page">{children}</main>
    </div>
  );
}
