import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Radius } from "../../constants/Radius";
import { Colors } from "react-native/Libraries/NewAppScreen";

const RouterItem = ({ item }) => {
  return <View style={styles.container}></View>;
};

export default RouterItem;
const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: Radius.large,
    shadowColor: Colors.black,
    elevation: 15,
    backgroundColor: Colors.white,
    width: "48%",
  },
});
