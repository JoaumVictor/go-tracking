// import axios from "axios";
import { Alert } from "react-native";

// const apiURL = "http://localhost:8081/points/1";

type dataT = {
  id: string;
  latitude: number;
  longitude: number;
  speed: number;
  time: string;
};

const postLatitude = (data: dataT) => {
  try {
    // axios.post(apiURL, data);
    console.log(data);
  } catch (error) {
    Alert.alert("Algo deu errado", "Tente novamente mais tarde");
  }
};

export default postLatitude;
