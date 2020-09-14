import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import IoniconsHeaderButton from "../components/HeaderButton";

import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const FAVORITES_MEALS = useSelector((state) => state.mealsReducer.favorites);

  return (
    <MealList displayedMeals={FAVORITES_MEALS} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default FavoritesScreen;
