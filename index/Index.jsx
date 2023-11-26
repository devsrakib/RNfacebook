import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/home/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "../screen/top_tabs/stackNavigation/StackNavigation";
const index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation />
        <StatusBar  animated={true} backgroundColor="#000" barStyle="#ffffff" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default index;
