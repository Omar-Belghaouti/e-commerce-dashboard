import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    color: "#777",
    fontWeight: "bold",
  },
});
