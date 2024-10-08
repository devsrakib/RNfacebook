import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "expo-vector-icons";
import { Colors } from "../../constants/Colors";
import Animated from "react-native-reanimated";
import ReactionModal from "../home/ReactionPopupModal";
import LikeCommentShareCom from "./LikeCommentShareCom";

const Post = ({ item }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [reaction, setReaction] = useState("");
  const navigation: any = useNavigation();
  console.log(item);

  const handleOpenModal = useCallback(() => setModalVisible(true), []);
  const handleCloseModal = () => setModalVisible(false);
  const handleSelectReaction = (selectedReaction: any) => {
    setReaction(selectedReaction);
    // Handle the reaction (e.g., update state or send to a server)
  };

  return (
    <TouchableOpacity
      onPress={() => setModalVisible(false)}
      activeOpacity={1}
      style={{
        backgroundColor: Colors.white,
        marginBottom: 10,
        // opacity: 0.5,
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
          <Animated.Image
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
            <Text style={{ color: "#000" }}>{item?.name}</Text>
            <View style={styles.threeDotMenu}>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ color: "#000" }}>days</Text>
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 10 }}>
        <Text
          style={{
            marginLeft: 10,
            color: "#000",
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
          <Animated.Image
            sharedTransitionTag={`${item?.id}`}
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
          <Text style={{ color: "#000" }}>Emoji</Text>
        </View>
        <View>
          <Text style={{ color: "#000" }}>Comments</Text>
        </View>
      </View>
      <Divider style={{ height: 1, width: "90%", alignSelf: "center" }} />
      <LikeCommentShareCom
        handleOpenModal={handleOpenModal}
        setIsLike={setIsLike}
        isLike={isLike}
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
        handleSelectReaction={handleSelectReaction}
      />
    </TouchableOpacity>
  );
};

export default memo(Post);

const styles = StyleSheet.create({
  threeDotMenu: {
    gap: 10,
    flexDirection: "row",
  },
});
