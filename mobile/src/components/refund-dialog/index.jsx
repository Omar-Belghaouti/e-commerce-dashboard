import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Button } from "../button";
import React from "react";
import { RefundDialogStyles } from "./styles";

export const RefundDialog = ({ visible, onClose }) => {
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
          <TextInput style={RefundDialogStyles.input} keyboardType="numeric" />
          <Button title={"Submit"} onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};
