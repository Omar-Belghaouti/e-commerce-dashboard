import {} from "./functions";

import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { PaymentStyles } from "./styles";
import { RefundDialog } from "../../../components/refund-dialog";
import { payments } from "../../../mock/payments";

export const PaymentScreen = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <View style={PaymentStyles.container}>
      <View style={PaymentStyles.row}>
        <Text style={PaymentStyles.title}>DATE DU PAIMENT</Text>
        <Text style={PaymentStyles.title}>MONTANT</Text>
      </View>
      <RefundDialog
        visible={modalVisibility}
        onClose={() => {
          setModalVisibility(false);
        }}
      />
      <FlatList
        data={payments}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={PaymentStyles.row}
            onPress={() => setModalVisibility(true)}
          >
            <Text>{new Date(item.createdAt).toDateString()}</Text>
            <Text>{item.montant} €</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
