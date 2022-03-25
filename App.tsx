import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreens from "./screens/CategoriesScreens";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <CategoriesScreens />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
