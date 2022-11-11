import styled from "styled-components/native";

export const Container = styled.View`
  width: 359px;
  height: 167px;
  background: ${(props) => props.theme.colors.LIGHT_PRIMARY_CONTRAST};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 12px 16px;
  margin-bottom: 16px;
`;
