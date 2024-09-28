// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";

// const AnimatedText = ({ text }: any) => {
//   const sharedValue = useSharedValue(0); // Shared value

//   // Use useAnimatedStyle to read sharedValue in the UI runtime
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ scale: withTiming(sharedValue.value) }],
//     };
//   });

//   // Start animation
//   sharedValue.value = 1;

//   return (
//     <Animated.View style={[styles.textContainer]}>
//       <Animated.Text style={[styles.text, animatedStyle]}>{text}</Animated.Text>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   textContainer: {
//     width: 200,
//     height: 200,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//   },
//   text: {
//     fontSize: 20,
//     color: "#000",
//   },
// });

// export default AnimatedText;

import React, { useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const AnimatedText = ({ text }) => {
  const letterAnimations = text.split("").map(() => useSharedValue(0)); // Create shared values for each letter

  // Animate each letter after a delay
  useEffect(() => {
    letterAnimations.forEach((animation, index) => {
      setTimeout(() => {
        animation.value = withTiming(1, { duration: 500 });
      }, index * 100); // Delay based on the index
    });
  }, []);

  // Move `useAnimatedStyle` outside of the renderItem
  const renderItem = ({ item, index }) => {
    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: letterAnimations[index].value,
        transform: [{ scale: letterAnimations[index].value }],
        color: `rgb(${Math.floor(255 * letterAnimations[index].value)}, 0, 0)`, // Change color
      };
    });

    return (
      <Animated.Text style={[styles.letter, animatedStyle]}>
        {item}
      </Animated.Text>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={text.split("")} // Split the text into an array of letters
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        scrollEnabled={false} // Disable scrolling
      />
    </View>
  );
};

export default AnimatedText;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
  },
  letter: {
    fontSize: 30,
    margin: 2,
  },
});
