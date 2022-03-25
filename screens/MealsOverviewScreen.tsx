import { MEALS, CATEGORIES } from "../data/dummy-data";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen: React.FC = ({ route, navigation }: any) => {
  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(route.params.categoryId) >= 0
  );

  React.useEffect(() => {
    // example of setting the options for the screen from inside
    navigation.setOptions({
      title: CATEGORIES.find((cat) => cat.id === route.params.categoryId)!
        .title,
    });
  }, []);

  const renderMealItem = (itemData: any) => {
    return <MealItem {...itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
