import { FlatList, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import React from "react";
import HeaderStatus from "~/components/HeaderStatus";
import { SessionContext } from "~/provider";

type itemT = {
  id: string;
  latitude?: number;
  longitude?: number;
  speed?: number;
  time?: string;
};

export default function Status() {
  const { locationData } = useContext(SessionContext);

  const RenderCard = (item: itemT) => {
    return (
      <View style={styles.card}>
        <Text>Pacote ID: {item.id}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderStatus />
      <View style={styles.cardsBox}>
        <FlatList
          data={locationData}
          renderItem={({ item }) => <RenderCard id={item.id} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  cardsBox: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    paddingTop: 20,
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  card: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 1,
    width: "100%",
  },
});
