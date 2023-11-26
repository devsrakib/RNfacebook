import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Appearance } from "react-native";
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import Friends from "../Friends";
import Menu from "../Menu";
import Notification from "../Notification";
import Profile from "../Profile";
import Feeds from "../Feeds";
// import HomeInTab from "../HomeInTab";
import {
  HomeSVG,
  HomeBlue,
  Plus,
  UserGroup,
  RoundedUser,
  MenuBaseline,
  RecentNews,
  NotificationIcon,
} from "../../../allSVG/AllSvg";
import TabHome from "../TabHome";

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
