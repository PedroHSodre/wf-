import styled from "styled-components/native";

export const Container = styled.View<{ height?: string }>`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : "1px")};
  background: ${(props) => props.theme.colors.LINE_PRIMARY};
`;
