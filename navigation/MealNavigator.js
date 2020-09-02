import { Platform } from "react-native";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
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
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: "Favorite!",
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
    },
  }
);

export default createAppContainer(TabNavigator);
