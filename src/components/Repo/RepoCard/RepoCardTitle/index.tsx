import React from "react";
import { Container, IconContainer, Image, Text, TextBold } from "./styled";

type RepoCardTitleProps = {
  title: string;
};
export default function RepoCardTitle(props: RepoCardTitleProps) {
  return (
    <Container>
      <Text>
        {props.title?.split("/")[0]}/
        <TextBold>{props.title?.split("/")[1]}</TextBold>
      </Text>
      <IconContainer>
        <Image source={require("../../../../assets/IconRepo.png")} />
      </IconContainer>
    </Container>
  );
}
