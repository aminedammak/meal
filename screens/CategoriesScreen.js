import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function CategoriesScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate("CategoryMealsScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
