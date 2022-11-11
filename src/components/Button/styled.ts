import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const Btn = styled(Button)<{
  background: string;
  border: string;
  width: string;
}>`
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  border-width: 0;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: 42px;
  justify-content: center;
  border-radius: 4px;
`;
