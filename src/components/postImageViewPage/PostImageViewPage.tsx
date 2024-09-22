import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "expo-vector-icons";

const PostImageViewPage = (props: any) => {
  const item = props?.route?.params;
  const navigation = useNavigation();
  const [visibleData, setVisibleData] = useState(false);

  const click = () => {
    setVisibleData(!visibleData);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => click()}
        activeOpacity={1}
        style={{ flex: 1, backgroundColor: "#fff" }}
      >
        {visibleData === true && (
          <View
            style={{
              height: 50,
              backgroundColor: "#fff",
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
              width: "100%",
              position: "absolute",
              top: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: 400 }}
            source={{ uri: item?.profile }}
          />
        </View>
        {visibleData === true && (
          <View style={{ width: "90%", alignSelf: "center" }}>
            <Text style={{ color: "#000", position: "absolute", bottom: 20 }}>
              {item?.about}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PostImageViewPage;
