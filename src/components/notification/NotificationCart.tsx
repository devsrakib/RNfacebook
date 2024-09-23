import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Radius } from "../../constants/Radius";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { Entypo, MaterialCommunityIcons } from "expo-vector-icons";

const NotificationCart = ({ item }: any) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <View>
        <Image style={styles.image} source={item?.image} />
        <View style={styles.iconCon}>
          <MaterialCommunityIcons
            name="comment-account"
            size={24}
            color={Colors.blue}
          />
        </View>
      </View>
      <View style={styles.textCon}>
        <View style={styles.nameCon}>
          <Text style={styles.name}>{item?.name}</Text>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}>{item?.desc}</Text>
        <Text style={styles.time}>{item?.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCart;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.notification,
    gap: 10,
    paddingVertical: 10,
  },
  nameCon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: Fonts.regular,
    fontWeight: "600",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: Radius.circle,
  },
  iconCon: {
    backgroundColor: Colors.white,
    position: "absolute",
    right: 10,
    bottom: -12,
    borderRadius: Radius.small,
  },
  textCon: {
    flex: 1,
    gap: 2,
  },
  desc: {
    color: Colors.lightGray,
  },
  time: {
    color: Colors.lightGray,
  },
});
