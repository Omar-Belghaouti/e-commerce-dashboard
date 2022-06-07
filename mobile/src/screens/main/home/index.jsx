import {} from "./functions";

import { Text, View } from "react-native";

import { HomeStyles } from "./styles";
import React from "react";

export const HomeScreen = () => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.center}>
        <View style={HomeStyles.row}>
          <View style={HomeStyles.column}>
            <Text style={HomeStyles.title}>SOMME DES PAYMENTS</Text>
            <Text>12 234 €</Text>
          </View>
          <View style={HomeStyles.column}>
            <Text style={HomeStyles.title}>NOMBRE DE PAIMENT</Text>
            <Text>12 129</Text>
          </View>
          <View style={HomeStyles.column}>
            <Text style={HomeStyles.title}>TOTAL ENCAISSE</Text>
            <Text>44 €</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
