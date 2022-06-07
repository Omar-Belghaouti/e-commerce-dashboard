import { Alert } from "react-native";

export const addRefund = async (amount, id) => {
  if (isNaN(amount)) {
    Alert.alert("Error", "Please provide a valid input for the amount");
    return;
  }
  const res = await fetch(`http://localhost:3000/payments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: +amount }),
  });
  const resJson = await res.json();
  if (res.status === 404) {
    Alert.alert("Error", resJson.message);
    return;
  } else if (res.status === 403) {
    Alert.alert("Error", resJson.message);
  } else if (res.status === 200) {
    Alert.alert("Success", resJson.message);
  } else {
    Alert.alert("Error", "Something wrong happened!");
  }
};
