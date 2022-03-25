import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MealDetailProps {
  duration: number;
  complexity: string;
  affordability: string;
  style?: Object;
  textStyle?: Object;
}

const MealDetail: React.FC<MealDetailProps> = (props) => {
  return (
    <View style={[styles.details, props.style]}>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.duration}m
      </Text>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, props.textStyle]}>
        {props.affordability.toUpperCase()}
      </Text>
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
