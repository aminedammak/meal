import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    {...props}
  />
);

export default IoniconsHeaderButton;
