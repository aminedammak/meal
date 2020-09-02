import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components/HeaderButton";

export default function MealDetailScreen(props) {
  const mealId = props.navigation.getParam("mealId");
  const mealObject = MEALS.find((item) => item.id === mealId);
  const mealDetails = (
    <View>
      <Text>{mealObject.title}</Text>
      <Text>{mealObject.steps}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen screen</Text>
      <View>{mealDetails}</View>
      <Button
        title="Go back to top"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const mealObject = MEALS.find((item) => item.id === mealId);
  return {
    headerTitle: mealObject.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-search"
            onPress={() => console.log("Marked a favorite")}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
