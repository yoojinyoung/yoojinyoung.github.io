import React, { PropsWithChildren } from "react";
import Sidebar from "../Sidebar";
import { Helmet } from "react-helmet";
import "../../../styles/global.scss";
import "modern-normalize/modern-normalize.css";

import * as styles from "./Layout.module.scss";

interface Props {
  pageStyle?: string;
}

export default function Layout(props: PropsWithChildren<Props>) {
  const { children, pageStyle } = props;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div id="layout" className={styles.layout}>
        <Sidebar />
        <main id="page" className={pageStyle}>
          {children}
        </main>
      </div>
    </>
  );
}
