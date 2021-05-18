import React, { PropsWithChildren } from "react";

export default function Paragraph(props: PropsWithChildren<{}>) {
  const { children } = props;
  return <p>{children}</p>;
}
