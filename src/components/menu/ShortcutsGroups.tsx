import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Item from "./Item";

const ShortcutsGroups = () => {
  const data = [
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpeg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpeg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpeg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpeg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpeg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpeg"),
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={({ item }) => {
          return <Item item={item} />;
        }}
      />
    </View>
  );
};

export default ShortcutsGroups;
const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    gap: 10,
    paddingTop: 20,
    height: 150,
  },
});
