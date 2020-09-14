import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MealItem from "./MealItem";

export default function MealList(props) {
  const favoriteMeals = useSelector((state) => state.mealsReducer.favorites);
  const renderMealItem = (itemData) => {
    const isFav = favoriteMeals.some((item) => item.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        steps={itemData.item.steps}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: itemData.item.id, isFav },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
