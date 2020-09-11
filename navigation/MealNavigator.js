import { Platform } from "react-native";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans",
    },
  },
};

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      /* this is here for example */
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      },
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FavoritesNavigator = createStackNavigator(
  {
    FavoritesMeals: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const TabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={28}
              color={Colors.accentColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarLabel: "Favorites",
        tabBarIcon: () => {
          return (
            <Ionicons name="ios-star" size={28} color={Colors.accentColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  defaultStackNavOptions
);

const MainNavigator = createDrawerNavigator({
  MealsFavor: {
    screen: TabNavigator,
    navigationOptions: {},
  },
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
