import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import {
  Appearance,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import StoreyItem from "../../components/storyItem/StoryItem";
import { apiUrl } from "../../components/userInfo/UserInfo";
import ReactionPopupModal from "../../components/home/ReactionPopupModal";
import { MaterialCommunityIcons } from "expo-vector-icons";
import { Colors } from "../../constants/Colors";
import Post from "../../components/TabHome/Post";
import ReactionModal from "../../components/home/ReactionPopupModal";

const TabHome = () => {
  const [isReaction, setIsReaction] = useState(false);

  const navigation: any = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View style={[styles.searchContainer, { backgroundColor: "#fff" }]}>
          <Image
            source={require("../../../assets/shahin.jpeg")}
            style={styles.profile}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("post")}
            style={styles.inputBox}
          >
            <Text style={[styles.inputText, { color: "#000" }]}>
              What's on your mind?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="image-album"
              size={30}
              color={Colors.lightGreen}
            />
          </TouchableOpacity>
        </View>
        {/* ============================== */}
        <View style={[styles.storyBox, { backgroundColor: "#ffff" }]}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ backgroundColor: "red", flexDirection: "row" }}>
              <StoreyItem />
            </View>
          </ScrollView>
        </View>
        {apiUrl?.map((item) => {
          return (
            <Post
              item={item}
              setIsReaction={setIsReaction}
              isReaction={isReaction}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  searchContainer: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "contain",
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    borderColor: "#797979",
    borderRadius: 30,
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    flex: 1,
  },
  inputText: {
    fontSize: 14,
  },
  storyBox: {
    height: 200,
    marginBottom: 10,
  },
});
