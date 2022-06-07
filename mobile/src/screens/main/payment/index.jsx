import {} from "./functions";

import { FlatList, Text, View } from "react-native";

import { PaymentStyles } from "./styles";
import React from "react";
import { payments } from "../../../mock/payments";

export const PaymentScreen = () => {
  return (
    <View style={PaymentStyles.container}>
      <View style={PaymentStyles.row}>
        <Text style={PaymentStyles.title}>DATE DU PAIMENT</Text>
        <Text style={PaymentStyles.title}>MONTANT</Text>
      </View>
      <FlatList
        data={payments}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={PaymentStyles.row}>
            <Text>{new Date(item.createdAt).toDateString()}</Text>
            <Text>{item.montant} €</Text>
          </View>
        )}
      />
    </View>
  );
};
