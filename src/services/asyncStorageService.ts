import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFavoriteRepos = async () => {
  const response = await AsyncStorage.getItem("@RN_WF_FAVORITE_REPOS");

  const data = JSON.parse(response ? response : "[]");
  return data;
};

export const handleAddFavorite = async (repo: { id: string }) => {
  const storage = await getFavoriteRepos();

  const alreadyAdd = storage.find((item: any) => item.id === repo.id);

  if (!alreadyAdd) {
    const data = [...storage, repo];

    await AsyncStorage.setItem("@RN_WF_FAVORITE_REPOS", JSON.stringify(data));
  }
};
