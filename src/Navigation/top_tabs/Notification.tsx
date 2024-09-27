import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Header from "../../components/notification/Header";
import NotificationCart from "../../components/notification/NotificationCart";
import { Fonts } from "../../constants/Fonts";

const Notification = () => {
  const DATA = [
    {
      title: "New",
      data: [
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
      ],
    },
    {
      title: "Earlier",
      data: [
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
      ],
    },
    {
      title: "Old",
      data: [
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
        {
          image: require("../../../assets/shahin.jpeg"),
          name: "Rakibul islam",
          time: new Date().toLocaleDateString(),
          desc: "askdfj;aksdjfiejewlekjfisdjflekfjladskfjiejlasdkfjiejflsdkf",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {/* header */}

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index?.toString()}
        renderItem={({ item }) => <NotificationCart item={item} />}
        ListHeaderComponent={<Header />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  item: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#f9f9f9",
  },
  header: {
    padding: 10,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: Fonts.large,
  },
});
