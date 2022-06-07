import { HomeScreen } from "./home";
import { PaymentScreen } from "./payment";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Navigator, Screen } = createDrawerNavigator();

export const Navigation = () => {
  return (
    <Navigator initialRouteName="home">
      <Screen name="home" component={HomeScreen} />
      <Screen name="payment" component={PaymentScreen} />
    </Navigator>
  );
};
