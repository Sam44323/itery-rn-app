import React from "react";
import { View, Text } from "react-native";

const MealDetails: React.FC = ({ route }: any) => {
  return (
    <View>
      <Text>Meal details screen - {route.params.mealId}</Text>
    </View>
  );
};

export default MealDetails;
