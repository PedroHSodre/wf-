import styled from "styled-components/native";

export const Container = styled.View`
  height: 126px;
  padding: 16px;
  align-items: flex-start;
  background: ${(props) => props.theme.colors.LIGHT_PRIMARY_CONTRAST};
`;

export const ButtonsContainer = styled.TouchableOpacity<{
  backgroundStyle?: string;
}>`
  flex-direction: row;
  background: ${(props) =>
    props.backgroundStyle ? props.backgroundStyle : "transparent"};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.View<{ backgroundColor?: string }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.YELLOW_PRIMARY};
`;
