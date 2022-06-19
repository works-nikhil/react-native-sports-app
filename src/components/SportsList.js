import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const urlAPI = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";

export default function SportsList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigator = useNavigation();

  useEffect(() => {
    axios
      .get(urlAPI)
      .then(({ data }) => {
        setData(data.sports);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{ paddingHorizontal: "15%", display: "flex" }}
          data={data}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.styleContainer}>
                <TouchableOpacity
                  onPress={() => navigator.navigate("SportsScreen", { item })}
                >
                  <View style={{ display: "flex" }}>
                    <Image
                      style={styles.styleImage}
                      source={{ uri: item.strSportThumb }}
                    />
                    <Text style={styles.styleText}>{item.strSport}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  styleText: {
    flex: 1,
    paddingLeft: 30,
    textAlign: "left",
    fontSize: 20,
    alignSelf: "center",
  },
  styleImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginVertical: 10,
  },
  styleContainer: {
    display: "flex",
    flexDirection: "row",
    borderColor: "black",
    padding: "5%",
    borderWidth: "2px",
  },
});
