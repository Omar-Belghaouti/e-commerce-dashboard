import { Text, TouchableOpacity, View } from "react-native";

import { ButtonStyles } from "./styles";
import React from "react";

export const Button = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        ButtonStyles.container,
        {
          backgroundColor: disabled
            ? "#ccc"
            : ButtonStyles.container.backgroundColor,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={ButtonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
