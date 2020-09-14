import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import IoniconsHeaderButton from "../components/HeaderButton";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const FAVORITES_MEALS = useSelector((state) => state.mealsReducer.favorites);

  return FAVORITES_MEALS.length > 0 ? (
    <MealList displayedMeals={FAVORITES_MEALS} navigation={props.navigation} />
  ) : (
    <View style={styles.content}>
      <DefaultText>No Favorites meals found. Start adding some!</DefaultText>
    </View>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
