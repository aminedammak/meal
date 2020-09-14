import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsActions";
const initialState = {
  meals: MEALS,
  favorites: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const meal = MEALS.find((item) => item.id === action.favId);

      const mealAlreadyFav = state.favorites.findIndex(
        (item) => item.id === action.favId
      );

      let updatedFav = [];
      if (mealAlreadyFav > -1) {
        //remove meal from fav
        let favtemp = [...state.favorites];
        favtemp = favtemp.filter((item) => {
          return item.id !== action.favId;
        });
        updatedFav = favtemp;
      } else {
        //Add meal to fav
        updatedFav = [...state.favorites, meal];
      }

      return {
        ...state,
        favorites: updatedFav,
      };

    default:
      return state;
  }
};

export default mealsReducer;
