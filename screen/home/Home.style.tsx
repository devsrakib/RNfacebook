import { StyleSheet } from "react-native";

export const HomeComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  logo: {
    fontSize: 26,
    fontWeight: "700",
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 130,
    justifyContent: "space-between",
  },
});
