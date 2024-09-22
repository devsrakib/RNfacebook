import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BackArrow } from "../../../allSVG/AllSvg";

const ViewStore = (props) => {
  const navigation = useNavigation();
  const item = props?.route?.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#242526" }}>
      <ImageBackground
        resizeMode="contain"
        style={{ flex: 1, backgroundColor: "#242526" }}
        source={{ uri: item?.profile }}
      >
        <View
          style={{
            height: 50,
            width: "90%",
            alignSelf: "center",
            borderRadius: 50,
            borderColor: "#797979",
            backgroundColor: "#3F3F3F",
            position: "absolute",
            bottom: 20,
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <TextInput placeholderTextColor={"#fff"} placeholder="Comment" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ViewStore;
