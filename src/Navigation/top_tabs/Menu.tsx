import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Header from "../../components/menu/Header";
import { Fonts } from "../../constants/Fonts";
import ShortcutsGroups from "../../components/menu/ShortcutsGroups";
import ShortcutsRouter from "../../components/menu/ShortcutsRouter";

const Menu = () => {
  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <Header />
      <Text style={styles.text}>Your shortcuts</Text>
      <ShortcutsGroups />
      <ShortcutsRouter />
    </ScrollView>
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
