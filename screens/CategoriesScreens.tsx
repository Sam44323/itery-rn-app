import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreens: React.FC = ({ navigation }: any) => {
  const renderCategoryItem = (itemData: any) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        navigator={() => navigation.navigate("MealsOverview")}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreens;
