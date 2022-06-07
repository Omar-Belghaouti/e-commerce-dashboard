import { Navigation as Auth } from "./auth/navigation";
import { Navigation as Main } from "./main/navigation";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export const Navigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="main"
    >
      <Screen name="auth" component={Auth} />
      <Screen name="main" component={Main} />
    </Navigator>
  );
};
