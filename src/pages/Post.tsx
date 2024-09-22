import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import Header from "../components/post/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Post = () => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header />
    </View>
  );
};

export default Post;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
