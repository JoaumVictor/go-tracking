import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { statusBarHeight } from "~/utils";
import { useNavigation } from "@react-navigation/native";
import { propsPublicStack } from "~/routes/@types";

export default function Header() {
  const navigation = useNavigation<propsPublicStack>();
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Olá, bem-vindo</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Status")}>
        <Text style={styles.texts}>Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: statusBarHeight,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    backgroundColor: "#1D1C83",
    height: "10%",
    width: "100%",
  },
  texts: {
    color: "#fff",
    fontSize: 16,
  },
});
