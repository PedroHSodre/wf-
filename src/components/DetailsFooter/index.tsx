import React, { useContext } from "react";
import theme from "../../styles/theme";
import Button from "../Button";
import { ButtonsContainer, Container, Content } from "./styled";
import Icon from "react-native-vector-icons/Ionicons";
import { Linking, View } from "react-native";
import { handleAddFavorite } from "../../services/asyncStorageService";
import UserContext from "../../hooks/userContext";

export default function DetailsFooter(props: any) {
  const { handleAddFavorite: handleContextRepos } = useContext(UserContext);
  const handleAccessWeb = () => {
    Linking.openURL(props.repository.html_url);
  };

  async function handleFavorite() {
    await handleAddFavorite(props.repository);
    handleContextRepos(props.repository.id);
  }

  return (
    <Container>
      <ButtonsContainer onPress={handleAccessWeb}>
        <Content backgroundColor="transparent">
          <Button
            text="Ver Repositório"
            width="180"
            textColorStyle={theme.colors.LIGHT_PRIMARY}
          />
          <Icon name={"link"} size={20} color={theme.colors.LIGHT_PRIMARY} />
        </Content>
      </ButtonsContainer>
      <ButtonsContainer
        backgroundStyle={theme.colors.YELLOW_PRIMARY}
        onPress={handleFavorite}
      >
        <Content>
          <Button
            text="Favoritar"
            width="130"
            textColorStyle={theme.colors.DARK}
            background={theme.colors.YELLOW_PRIMARY}
          />
          <Icon name={"star"} size={20} color={theme.colors.DARK} />
        </Content>
      </ButtonsContainer>
    </Container>
  );
}
