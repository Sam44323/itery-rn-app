import { MEALS } from "../data/dummy-data";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealsOverviewScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Meals overview screen!</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
