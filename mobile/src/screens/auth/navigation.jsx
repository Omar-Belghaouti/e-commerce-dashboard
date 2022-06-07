import { LoginScreen } from "./login";
import React from "react";
import { SignupScreen } from "./signup";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();


export const Navigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login" component={LoginScreen} />
      <Screen name="signup" component={SignupScreen} />
    </Navigator>
  );
};
