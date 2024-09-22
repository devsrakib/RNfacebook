import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigation from "./src/Navigation/stackNavigation/StackNavigation";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "./model/schema";
import migrations from "./model/migrations";
import { Database } from "@nozbe/watermelondb";

// const adapter = new SQLiteAdapter({
//   schema,
//   // (You might want to comment it out for development purposes -- see Migrations documentation)
//   migrations,
//   // (optional database name or file system path)
//   // dbName: 'myapp',
//   // (recommended option, should work flawlessly out of the box on iOS. On Android,
//   // additional installation steps have to be taken - disable if you run into issues...)
//   jsi: true /* Platform.OS === 'ios' */,
//   // (optional, but you should implement this method)
//   onSetUpError: (error) => {
//     // Database failed to load -- offer the user to reload the app or log out
//   },
// });

// const database = new Database({
//   adapter,
//   modelClasses: [
//     // Post, // ⬅️ You'll add Models to Watermelon here
//   ],
// });

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
