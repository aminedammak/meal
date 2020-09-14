import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import IoniconsHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import { toggleFavoriteAction } from "../store/actions/mealsActions";

const DetailName = (props) => {
  return <Text style={props.style}>{props.children}</Text>;
};

export default function MealDetailScreen(props) {
  const mealId = props.navigation.getParam("mealId");
  const mealObject = MEALS.find((item) => item.id === mealId);
  const { navigation } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setParams({ dispatch });
  }, []);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          style={styles.detailsImage}
          source={{
            uri: mealObject.imageUrl,
          }}
        />
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{mealObject.duration}m</DefaultText>
          <DefaultText>{mealObject.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{mealObject.affordability.toUpperCase()}</DefaultText>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Ingredients</Text>
          {mealObject.ingredients.map((item) => (
            <DetailName key={item} style={styles.detailName}>
              {item}
            </DetailName>
          ))}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Steps</Text>
          {mealObject.steps.map((item) => (
            <DetailName key={item} style={styles.detailName}>
              {item}
            </DetailName>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const dispatch = navigationData.navigation.getParam("dispatch");
  const mealObject = MEALS.find((item) => item.id === mealId);
  return {
    headerTitle: mealObject.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Fav"
            iconName="ios-star"
            onPress={() => {
              dispatch(toggleFavoriteAction(mealId));
              console.log("Marked a favorite");
            }}
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

  detailsImage: {
    width: "100%",
    height: 200,
  },
  mealRow: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    marginHorizontal: 10,
    marginVertical: 30,
    marginBottom: 10,
  },
  detailName: {
    padding: 15,
    marginVertical: 10,
    width: "100%",
    borderColor: "#222",
    borderStyle: "solid",
    borderWidth: 1,
  },
  detailsContainer: {
    padding: 10,
    flex: 1,
    width: "100%",
  },
});
