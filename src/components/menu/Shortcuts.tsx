import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Item from "./Item";

const Shortcuts = () => {
  const data = [
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpg"),
    },
    {
      title: "React native Bangladesh",
      image: require("../../../assets/shahin.jpg"),
    },
  ];
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={({ item }) => {
        return <Item item={item} />;
      }}
    />
  );
};

export default Shortcuts;
const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    gap: 10,
    paddingTop: 20,
  },
});
