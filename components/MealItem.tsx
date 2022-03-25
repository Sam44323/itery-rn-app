import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

interface MealItemProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

const MealItem: React.FC<MealItemProps> = (props) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View>
          <Text>{props.duration}</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
