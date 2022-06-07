import {} from "./functions";

import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeStyles } from "./styles";
import { addPaymentsAction } from "../../../redux/actions/payment/add-payments";

export const HomeScreen = () => {
  const { payments, refreshing } = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    dispatch(addPaymentsAction());
  }, []);
  useEffect(() => {
    const total = payments.length
      ? payments.reduce((pre, { montant }) => {
          return pre + montant;
        }, 0)
      : 0;
    setSum(total);
  }, [payments]);

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.center}>
        {refreshing ? (
          <ActivityIndicator />
        ) : (
          <View style={HomeStyles.row}>
            <View style={HomeStyles.column}>
              <Text style={HomeStyles.title}>SOMME DES PAYMENTS</Text>
              <Text>{sum.toFixed(2)} €</Text>
            </View>
            <View style={HomeStyles.column}>
              <Text style={HomeStyles.title}>NOMBRE DE PAIMENT</Text>
              <Text>{payments.length}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
