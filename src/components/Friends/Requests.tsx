import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

const Requests = ({ item }: any) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Profile", { ...item })}
      key={item?.id}
      style={styles.container}
    >
      <View style={styles.profileCon}>
        <Image style={styles.profile} source={{ uri: item?.profile }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <View style={styles.nameCon}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={{ color: Colors.gray }}>1d</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={[styles.confirmButton]}>
              <Text style={[styles.buttonText]}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.confirmButton, { backgroundColor: Colors.gray }]}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Requests;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
  },
  profileCon: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: { width: 65, height: 65, borderRadius: 100 },
  nameCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  name: { color: Colors.gray, fontSize: Fonts.large },
  confirmButton: {
    height: 35,
    width: 100,
    borderRadius: 8,
    backgroundColor: Colors.blue_button,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
  },
});
