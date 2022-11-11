import styled from "styled-components/native";
import { TextInput as TextInputUI, TextInputProps } from "react-native-paper";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export const TextInput = styled(TextInputUI)`
  height: 56px;
  width: ${width - 35}px;
  margin-top: 10px;
  background: ${(props) => props.theme.colors.GRAY_TERTIARY};
`;
