import {} from "./functions";

import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { Button } from "../../../components/button";
import { LoginStyles } from "./styles";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.center}>
        <Text>Username</Text>
        <TextInput
          style={LoginStyles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text>Password</Text>
        <TextInput
          style={LoginStyles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title={"Login"} onPress={() => {}} />
      </View>
    </View>
  );
};
