import { View, Text, Image, TouchableOpacity, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../userInfo/UserInfo";
import { StoryStyle } from "./StoryStyle";
import { useNavigation } from "@react-navigation/native";

const StoreyItem = () => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
      }}
    >
      {apiUrl.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ViewStore", { ...item });
            }}
            activeOpacity={0.7}
            style={{ padding: 10 }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Profile", { ...item })}
              style={{
                width: 40,
                height: 40,
                position: "absolute",
                top: 20,
                left: 20,
                borderRadius: 50,
                padding: 5,
                zIndex: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 36, height: 36, borderRadius: 50 }}
                source={{ uri: item?.profile }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <Image
              resizeMode="contain"
              style={StoryStyle.imgContainer}
              source={{ uri: item?.profile }}
            />
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                position: "absolute",
                bottom: 20,
                left: 20,
                width: 80,
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default StoreyItem;
