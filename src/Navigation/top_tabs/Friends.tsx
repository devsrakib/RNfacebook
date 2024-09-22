import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Search } from "../../../allSVG/AllSvg";
import { apiUrl } from "../../components/userInfo/UserInfo";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import Requests from "../../components/Friends/Requests";

const Friends = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleCon}>
        <Text style={styles.title}>Friends</Text>
        <Search />
      </View>
      <ScrollView>
        <View style={styles.buttonCon}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Suggestions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Your friends</Text>
          </TouchableOpacity>
        </View>
        <Divider
          style={{
            width: "90%",
            alignSelf: "center",
          }}
        />
        <View style={styles.infoCon}>
          <Text style={styles.requestText}>
            Friend request{" "}
            <Text style={{ color: "red", fontSize: 20 }}>289</Text>
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: "blue" }}>See all</Text>
          </TouchableOpacity>
        </View>
        {apiUrl?.map((item, index) => {
          return <Requests item={item} key={index.toString()} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Friends;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleCon: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 28, color: "#000", fontWeight: "700" },
  buttonCon: {
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#797979",
    width: 110,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  infoCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  requestText: { fontSize: 20, color: "#000" },
  seeAll: {
    fontSize: Fonts.large,
    color: Colors.blue,
  },
});
