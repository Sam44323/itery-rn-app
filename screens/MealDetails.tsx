import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

const MealDetails: React.FC = ({ route }: any) => {
  const meal = MEALS.find((meal) => meal.id === route.params.mealId)!;

  return (
    <View>
      <Image source={{ uri: meal.imageUrl }} />
      <Text>{meal.title}</Text>
      <MealDetail {...meal} />
      <Text>Ingredients</Text>
      {meal.ingredients.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
      <Text>Steps</Text>
    </View>
  );
};

export default MealDetails;
