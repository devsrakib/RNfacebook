import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import * as DropdownMenu from "zeego/dropdown-menu";

const ReactionPopupModal = ({ isReaction, setIsReaction }) => {
  return (
    <Modal
      animationType="fade"
      // transparent={true}
      visible={isReaction}
      onBackdropPress={() => setIsReaction(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.reactionContainer}>
          {/* Reaction Icons */}
          <TouchableOpacity style={styles.reactionItem}>
            <Text style={styles.emoji}>❤️</Text>
            <Text style={styles.reactionText}>Love</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionItem}>
            <Text style={styles.emoji}>😆</Text>
            <Text style={styles.reactionText}>Haha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionItem}>
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.reactionText}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionItem}>
            <Text style={styles.emoji}>😡</Text>
            <Text style={styles.reactionText}>Angry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionItem}>
            <Text style={styles.emoji}>😮</Text>
            <Text style={styles.reactionText}>Wow</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsReaction(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    // <DropdownMenu.Root>
    //   <DropdownMenu.Trigger>
    //     <Button title="hello" />
    //   </DropdownMenu.Trigger>

    //   <DropdownMenu.Content>
    //     <DropdownMenu.Label />
    //     <DropdownMenu.Item>
    //       <DropdownMenu.ItemTitle />
    //     </DropdownMenu.Item>

    //     <DropdownMenu.Group>
    //       <DropdownMenu.Item />
    //     </DropdownMenu.Group>

    //     <DropdownMenu.CheckboxItem>
    //       <DropdownMenu.ItemIndicator />
    //     </DropdownMenu.CheckboxItem>

    //     <DropdownMenu.Sub>
    //       <DropdownMenu.SubTrigger />
    //       <DropdownMenu.SubContent />
    //     </DropdownMenu.Sub>

    //     <DropdownMenu.Separator />
    //     <DropdownMenu.Arrow />
    //   </DropdownMenu.Content>
    // </DropdownMenu.Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  reactionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4267B2", // Facebook-like blue color
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  reactionContainer: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  reactionItem: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 30,
  },
  reactionText: {
    marginTop: 5,
    fontSize: 12,
    color: "#555",
  },
  closeButton: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginTop: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#333",
    fontSize: 16,
  },
});

export default ReactionPopupModal;
