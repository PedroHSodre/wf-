import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import RepoList from "../../components/Repo/RepoList";
import PageContext from "../../hooks/pageContext";
import UserContext from "../../hooks/userContext";

export default function Repositories() {
  const { userName, handleUserName, userRepos } = useContext(UserContext);
  const { handlePageActive, pageActive } = useContext(PageContext);

  React.useEffect(() => {
    handlePageActive("Home");
  });

  return (
    <View style={{ flex: 1 }}>
      <RepoList repositories={userRepos} showFavoriteBtnAction />
    </View>
  );
}
