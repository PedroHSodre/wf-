import styled from "styled-components/native";

export const Container = styled.View`
  height: 31px;
  width: 326px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Text = styled.Text<{ boldier?: boolean }>`
  font-family: ${(props) => (props.boldier ? "Inter-Medium" : "Inter-Regular")};
  width: 80%;
  height: 15px;
  line-height: 15px;
`;

export const TextBold = styled.Text`
  font-family: "Inter-Medium";
  width: 100%;
  height: 15px;
  line-height: 15px;
`;

export const IconContainer = styled.View`
  height: 29px;
  width: 29px;
`;

export const Image = styled.Image`
  height: 29px;
`;
