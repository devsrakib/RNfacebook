import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Search } from "../../allSVG/AllSvg";
import { apiUrl } from "../../components/userInfo/UserInfo";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Friends = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#242526" }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 28, color: "#fff", fontWeight: "700" }}>
          Friends
        </Text>
        <Search />
      </View>
      <ScrollView>
        <View
          style={{
            paddingLeft: 20,
            marginTop: 10,
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#797979",
              width: 110,
              height: 30,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Suggestions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#797979",
              width: 110,
              height: 30,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Your friends</Text>
          </TouchableOpacity>
        </View>
        <Divider
          style={{
            marginVertical: 10,
            width: "90%",
            alignSelf: "center",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>
            Friend request{" "}
            <Text style={{ color: "red", fontSize: 20 }}>289</Text>
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: "blue" }}>See all</Text>
          </TouchableOpacity>
        </View>
        {apiUrl.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Profile", { ...item })}
              key={item?.id}
              style={{
                paddingHorizontal: 20,
                // marginBottom: 10,
                alignItems: "center",
                justifyContent: "center",
                height: 90,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 65, height: 65, borderRadius: 100 }}
                  source={{ uri: item?.profile }}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 20 }}>
                      {item?.name}
                    </Text>
                    <Text style={{ color: "#fff" }}>1d</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        height: 35,
                        width: 100,
                        borderRadius: 8,
                        backgroundColor: "#0096FF",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        Confirm
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        height: 35,
                        width: 100,
                        borderRadius: 8,
                        backgroundColor: "#797979",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Friends;
