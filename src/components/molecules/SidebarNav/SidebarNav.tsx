import React, { PropsWithChildren } from "react";

export default function SidebarNav(props: PropsWithChildren<{}>) {
  const { children } = props;
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
}
