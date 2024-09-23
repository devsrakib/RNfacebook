import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Fonts } from "../../constants/Fonts";
import { Feather, FontAwesome } from "expo-vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.gearCon}>
        <TouchableOpacity>
          <FontAwesome name="gear" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: Fonts.xxxl,
    fontWeight: "900",
  },
  gearCon: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});
