import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { statusBarHeight } from "~/utils";
import { useNavigation } from "@react-navigation/native";
import { propsPublicStack } from "~/routes/@types";

export default function HeaderStatus() {
  const navigation = useNavigation<propsPublicStack>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1C83",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: statusBarHeight,
    paddingLeft: "5%",
    paddingRight: "45%",
    flexDirection: "row",
    height: "10%",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
