import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealDetails: React.FC = ({ route }: any) => {
  const meal = MEALS.find((meal) => meal.id === route.params.mealId)!;

  return (
    <View>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetail {...meal} textStyle={styles.detailText} />
      <Subtitle>Ingredients</Subtitle>
      <List list={meal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List list={meal.steps} />
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 1,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
