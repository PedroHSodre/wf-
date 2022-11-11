import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import UserContext from "../../../hooks/userContext";
import { handleAddFavorite } from "../../../services/asyncStorageService";
import Divider from "../../Divider";
import RepoCardActions from "./RepoCardActions";
import RepoCardTitle from "./RepoCardTitle";
import RepoSubDescription from "./RepoSubDescription";
import { Container } from "./styled";

type RepoCardProps = {
  repository: any;
  showActionBtn?: boolean;
};

type Nav = {
  navigate: (value: string, data?: object) => void;
};

export default function RepoCard(props: RepoCardProps) {
  const { handleAddFavorite: handleContextRepos } = useContext(UserContext);

  const navigation = useNavigation<Nav>();

  const handleFavorite = async () => {
    await handleAddFavorite(props.repository);
    handleContextRepos(props.repository.id);
  };
  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RepoDetails", { data: props.repository })
        }
      >
        <RepoCardTitle title={props.repository?.full_name} />
        <Divider />
        <RepoSubDescription
          subDescription={props.repository?.owner?.avatar_url}
        />
        <RepoCardActions
          repository={props.repository}
          starsCount={props.repository?.stargazers_count}
          language={props.repository?.language}
          handleFavorite={handleFavorite}
          showActionBtn={props.showActionBtn}
        />
      </TouchableOpacity>
    </Container>
  );
}
