import React from "react";
import { ActivityIndicator, Text, View, StyleSheet, Modal } from "react-native";

export default function Loading({ visible }) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#FF6347" />
          <Text style={styles.text}>{'carregando...'}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 150,
    height: 150,
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  text: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});
