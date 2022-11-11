import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import DetailsFooter from "../../components/DetailsFooter";
import RepoDetailCard from "../../components/RepoDetailCard";
import PageContext from "../../hooks/pageContext";

export default function RepoDetails() {
  const { handlePageActive } = useContext(PageContext);
  const route = useRoute<{
    params: { data: object };
    key: string;
    name: string;
    path?: string | undefined;
  }>();
  const { data } = route.params;

  useEffect(() => {
    handlePageActive("RepoDetails");
  });

  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    >
      <RepoDetailCard repository={data} />
      <DetailsFooter repository={data} />
    </View>
  );
}
