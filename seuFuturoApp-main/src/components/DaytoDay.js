import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function DaytoDay({ list }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <View style={styles.iconView}>
          <Entypo name="clock" size={30} color="#7d7d7d" />
        </View>
        <Text style={styles.title}>Dia a Dia da Profissão</Text>
      </View>
      <FlatList
        data={list}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.infoView}>
            <View style={styles.info}>
              <Entypo name="dot-single" size={17} color="#7d7d7d" />
              <Text style={styles.subtitle}>{item}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#a3a3a3",
    paddingTop: 24,
    paddingHorizontal: 5,
    borderRadius: 20,
    paddingBottom:40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 7,
    paddingTop: 9,
  },
  subtitle: {
    color: "#919090",
    fontSize: 14,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 17,
    width: "80%",
    paddingBottom: 15,
  },
  info: {
    flexDirection: "row",
    paddingBottom: 12,
    gap: 10,
  },
  infoView: {
    paddingTop: 10,
    justifyContent: "center",
    width: "80%",
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
