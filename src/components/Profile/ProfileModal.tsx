import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";

const ProfileModal = ({
  setModalVisible,
  toggleModal,
  modalVisible,
}: {
  setModalVisible: Function;
  toggleModal: () => void;
  modalVisible: boolean;
}) => {
  return (
    <Modal
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      swipeDirection="down"
      onSwipeComplete={() => toggleModal()}
      animationInTiming={500}
      style={{ justifyContent: "flex-end", margin: 0 }}
      animationOutTiming={500}
      isVisible={modalVisible}
      backdropOpacity={0.4}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          minHeight: 450,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            height: 5,
            width: 50,
            marginTop: 10,
            alignSelf: "center",
            backgroundColor: "#797979",
            marginBottom: 20,
          }}
        ></View>
      </View>
    </Modal>
  );
};

export default ProfileModal;
