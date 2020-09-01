import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FiltersScreen() {
  return (
    <View style={styles.screen}>
      <Text>FiltersScreen screen</Text>
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