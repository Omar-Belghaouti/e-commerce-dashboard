import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PaymentStyles } from "./styles";
import { RefundDialog } from "../../../components/refund-dialog";
import { addPaymentsAction } from "../../../redux/actions/payment/add-payments";
import { addRefund } from "./functions";

export const PaymentScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const { payments, refreshing } = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPaymentsAction());
  }, []);

  return (
    <View style={PaymentStyles.container}>
      <View style={PaymentStyles.row}>
        <Text style={PaymentStyles.title}>DATE DU PAIMENT</Text>
        <Text style={PaymentStyles.title}>MONTANT</Text>
      </View>
      <RefundDialog
        visible={selectedPayment != null}
        selectedPayment={selectedPayment}
        onSubmit={async (amount) => {
          await addRefund(amount, selectedPayment.id);
          dispatch(addPaymentsAction());
        }}
        onClose={() => {
          setSelectedPayment(null);
        }}
      />
      {refreshing ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={payments}
          keyExtractor={(_, i) => i.toString()}
          onRefresh={() => dispatch(addPaymentsAction())}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={PaymentStyles.row}
              onPress={() => {
                setSelectedPayment(item);
              }}
            >
              <Text>{new Date(item.createdAt).toDateString()}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>{item.montant} €</Text>
                {item.refunded ? (
                  <Text style={{ color: "#E23" }}>
                    /{item.refunds.join("€/")}€
                  </Text>
                ) : null}
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
