import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import RepoList from "../../components/Repo/RepoList";
import UserContext from "../../hooks/userContext";
import { getFavoriteRepos } from "../../services/asyncStorageService";

export default function FavoriteRepos() {
  const { userRepos } = useContext(UserContext);
  const [favoriteRepos, setFavoriteRepos] = useState([]);

  const handleFavoriteRepos = async () => {
    const response = await getFavoriteRepos();

    setFavoriteRepos(response);
  };
  useEffect(() => {
    handleFavoriteRepos();
  }, [userRepos]);
  return (
    <View style={{ flex: 1 }}>
      <RepoList repositories={favoriteRepos} showFavoriteBtnAction={false} />
    </View>
  );
}
