import styled from "styled-components/native";

export const Container = styled.View`
  margin: 12px 16px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  letter-spacing: 0.15px;
  color: ${(props) => props.theme.colors.DARK_PRIMARY_CONTRAST};
  font-size: 20px;
  font-weight: 500;
  font-family: "Roboto-Medium";
`;
