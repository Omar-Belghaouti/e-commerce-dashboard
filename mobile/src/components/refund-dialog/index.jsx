import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";

import { Button } from "../button";
import { RefundDialogStyles } from "./styles";

export const RefundDialog = ({
  selectedPayment,
  visible,
  onClose,
  onSubmit,
}) => {
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState("0");
  useEffect(() => {
    const total =
      selectedPayment != null
        ? selectedPayment.refunds.reduce((pre, curr) => pre + curr, 0)
        : 0;
    setTotal(total);
  }, [selectedPayment]);

  const clearInput = useCallback(() => {
    setTotal(0);
    setAmount("0");
  }, []);

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={RefundDialogStyles.center}>
        <View style={RefundDialogStyles.modal}>
          <View style={RefundDialogStyles.row}>
            <Text style={RefundDialogStyles.title}>
              Quel montant voulez vous rembourser?
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={RefundDialogStyles.closeButtonContainer}
            >
              <Text style={RefundDialogStyles.x}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder={total.toString()}
            style={RefundDialogStyles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          <Button
            title={"Submit"}
            onPress={() => {
              onSubmit(amount);
              clearInput();
              onClose();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
