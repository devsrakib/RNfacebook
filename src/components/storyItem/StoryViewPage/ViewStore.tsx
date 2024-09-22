import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome5, MaterialIcons } from "expo-vector-icons";
import { Colors } from "../../../constants/Colors";

const ViewStore = (props) => {
  const navigation = useNavigation();
  const item = props?.route?.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#242526" }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ImageBackground
          resizeMode="stretch"
          style={{
            flex: 1,
          }}
          source={{ uri: item?.profile }}
        >
          <View style={styles.inputAndEmojiCon}>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="facebook-messenger"
                size={24}
                color={Colors.white}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={"#fff"}
                placeholder="Comment"
              />
            </View>
            <View style={styles.emojiCon}>
              <MaterialIcons name="favorite" size={38} color="red" />
              <AntDesign name="like1" size={38} color="lightblue" />
              <AntDesign name="smile-circle" size={35} color="yellow" />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ViewStore;
const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    flex: 1,
    borderRadius: 50,
    borderColor: "#797979",
    backgroundColor: "#3F3F3F",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    height: "100%",
  },
  inputAndEmojiCon: {
    marginTop: "auto",
    marginBottom: 20,
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 10,
  },
  emojiCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
