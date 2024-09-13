import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  Text,
  Appearance,
  ColorSchemeName,
  TouchableOpacity,
} from "react-native";
import React, { SetStateAction, useEffect, useReducer, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconArrowLeft } from "@tabler/icons-react";
import { HomeComponentStyle } from "./Home.style";
import { Message, Plus, Search } from "../../allSVG/AllSvg";
import TabContainer from "../../Navigation/mainTab/TabContainer";
import PlusPopupModal from "../../components/home/PlusPopupModal";

const Tab = createMaterialTopTabNavigator();
const Home = () => {
  const [theme, setTheme] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <SafeAreaView
      style={[HomeComponentStyle.container, { backgroundColor: "#000000" }]}
    >
      {/*header in home*/}
      <View
        style={[
          HomeComponentStyle.headerContainer,
          { backgroundColor: "#242526" },
        ]}
      >
        <Text style={[HomeComponentStyle.logo, { color: "#fff" }]}>
          facebook
        </Text>
        <View style={[HomeComponentStyle.headerIconContainer]}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Plus />
          </TouchableOpacity>
          <PlusPopupModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <Search />
          <Message />
        </View>
      </View>
      <TabContainer />
    </SafeAreaView>
  );
};

export default Home;
