import React from "react";
import RepoCard from "../RepoCard";
import { Container, ScrollView } from "./styled";

type RepoListProps = {
  repositories: Array<{}>;
  showFavoriteBtnAction: boolean;
};

export default function RepoList(props: RepoListProps) {
  return (
    <Container>
      <ScrollView>
        {!props.repositories.error &&
          props.repositories?.map((item: any) => (
            <RepoCard
              repository={item}
              key={item.id}
              showActionBtn={props.showFavoriteBtnAction}
            />
          ))}
      </ScrollView>
    </Container>
  );
}
