import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 30px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  font-family: "Inter-Regular";
  line-height: 15px;
  color: ${(props) => props.theme.colors.GRAY_PRIMARY};
  align-self: stretch;
  font-size: 12px;
`;
