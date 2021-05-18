import React, { PropsWithChildren } from "react";
import Layout from "../Layout/Layout";
import * as styles from "./Page.module.scss";

export default function Page(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <Layout pageStyle={styles.page}>{children}</Layout>;
}

export const fluid = styles.fluid as string;
