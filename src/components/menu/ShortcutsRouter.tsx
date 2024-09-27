import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Radius } from "../../constants/Radius";
import { Colors } from "../../constants/Colors";
import RouterItem from "./RouterItem";

const ShortcutsRouter = () => {
  return (
    <View style={styles.container}>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
        return <RouterItem item={item} key={index.toString()} />;
      })}
    </View>
  );
};

export default ShortcutsRouter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
});
