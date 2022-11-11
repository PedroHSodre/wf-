import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { width } = Dimensions.get("screen");
export const Container = styled.View`
  flex: 1;
  border-radius: 0;
  height: 100%;
  width: 100%;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.LIGHT_BACKDROP};
  position: absolute;
  top: 0;
  z-index: 100;
`;

export const ContentContainer = styled.View`
  flex: 1;
  height: 390px;
  width: 358px;
  border-radius: 0;
  padding-left: 16px;
`;

export const Text = styled.Text`
  letter-spacing: 0.15px;
  font-size: 16px;
  font-family: "Roboto-Regular";
`;

export const ButtonsContainer = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  width: ${width - 35}px;
  height: 42px;
`;
