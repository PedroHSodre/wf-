import React from "react";
import { Circle } from "../Repo/RepoCard/RepoCardActions/styled";
import {
  Container,
  DescriptionContainer,
  DescriptionText,
  LanguageContainer,
  LanguageText,
  SubTitleContainer,
  SubTitleText,
  TitleContainer,
  TitleText,
} from "./styled";

export default function RepoDetailCard(props: any) {
  return (
    <Container>
      <TitleContainer>
        <TitleText>
          {props.repository?.full_name.split("/")[0]}/
          <TitleText boldier>
            {props.repository?.full_name.split("/")[1]}
          </TitleText>
        </TitleText>
      </TitleContainer>
      <SubTitleContainer>
        <SubTitleText>{props.repository?.owner?.avatar_url}</SubTitleText>
      </SubTitleContainer>
      <DescriptionContainer>
        <DescriptionText>{props.repository?.description}</DescriptionText>
      </DescriptionContainer>
      <LanguageContainer>
        <Circle />
        <LanguageText>{props.repository?.language}</LanguageText>
      </LanguageContainer>
    </Container>
  );
}
