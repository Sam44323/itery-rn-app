import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List: React.FC<{ list: string[] }> = ({ list }) => {
  return (
    <View>
      {list.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
