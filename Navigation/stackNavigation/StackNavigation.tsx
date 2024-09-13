import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screen/home/Home";
import UserProfile from "../../components/Profile/UserProfile";
import PostImageViewPage from "../../components/postImageViewPage/PostImageViewPage";
import ViewStore from "../../components/storyItem/StoryViewPage/ViewStore";

export type RootStackParamsList = {
  Home: undefined;
  UserProfile: IRandomUser;
  PostImageViewPage: undefined;
  ViewStore: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="UserProfile"
        component={UserProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PostImageViewPage"
        component={PostImageViewPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ViewStore"
        component={ViewStore}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
