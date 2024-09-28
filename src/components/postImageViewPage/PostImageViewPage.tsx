import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import AnimatedText from "../global/AnitedText";
import { Colors } from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const PostImageViewPage = (props: any) => {
  const items = props?.route?.params; // Assuming 'items' is an array of posts
  const navigation = useNavigation();
  const [visibleData, setVisibleData] = useState(true);
  const { top } = useSafeAreaInsets();

  const translateX = useSharedValue(0);
  const imageSize = useSharedValue(30);
  const imageRadiusTop = useSharedValue(200);
  const imageRadiusRight = useSharedValue(200);
  const imageRadiusBottom = useSharedValue(200);
  const imageRadiusToLeft = useSharedValue(20);

  // this is a custom animated component
  const CustomTouchable = useMemo(() => {
    return Animated.createAnimatedComponent(TouchableOpacity);
  }, []);
  const CustomImageBackground =
    Animated.createAnimatedComponent(ImageBackground);

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

    if (translationX > 100) {
      navigation.goBack();
    }
  }, []);

  const handleGesture = useCallback((event: any) => {
    const { translationX } = event.nativeEvent;
    translateX.value = translationX; // Update translateX value
  }, []);

  useEffect(() => {
    imageSize.value = withTiming(Dimensions.get("window").width, {
      duration: 1000,
    });
    imageRadiusTop.value = withTiming(0, { duration: 1000 });
    imageRadiusRight.value = withTiming(0, { duration: 1000 });
    imageRadiusBottom.value = withTiming(0, { duration: 1000 });
    imageRadiusToLeft.value = withTiming(0, { duration: 1000 });
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      width: imageSize.value, // Animate width
      height: imageSize.value, // Animate height
      borderBottomRightRadius: imageRadiusTop.value, // Animate radius
      borderTopRightRadius: imageRadiusRight.value, // Animate radius
      borderBottomLeftRadius: imageRadiusBottom.value, // Animate radius
      borderTopLeftRadius: imageRadiusToLeft.value, // Animate radius
      transform: [{ scale: 1 }],
    };
  });
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
            <Animated.View style={[styles.image]}>
              <Animated.Image
                style={[animatedImageStyle]}
                source={{ uri: items?.profile }}
                sharedTransitionTag={`${items?.id}`}
                resizeMode={"cover"}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
        {/* Additional post info (text) */}
        {visibleData && (
          <LinearGradient
            colors={["rgba(0,0,0,.2)", "rgba(156,0,128,.2)"]}
            style={styles.textContainer}
          >
            <Text style={styles.aboutText}>{items?.about}</Text>
          </LinearGradient>
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
  image: {
    width: "100%",
    height: 350,
  },
  textContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  aboutText: {
    color: "#000",
    flex: 1,
  },
});

export default PostImageViewPage;
