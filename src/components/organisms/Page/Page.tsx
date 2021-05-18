import React, { PropsWithChildren } from "react";
import Layout from "../Layout/Layout";
import SideBar from "../SideBar";

export default function Page(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <Layout>{children}</Layout>;
}
