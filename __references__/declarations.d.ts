declare module "*.svg" {
  import React from "react";
  import { Props } from "react-svg";
  const content: React.FC<Props>;
  export default content;
}
