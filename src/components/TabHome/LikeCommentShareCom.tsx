import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, FontAwesome5 } from "expo-vector-icons";
import { Colors } from "../../constants/Colors";
import ReactionModal from "../home/ReactionPopupModal";

const LikeCommentShareCom = ({
  handleOpenModal,
  setIsLike,
  isLike,
  modalVisible,
  handleCloseModal,
  handleSelectReaction,
}: {
  handleOpenModal: () => void;
  setIsLike: Function;
  isLike: boolean;
  modalVisible: boolean;
  handleCloseModal: () => void;
  handleSelectReaction: (selectedReaction: any) => void;
}) => {
  return (
    <View
      style={{
        height: 40,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onLongPress={() => handleOpenModal()}
        onPress={() => setIsLike(!isLike)}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <AntDesign
          name={isLike ? "like1" : "like2"}
          size={20}
          color={isLike ? Colors.blue : Colors.lightGray}
        />
        <Text
          style={{
            marginLeft: 5,
            color: "#000",
          }}
        >
          Like
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name="comment" size={20} color={Colors.gray} />
        <Text
          style={{
            marginLeft: 5,
            color: "#000",
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
        <FontAwesome name="share" size={20} color={Colors.gray} />
        <Text
          style={{
            marginLeft: 5,
            color: "#000",
          }}
        >
          Share
        </Text>
      </TouchableOpacity>
      {modalVisible && (
        <ReactionModal
          visible={modalVisible}
          onClose={handleCloseModal}
          onSelect={handleSelectReaction}
        />
      )}
    </View>
  );
};

export default LikeCommentShareCom;
