import React, { PropsWithChildren } from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Page from "../../organisms/Page";

export default function HomePage({ children }: PropsWithChildren<{}>) {
  return (
    <Page>
      <div>{children}</div>
    </Page>
  );
}
