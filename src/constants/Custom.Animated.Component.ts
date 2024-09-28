import { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

const CustomTouchable = () => {
  useMemo(() => {
    return Animated.createAnimatedComponent(TouchableOpacity);
  }, []);
};

export default CustomTouchable;
