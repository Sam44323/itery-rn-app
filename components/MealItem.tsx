import React from "react";
import {
  View,
  Text,
  Platform,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

import MealDetail from "./MealDetail";

const MealItem: React.FC<MealItemProps> = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={() => navigation.navigate("MealDetails", { mealId: props.id })}
        style={({ pressed }) => (pressed ? [styles.buttonPressed] : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetail {...props} />
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
    margin: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 0.25,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
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
  buttonPressed: {
    opacity: 0.75,
  },
});
