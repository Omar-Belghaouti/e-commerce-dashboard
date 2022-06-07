import "react-native-gesture-handler";

import { Navigation } from "./src/screens/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import { SafeAreaView } from "react-native";
import { mainStore } from "./src/redux";

const App = () => {
  return (
    <Provider store={mainStore}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
