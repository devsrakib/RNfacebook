import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "expo-vector-icons";
import { Fonts } from "../../constants/Fonts";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <TouchableOpacity>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    height: 50,
  },
  title: {
    fontSize: Fonts.xxl,
    fontWeight: "600",
  },
});
