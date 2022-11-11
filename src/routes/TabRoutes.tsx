import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./StackRoutes";
import FavoriteRepos from "../pages/FavoriteRepos";
import theme from "../styles/theme";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderTitle from "../components/HeaderTitle";
import { TouchableOpacity } from "react-native";
import BottomSheetComponent from "../components/BottomSheet";
import { UserProvider } from "../hooks/userContext";
import PageContext from "../hooks/pageContext";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { pageActive } = useContext(PageContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavigationContainer>
        <UserProvider>
          <Tab.Navigator
            safeAreaInsets={{ bottom: 0 }}
            screenOptions={({ route, ...rest }) => ({
              headerShown: pageActive === "RepoDetails" ? false : true,
              headerTitle: () => <HeaderTitle />,
              tabBarStyle: {
                height: 56,
                alignItems: "center",
                justifyContent: "center",
                display: pageActive === "RepoDetails" ? "none" : "flex",
              },

              tabBarLabelStyle: { height: 23, fontSize: 14 },
              tabBarIcon: ({ focused }) => (
                <Icon
                  name={route.name === "Repositories" ? "logo-github" : "star"}
                  size={20}
                  color={
                    focused
                      ? theme.colors.LIGHT_PRIMARY
                      : theme.colors.LIGHT_TEXT_SECONDARY
                  }
                />
              ),
              headerTitleStyle: {
                color: theme.colors.DARK_PRIMARY_CONTRAST,
              },
              headerRight: () => (
                <TouchableOpacity onPress={() => setOpen(!open)}>
                  <Icon
                    size={20}
                    style={{ marginRight: 22.66 }}
                    name="settings-sharp"
                    color={theme.colors.DARK_PRIMARY_CONTRAST}
                  />
                </TouchableOpacity>
              ),
            })}
            initialRouteName="Repositories"
          >
            <Tab.Screen
              name="Repositories"
              options={{ title: "Repositórios" }}
              component={StackRoutes}
            />
            <Tab.Screen
              name="FavoriteRepos"
              options={{ title: "Favoritos" }}
              component={FavoriteRepos}
            />
          </Tab.Navigator>
          {open && <BottomSheetComponent open={open} setOpen={setOpen} />}
        </UserProvider>
      </NavigationContainer>
    </>
  );
}
