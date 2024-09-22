import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, TouchableOpacity } from "react-native";
import React from "react";
// import HomeInTab from "../HomeInTab";
import Friends from "../top_tabs/Friends";
import Profile from "../top_tabs/Profile";
import Menu from "../top_tabs/Menu";
import Notification from "../top_tabs/Notification";
import TabHome from "../top_tabs/TabHome";
import { Entypo, Feather, FontAwesome, MaterialIcons } from "expo-vector-icons";

const Tab = createMaterialTopTabNavigator();
const TabContainer = ({
  setIsActiveHeader,
}: {
  setIsActiveHeader: Function;
}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarIndicatorStyle: {
          backgroundColor: "blue",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "blue" : "black"}
                  />
                }
              </View>
            );
          },
          tabBarLabelStyle: {
            display: "none",
          },
        }}
        name="TabHome"
        component={TabHome}
        listeners={{
          focus: () => setIsActiveHeader(true),
          blur: () => setIsActiveHeader(false),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {
                  <FontAwesome
                    name="users"
                    size={20}
                    color={focused ? "blue" : "black"}
                  />
                }
              </View>
            );
          },
          tabBarLabelStyle: {
            display: "none",
          },
        }}
        name="friend"
        component={Friends}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {
                  <FontAwesome
                    name="user-circle-o"
                    size={24}
                    color={focused ? "blue" : "black"}
                  />
                }
              </View>
            );
          },
          tabBarLabelStyle: {
            display: "none",
          },
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {
                  <MaterialIcons
                    name="notifications"
                    size={24}
                    color={focused ? "blue" : "black"}
                  />
                }
              </View>
            );
          },
          tabBarLabelStyle: {
            display: "none",
          },
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {
                  <Feather
                    name="menu"
                    size={24}
                    color={focused ? "blue" : "black"}
                  />
                }
              </View>
            );
          },
          tabBarLabelStyle: {
            display: "none",
          },
        }}
        name="Settings"
        component={Menu}
      />
    </Tab.Navigator>
  );
};

export default TabContainer;
