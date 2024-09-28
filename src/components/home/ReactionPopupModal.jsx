import { AntDesign, Entypo, MaterialIcons } from "expo-vector-icons";
import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import Modal from "react-native-modal";
import { Colors } from "../../constants/Colors";
import { Radius } from "../../constants/Radius";

const reactions = [
  { label: "Like", emoji: <AntDesign name="like2" size={24} color="black" /> },
  {
    label: "Love",
    emoji: <MaterialIcons name="favorite" size={24} color="black" />,
  },
  {
    label: "Haha",
    emoji: <MaterialIcons name="emoji-emotions" size={24} color="black" />,
  },
  {
    label: "Wow",
    emoji: <Entypo name="emoji-neutral" size={24} color="black" />,
  },
  { label: "Sad", emoji: <Entypo name="emoji-sad" size={24} color="black" /> },
  {
    label: "Angry",
    emoji: <Entypo name="emoji-neutral" size={24} color="black" />,
  },
];

const ReactionModal = ({ visible, onClose, onSelect }) => {
  return (
    // <Modal
    //   visible={visible}
    //   onBackdropPress={() => onClose()}
    //   backdropOpacity={0.0}
    // >
    <Animated.View entering={FadeInDown} style={styles.modalContainer}>
      {reactions?.map((reaction) => (
        <TouchableOpacity
          key={reaction.label}
          style={styles.reactionButton}
          onPress={() => {
            onSelect(reaction.label);
            onClose();
          }}
        >
          {reaction?.emoji}
        </TouchableOpacity>
      ))}
    </Animated.View>
    // </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: Radius.circle,
    elevation: 5,
    backdropColor: Colors.white,
    position: "absolute",
    bottom: 80,
  },
  reactionButton: {
    marginHorizontal: 10,
  },
  reactionImage: {
    width: 50,
    height: 50,
  },
});

export default ReactionModal;
