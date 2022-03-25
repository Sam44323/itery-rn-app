import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  clickHandler: () => void;
  icon: string;
  color: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  clickHandler,
  icon,
  color,
}) => {
  return (
    <Pressable
      onPress={clickHandler}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon as any} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.45,
  },
});
