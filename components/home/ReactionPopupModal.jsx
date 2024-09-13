import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Icons for main button

const ReactionPopupModal = ({ isReaction, setIsReaction }) => {
  return (
    <View style={styles.container}>
      {/* Trigger Button */}
      {/* Modal Popup for Reactions */}
      <Modal
        animationType="fade"
        // transparent={true}
        visible={isReaction}
        onRequestClose={() => setIsReaction(false)}
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
    </View>
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
