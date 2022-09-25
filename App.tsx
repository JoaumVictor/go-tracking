import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Routes from "~/routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SessionProvider } from "./src/provider/index";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <SessionProvider>
          <StatusBar backgroundColor="#1D1C83" />
          <Routes />
        </SessionProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
