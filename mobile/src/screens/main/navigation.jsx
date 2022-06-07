import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
const { Navigator, Screen } = createDrawerNavigator();

import { HomeScreen } from "./home";
import { PaymentScreen } from "./payment";

export const Navigation = () => {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} />
      <Screen name="payment" component={PaymentScreen} />
    </Navigator>
  );
};
