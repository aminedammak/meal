import React, { useState } from "react";
import { Switch, Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

export default function FilterSwitch(props) {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.primaryColor}
        value={props.valueState}
        onValueChange={props.handleValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
