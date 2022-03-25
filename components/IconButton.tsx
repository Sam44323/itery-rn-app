import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = () => {
  return (
    <Pressable>
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;
