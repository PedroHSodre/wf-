import React from "react";
import { Container, Text } from "./styled";

type RepoSubDescriptionProps = {
  subDescription: string;
};

export default function RepoSubDescription(props: RepoSubDescriptionProps) {
  return (
    <Container>
      <Text>{props.subDescription}</Text>
    </Container>
  );
}
