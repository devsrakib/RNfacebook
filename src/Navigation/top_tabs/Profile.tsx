import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Appearance,
  StyleSheet,
} from "react-native";
import React, {
  FunctionComponent,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Dots, UserInProfile } from "../../../allSVG/AllSvg";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import ProfileModal from "../../components/Profile/ProfileModal";

const Profile = (props: any): ReactElement => {
  const navigation: any = useNavigation();
  const item = props?.route?.params;
  console.log(JSON.stringify(item, null, 2));
  // const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setModalVisible(!modalVisible);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleCon}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.title}>{item?.name}</Text>
          </TouchableOpacity>
          <UserInProfile />
        </View>
        <TouchableOpacity activeOpacity={0.9} style={styles.coverImageCon}>
          <Image
            resizeMode="stretch"
            style={styles.coverImage}
            source={{ uri: item?.picture }}
          />
          <TouchableOpacity
            onPress={() => toggleModal()}
            activeOpacity={0.8}
            style={styles.toggleModal}
          >
            <Image
              style={{
                width: "98%",
                height: "98%",
                borderRadius: 100,
              }}
              source={{ uri: item?.profile }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.desc}>
          <Text style={styles.profileName}>{item?.name}</Text>
          <Text style={{ color: "#000", marginTop: 20 }}>
            Life is full of error
          </Text>

          <View style={styles.storyButtonCon}>
            <TouchableOpacity style={styles.storyButton}>
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Add to Story
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.storyButton, { backgroundColor: "#797979" }]}
            >
              <Text style={{ color: "#fff" }}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.threeDot}>
              <Dots />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ProfileModal
        setModalVisible={setModalVisible}
        toggleModal={toggleModal}
        modalVisible={modalVisible}
      />
    </View>
  );
};

export default memo(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleCon: {
    backgroundColor: "#fff",
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    // color: theme === "light" ? "#242526" : "#ffffff",
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
  },
  coverImageCon: {
    width: "100%",
    height: 250,
    backgroundColor: "#000",
  },
  coverImage: { width: "100%", height: "100%", position: "relative" },
  toggleModal: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: "absolute",
    left: 10,
    bottom: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
  },
  desc: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: 200,
    marginBottom: 10,
  },
  profileName: {
    // color: theme === "light" ? "#242526" : "#ffffff",
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
    zIndex: 0,
  },
  storyButtonCon: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  storyButton: {
    flex: 2,
    height: 35,
    borderRadius: 6,
    backgroundColor: "#0E88C9",
    justifyContent: "center",
    alignItems: "center",
  },
  threeDot: {
    flex: 1,
    height: 35,
    borderRadius: 6,
    backgroundColor: "#797979",
    justifyContent: "center",
    alignItems: "center",
  },
});
