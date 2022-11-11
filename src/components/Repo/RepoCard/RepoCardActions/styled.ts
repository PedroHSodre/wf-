import styled from "styled-components/native";

export const Container = styled.View`
  height: 36px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StarsCountContainer = styled.View`
  width: 34px;
  height: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StarsCountText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.GRAY_PRIMARY};
  height: 15px;
  width: 8px;
`;

export const LanguageContainer = styled.View`
  width: 74px;
  height: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Circle = styled.View`
  width: 8px;
  height: 8px;
  background: ${(props) => props.theme.colors.RED_PRIMARY};
  border-radius: 50px;
`;
export const LanguageText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  width: 60px;
  height: 15px;
  color: ${(props) => props.theme.colors.GRAY_PRIMARY};
  font-family: "Inter-Regular";
`;
