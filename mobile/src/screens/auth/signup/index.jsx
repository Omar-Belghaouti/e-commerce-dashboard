import {} from "./functions";

import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { Button } from "../../../components/button";
import { SignupStyles } from "./styles";

export const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={SignupStyles.container}>
      <View style={SignupStyles.center}>
        <Text>Username</Text>
        <TextInput
          style={SignupStyles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text>Password</Text>
        <TextInput
          style={SignupStyles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title={"Signup"} onPress={() => {}} />
      </View>
    </View>
  );
};
