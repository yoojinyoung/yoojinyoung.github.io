import React, { PropsWithChildren } from "react";

export default function Paragraph(
  props: PropsWithChildren<{}> &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
) {
  const { children } = props;
  return <p {...props}>{children}</p>;
}
