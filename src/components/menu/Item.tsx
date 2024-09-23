import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Radius } from "../../constants/Radius";
import { Fonts } from "../../constants/Fonts";
import { Colors } from "../../constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "expo-vector-icons";

const Item = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={item?.image} />
        <View style={styles.iconCon}>
          <MaterialCommunityIcons
            name="account-group"
            size={22}
            color={Colors.blue}
          />
        </View>
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {item?.title}
      </Text>
    </View>
  );
};

export default Item;
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: Radius.regular,
    marginBottom: 10,
  },
  title: {
    fontSize: Fonts.regular,
    textAlign: "center",
    color: Colors.text,
  },
  iconCon: {
    width: 28,
    height: 28,
    position: "absolute",
    bottom: -0,
    right: -10,
    backgroundColor: Colors.white,
    borderRadius: Radius.circle,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    elevation: 15,
  },
});
