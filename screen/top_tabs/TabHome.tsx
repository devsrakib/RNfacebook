import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { HomeInTabStyle } from "./HomeInTabStyle";
import { Appearance, Image, Text, TouchableOpacity, View } from "react-native";
import StoreyItem from "../../components/storyItem/StoryItem";
import { apiUrl } from "../../components/userInfo/UserInfo";
import { Divider } from "react-native-paper";
import { Comment, Like, Share } from "../../allSVG/AllSvg";
import { useNavigation } from "@react-navigation/native";

const TabHome = () => {
  const [theme, setTheme] = useState("");
  const navigation: any = useNavigation();
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === " light" ? "#fff" : "#000",
      }}
    >
      <ScrollView>
        <View
          style={[
            HomeInTabStyle.searchContainer,
            { backgroundColor: theme === " light" ? "#fff" : "#242526" },
          ]}
        >
          {/* <Image source={require("")} /> */}
          <TouchableOpacity style={HomeInTabStyle.inputBox}>
            <Text
              style={[
                HomeInTabStyle.inputText,
                { color: theme === " light" ? "#242526" : "#fff" },
              ]}
            >
              What's on your mind?
            </Text>
          </TouchableOpacity>
          {/* <Image source={require("")} /> */}
        </View>
        {/* ============================== */}
        <View
          style={[
            HomeInTabStyle.storyBox,
            { backgroundColor: theme === " light" ? "#fff" : "#242526" },
          ]}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ backgroundColor: "red", flexDirection: "row" }}>
              <StoreyItem />
            </View>
          </ScrollView>
        </View>
        {apiUrl.map((item) => {
          return (
            <View
              style={{
                backgroundColor: theme === " light" ? "#fff" : "#242526",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 20,
                  paddingLeft: 10,
                  paddingTop: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile", { ...item })}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                    source={{ uri: item?.profile }}
                  />
                </TouchableOpacity>
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                      width: "90%",
                    }}
                  >
                    <Text
                      style={{ color: theme === " light" ? "#242526" : "#fff" }}
                    >
                      {item?.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 18,
                          color: theme === " light" ? "#242526" : "#fff",
                        }}
                      >
                        ...
                      </Text>
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 18,
                          color: theme === " light" ? "#242526" : "#fff",
                        }}
                      >
                        X
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{ color: theme === " light" ? "#242526" : "#fff" }}
                  >
                    days
                  </Text>
                </View>
              </View>
              <View style={{ width: "100%", marginTop: 10 }}>
                <Text
                  style={{
                    marginLeft: 10,
                    color: theme === " light" ? "#242526" : "#fff",
                  }}
                >
                  {item?.about}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate("PostImageViewPage", { ...item });
                  }}
                >
                  <Image
                    style={{ width: "100%", height: 300 }}
                    source={{ uri: item?.profile }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 40,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 20,
                }}
              >
                <View>
                  <Text
                    style={{ color: theme === " light" ? "#242526" : "#fff" }}
                  >
                    Emoji
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ color: theme === " light" ? "#242526" : "#fff" }}
                  >
                    Comments
                  </Text>
                </View>
              </View>
              <Divider
                style={{ height: 1, width: "90%", alignSelf: "center" }}
              />
              <View
                style={{
                  height: 40,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Like />
                  <Text
                    style={{
                      marginLeft: 5,
                      color: theme === " light" ? "#242526" : "#fff",
                    }}
                  >
                    Like
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Comment />
                  <Text
                    style={{
                      marginLeft: 5,
                      color: theme === " light" ? "#242526" : "#fff",
                    }}
                  >
                    Comment
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Share />
                  <Text
                    style={{
                      marginLeft: 5,
                      color: theme === " light" ? "#242526" : "#fff",
                    }}
                  >
                    Share
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TabHome;
