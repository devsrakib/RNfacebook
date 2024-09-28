import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "expo-vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const PostImageViewPage = (props: any) => {
  const items = props?.route?.params; // Assuming 'items' is an array of posts
  const navigation = useNavigation();
  const [visibleData, setVisibleData] = useState(true);

  const translateX = useSharedValue(0);

  // Animated style for smooth transitions
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
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

  // Handle swipe gesture completion
  const handleSwipe = useCallback((event: any) => {
    const { translationX } = event.nativeEvent;

    if (translationX > 100 || translationX <= -100) {
      navigation.goBack();
    }
  }, []);

  const handleGesture = useCallback((event: any) => {
    const { translationX } = event.nativeEvent;
    translateX.value = translationX; // Update translateX value
  }, []);

  const CustomTouchable = useMemo(() => {
    return Animated.createAnimatedComponent(TouchableOpacity);
  }, []);

  const { top } = useSafeAreaInsets();

  return (
    <Animated.View style={[styles.container, { paddingTop: top }, bgOpacity]}>
      <CustomTouchable
        onPress={() => setVisibleData(!visibleData)}
        activeOpacity={1}
        style={styles.touchable}
      >
        {/* Top bar with back button */}
        {visibleData && (
          <View style={styles.topBar}>
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
        <View style={styles.imageContainer}>
          <PanGestureHandler
            onGestureEvent={handleGesture}
            onEnded={handleSwipe}
          >
            <Animated.View style={[styles.animatedImageView, animatedStyle]}>
              <Animated.Image
                style={styles.image}
                source={{ uri: items?.profile }}
                sharedTransitionTag={`${items?.id}`}
                resizeMode={"cover"}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>

        {/* Additional post info (text) */}
        {visibleData && (
          <View style={styles.textContainer}>
            <Text style={styles.aboutText}>{items?.about}</Text>
          </View>
        )}
      </CustomTouchable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animatedImageView: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 350,
  },
  textContainer: {
    width: "90%",
    alignSelf: "center",
  },
  aboutText: {
    color: "#000",
    position: "absolute",
    bottom: 20,
  },
});

export default PostImageViewPage;
