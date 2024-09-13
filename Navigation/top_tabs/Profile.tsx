import { View, Text, TouchableOpacity, Image, Appearance } from "react-native";
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Dots, UserInProfile } from "../../allSVG/AllSvg";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const Profile = (props: any): ReactElement => {
  const navigation: any = useNavigation();
  const item = props?.route?.params;
  console.log(JSON.stringify(item, null, 2));
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#242526",
            height: 50,
            justifyContent: "space-between",
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                // color: theme === "light" ? "#242526" : "#ffffff",
                color: "#fff",
                fontSize: 24,
                fontWeight: "700",
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
          <UserInProfile />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            width: "100%",
            height: 250,
            backgroundColor: "#242526",
          }}
        >
          <Image
            resizeMode="stretch"
            style={{ width: "100%", height: "90%", position: "relative" }}
            source={{ uri: item?.picture }}
          />
          <TouchableOpacity
            onPress={() => toggleModal()}
            activeOpacity={0.8}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: "absolute",
              left: 10,
              bottom: 10,
              backgroundColor: "#000",
              justifyContent: "center",
              alignItems: "center",
            }}
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
        <View
          style={{
            paddingHorizontal: 10,
            backgroundColor: "#242526",
            height: 200,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              // color: theme === "light" ? "#242526" : "#ffffff",
              color: "#fff",
              fontSize: 24,
              fontWeight: "700",
              zIndex: 0,
            }}
          >
            {item?.name}
          </Text>
          <Text style={{ color: "#fff", marginTop: 20 }}>
            Life is full of error
          </Text>

          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              height: 100,
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 2,
                height: 35,
                borderRadius: 6,
                backgroundColor: "#0E88C9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Add to Story
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 2,
                height: 35,
                borderRadius: 6,
                backgroundColor: "#797979",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 35,
                borderRadius: 6,
                backgroundColor: "#797979",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Dots />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: "#242526", height: 400 }}></View>
      </ScrollView>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        style={{ justifyContent: "flex-end", margin: 0 }}
        animationOutTiming={500}
        isVisible={modalVisible}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={300}
      >
        <View
          style={{
            backgroundColor: "#242526",
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
    </View>
  );
};

export default Profile;
