import React from "react";
import theme from "../../../../styles/theme";
import FavoriteButton from "../../../FavoriteButton";
import {
  Circle,
  Container,
  LanguageContainer,
  LanguageText,
  StarsCountContainer,
  StarsCountText,
} from "./styled";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default function RepoCardActions(props: any) {
  return (
    <Container>
      {props.showActionBtn && (
        <TouchableOpacity onPress={props.handleFavorite}>
          <FavoriteButton
            text="Favoritar"
            background={theme.colors.YELLOW_BACKGROUND}
            width="103"
          />
        </TouchableOpacity>
      )}
      <StarsCountContainer>
        <Icon name={"star"} size={20} color={theme.colors.YELLOW_PRIMARY} />
        <StarsCountText>{props?.starsCount}</StarsCountText>
      </StarsCountContainer>
      <LanguageContainer>
        <Circle />
        <LanguageText>{props?.language}</LanguageText>
      </LanguageContainer>
    </Container>
  );
}
