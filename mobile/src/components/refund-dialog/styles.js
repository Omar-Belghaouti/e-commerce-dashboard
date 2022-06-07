import { StyleSheet } from "react-native";

export const RefundDialogStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  modal: {
    width: "100%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
    width: "90%",
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
  input: {
    width: "90%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  closeButtonContainer: {
    backgroundColor: "#E23",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  x: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});
