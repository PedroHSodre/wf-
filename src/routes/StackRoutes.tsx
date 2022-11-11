import React, { useContext } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheetComponent from "../components/BottomSheet";
import PageContext from "../hooks/pageContext";
import FavoriteRepos from "../pages/FavoriteRepos";
import RepoDetails from "../pages/RepoDetails";
import Repositories from "../pages/Repositories";
import theme from "../styles/theme";

import Icon from "react-native-vector-icons/Ionicons";
import BackButton from "../components/BackButton";
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  const { handlePageActive } = useContext(PageContext);
  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Repositories}
        />
        <Stack.Screen
          name="RepoDetails"
          options={{
            title: "Detalhes",
            headerShown: true,

            headerStyle: {
              backgroundColor: theme.colors.DARK_PRIMARY_CONTRAST,
            },
            headerTitleStyle: {
              color: theme.colors.LIGHT_PRIMARY_CONTRAST,
              fontFamily: "Roboto-Regular",
            },
            headerBackTitleVisible: false,

            headerTintColor: theme.colors.LIGHT_PRIMARY_CONTRAST,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  handlePageActive("Home");
                  navigation.goBack();
                }}
              >
                <BackButton />
              </TouchableOpacity>
            ),
          }}
          component={RepoDetails}
        />
      </Stack.Navigator>
    </>
  );
}
