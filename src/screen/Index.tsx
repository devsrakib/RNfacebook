import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, FontAwesome5 } from "expo-vector-icons";
import TabContainer from "../Navigation/mainTab/TabContainer";
import PlusPopupModal from "../components/home/PlusPopupModal";
import Animated, { FadeInUp } from "react-native-reanimated";

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isActiveHeader, setIsActiveHeader] = useState(true);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#fff" }]}>
      {/*header in home*/}
      {isActiveHeader && (
        <Animated.View
          entering={FadeInUp}
          style={[styles.headerContainer, { backgroundColor: "#fff" }]}
        >
          <Text style={[styles.logo, { color: "blue" }]}>facebook</Text>
          <View style={[styles.headerIconContainer]}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
            <PlusPopupModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
            <Feather name="search" size={24} color="black" />
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
          </View>
        </Animated.View>
      )}
      <TabContainer setIsActiveHeader={setIsActiveHeader} />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  logo: {
    fontSize: 26,
    fontWeight: "700",
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 130,
    justifyContent: "space-between",
  },
});
