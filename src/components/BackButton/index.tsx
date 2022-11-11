import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../styles/theme";
import { Container } from "./styled";

export default function BackButton() {
  return (
    <Container>
      <Icon
        name={"arrow-back-outline"}
        size={20}
        color={theme.colors.LIGHT_PRIMARY_CONTRAST}
      />
    </Container>
  );
}
