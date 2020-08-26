import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMealsScreen: CategoryMealsScreen,
  MealDetailScreen: MealDetailScreen,
});

export default createAppContainer(MealNavigator);
