import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserProfile from "../../components/Profile/UserProfile";
import PostImageViewPage from "../../components/postImageViewPage/PostImageViewPage";
import ViewStore from "../../components/storyItem/StoryViewPage/ViewStore";
import Index from "../../screen/Index";
import Post from "../../pages/Post";

export type RootStackParamsList = {
  Index: undefined;
  UserProfile: IRandomUser;
  PostImageViewPage: undefined;
  ViewStore: undefined;
  post: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Index"
        component={Index}
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
        options={{
          headerShown: false,
          // presentation: "formSheet",
          // gestureEnabled: true,
          animation: "slide_from_bottom",
        }}
        name="ViewStore"
        component={ViewStore}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "modal",
          gestureEnabled: true,
          animation: "slide_from_bottom",
        }}
        name="post"
        component={Post}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
