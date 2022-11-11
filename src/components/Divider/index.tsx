import React from "react";
import { Container } from "./styled";
type DividerProps = {
  height?: string;
};
export default function Divider(props: DividerProps) {
  return <Container {...props} />;
}
