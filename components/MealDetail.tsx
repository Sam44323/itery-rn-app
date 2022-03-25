import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MealDetailProps {
  duration: number;
  complexity: string;
  affordability: string;
}

const MealDetail: React.FC<MealDetailProps> = (props) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{props.duration}m</Text>
      <Text style={styles.detailItem}>{props.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{props.affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
