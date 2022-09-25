import {
  Image,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import * as Location from "expo-location";
import uuid from "react-native-uuid";

import { SessionContext } from "./../provider";
import postLatitude from "./../services/api";
import icon from "../../assets/gpsIcon.png";

export default function DashboardPanel() {
  const { serviceStatus, setServiceStatus, locationData, setLocationData } =
    useContext(SessionContext);
  const [myCoord, setMyCoord] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [timer, setTimer] = useState(10000);

  const requestLocation = () => {
    setServiceStatus(!serviceStatus),
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setMyCoord({
          id: String(uuid.v4()),
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          speed: Number(location.coords.speed),
          time: String(new Date().toLocaleDateString()),
        });
      })();
  };

  const checkStyle = (num: number) =>
    timer === num ? styles.timerButton : styles.timerButtonOff;

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (serviceStatus) {
        postLatitude(myCoord as any);
        const newData = [...locationData];
        newData.push(myCoord);
        setLocationData(newData);
      }
    }, timer);
    return () => clearInterval(myInterval);
  }, [serviceStatus, timer]);

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.title}>My GPS - GoTracking</Text>
          <Text style={serviceStatus ? styles.on : styles.off}>
            {serviceStatus ? "Online" : "Offline"}
          </Text>
        </View>
      </View>
      <Text>{errorMsg}</Text>
      <View style={styles.middleBox}>
        <View>
          <Text>Status do Serviço</Text>
          <Text style={styles.subtitle}>
            {serviceStatus ? "Serviço Ativo" : "Serviço Inativo"}
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#E4E4EB", true: "#E4E4EB" }}
          thumbColor={serviceStatus ? "#0FBC02" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={requestLocation}
          value={serviceStatus}
        />
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={checkStyle(10000)}
          onPress={() => setTimer(10000)}
        >
          <Text style={styles.textButtonTimer}>10s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={checkStyle(5000)}
          onPress={() => setTimer(5000)}
        >
          <Text style={styles.textButtonTimer}>5s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={checkStyle(3000)}
          onPress={() => setTimer(3000)}
        >
          <Text style={styles.textButtonTimer}>3s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={checkStyle(1000)}
          onPress={() => setTimer(1000)}
        >
          <Text style={styles.textButtonTimer}>1s</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "#F9F8FF",
    height: "90%",
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  topBox: {
    alignItems: "center",
    marginTop: 40,
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
  },
  subtitle: {
    marginTop: 5,
    color: "gray",
  },
  middleBox: {
    alignItems: "center",
    marginTop: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  bottomBox: {
    alignItems: "center",
    marginTop: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  on: {
    color: "#0FBC02",
  },
  off: {
    color: "#F00",
  },
  timerButton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#0FBC02",
    backgroundColor: "#ceffca",
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  timerButtonOff: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#c4c2c2",
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  textButtonTimer: {
    color: "#414141",
    fontSize: 18,
  },
});
