import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 368px;
  background: ${(props) => props.theme.colors.LIGHT_PRIMARY_CONTRAST};
  padding: 16px;
`;

export const TitleContainer = styled.View`
  margin-bottom: 16px;
`;

export const TitleText = styled.Text<{ boldier?: boolean }>`
  font-family: ${(props) => (props.boldier ? "Inter-Medium" : "Inter-Regular")};
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.DARK_SECONDARY};
`;

export const SubTitleContainer = styled.View`
  height: 38px;
  margin-bottom: 16px;
`;

export const SubTitleText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.GRAY_PRIMARY};
  font-family: "Inter-Regular";
`;

export const DescriptionContainer = styled.View`
  height: 209px;
  margin-bottom: 16px;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.GRAY_PRIMARY};
  font-family: "Inter-Regular";
`;

export const LanguageContainer = styled.View`
  flex-direction: row;
  height: 17px;
  width: 88px;
  align-items: center;
`;

export const LanguageText = styled.Text`
  color: ${(props) => props.theme.colors.GRAY_PRIMARY};
  font-size: 14px;
  line-height: 17px;
  margin-left: 8px;
  font-family: "Inter-Regular";
`;
