import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigation from "./Navigation/stackNavigation/StackNavigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation />
        <StatusBar animated={true} backgroundColor="#000" barStyle="#ffffff" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
