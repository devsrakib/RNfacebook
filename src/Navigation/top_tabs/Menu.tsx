import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Header from "../../components/menu/Header";
import Shortcuts from "../../components/menu/Shortcuts";
import { Fonts } from "../../constants/Fonts";

const Menu = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <Text style={styles.text}>Your shortcuts</Text>
      <Shortcuts />
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: Fonts.large,
    fontWeight: "500",
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 15,
  },
});
