import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FunctionComponent, ReactElement } from "react";



const UserProfile = (props: any): ReactElement => {
  const item = props?.route?.params;
  console.log(item);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 300,
        }}
      >
        <Image
          resizeMode="stretch"
          style={{ width: "100%", height: "100%" }}
          source={{ uri: item?.picture }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          position: "absolute",
          left: 10,
          top: 200,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: item?.profile }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
