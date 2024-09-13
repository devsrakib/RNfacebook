import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Appearance } from "react-native";
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
// import HomeInTab from "../HomeInTab";
import Friends from "../top_tabs/Friends";
import Profile from "../top_tabs/Profile";
import Feeds from "../top_tabs/Feeds";
import Menu from "../top_tabs/Menu";
import Notification from "../top_tabs/Notification";
import {
  HomeSVG,
  MenuBaseline,
  NotificationIcon,
  RecentNews,
  RoundedUser,
  UserGroup,
} from "../../allSVG/AllSvg";
import TabHome from "../top_tabs/TabHome";

const Tab = createMaterialTopTabNavigator();
const TabContainer = () => {
  const [theme, setTheme] = useState<string>("");
  useEffect(() => {
    const colorScheme: any = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarIndicatorStyle: {
          backgroundColor: "blue",
        },
        tabBarStyle: {
          backgroundColor: theme === " light" ? "#fff" : "#242526",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {<HomeSVG />}
              </View>
            );
          },
          tabBarLabelStyle: {
            display: "none",
          },
        }}
        name="Home"
        component={TabHome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {<UserGroup />}
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
                {<RoundedUser />}
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
                {<RecentNews />}
              </View>
            );
          },
          tabBarLabelStyle: {
            display: "none",
          },
        }}
        name="Feed"
        component={Feeds}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {<NotificationIcon />}
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
                {<MenuBaseline />}
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
