// import { View, Text, TouchableOpacity, Image } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
// import { MaterialIcons } from "expo-vector-icons";
// import Animated from "react-native-reanimated";

// const PostImageViewPage = (props: any) => {
//   const item = props?.route?.params;
//   const navigation = useNavigation();
//   const [visibleData, setVisibleData] = useState(false);

//   const click = () => {
//     setVisibleData(!visibleData);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TouchableOpacity
//         onPress={() => click()}
//         activeOpacity={1}
//         style={{ flex: 1, backgroundColor: "#fff" }}
//       >
//         {visibleData === true && (
//           <View
//             style={{
//               height: 50,
//               backgroundColor: "#fff",
//               flexDirection: "row",
//               paddingHorizontal: 20,
//               alignItems: "center",
//               width: "100%",
//               position: "absolute",
//               top: 0,
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.goBack();
//               }}
//             >
//               <MaterialIcons name="arrow-back" size={24} color="black" />
//             </TouchableOpacity>
//           </View>
//         )}
//         <View
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Animated.Image
//             sharedTransitionTag={`${item?.id}`}
//             style={{ width: "100%", height: 400 }}
//             source={{ uri: item?.profile }}
//           />
//         </View>
//         {visibleData === true && (
//           <View style={{ width: "90%", alignSelf: "center" }}>
//             <Text style={{ color: "#000", position: "absolute", bottom: 20 }}>
//               {item?.about}
//             </Text>
//           </View>
//         )}
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default PostImageViewPage;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "expo-vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const PostImageViewPage = (props: any) => {
  const items = props?.route?.params; // Assuming 'items' is an array of posts
  const navigation = useNavigation();
  const [visibleData, setVisibleData] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(0); // Post index state

  const click = () => {
    setVisibleData(!visibleData); // Toggle data visibility
  };

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Animated style for smooth transitions
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value, translateY: translateY.value }],
  }));
  const bgOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [-200, 0, 200], // Input range of translation values
      [0.5, 1, 0.5] // Corresponding opacity range
    );
    return {
      opacity: opacity,
    };
  });

  // Handle swipe gesture completion (to go back when swiped right)
  const handleSwipe = (event: any) => {
    const { translationX, translationY } = event.nativeEvent;

    if (translationX > 50 || translationY > 50) {
      // Swipe right -> navigate back
      navigation.goBack();
    } else {
      // Snap back if swipe is insufficient
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    }
  };

  // Handle gesture movement
  const handleGesture = (event: any) => {
    const { translationX, translationY } = event.nativeEvent;
    translateX.value = translationX; // Update translateX value
    translateY.value = translationY; // Update translateY value
  };

  const CustomTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <Animated.View style={[{ flex: 1, backgroundColor: "red" }, bgOpacity]}>
      <CustomTouchable
        onPress={() => click()}
        activeOpacity={1}
        style={[{ flex: 1, backgroundColor: "#fff" }]}
      >
        {/* Top bar with back button */}
        {visibleData && (
          <View
            style={{
              height: 50,
              backgroundColor: "#fff",
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
              width: "100%",
              position: "absolute",
              top: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}

        {/* Image swipe handler */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PanGestureHandler
            onGestureEvent={handleGesture}
            onEnded={handleSwipe} // Handles swipe release
          >
            <Animated.View style={[{ width: "100%" }, animatedStyle]}>
              <Animated.Image
                style={{ width: "100%", height: 400 }}
                source={{ uri: items?.profile }} // Updated image key
              />
            </Animated.View>
          </PanGestureHandler>
        </View>

        {/* Additional post info (text) */}
        {visibleData && (
          <View style={{ width: "90%", alignSelf: "center" }}>
            <Text style={{ color: "#000", position: "absolute", bottom: 20 }}>
              {items?.about} {/* Display about text */}
            </Text>
          </View>
        )}
      </CustomTouchable>
    </Animated.View>
  );
};

export default PostImageViewPage;
