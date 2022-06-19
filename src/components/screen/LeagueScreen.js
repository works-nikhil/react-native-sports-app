import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Button,
  Linking,
} from "react-native";
// import { Button, SafeAreaView } from "react-native-web";

export default function LeagueScreen(props) {
  console.log(props);
  // const [data, setData] = useState(props.route.params.item.strLeague);
  const [info, setInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  // const navigator = useNavigation();

  const urlAPI =
    "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=" +
    props.route.params.item.strLeague;

  useEffect(() => {
    axios
      .get(urlAPI)
      .then(({ data }) => {
        console.log(data);
        setInfo(data.teams);
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
          data={info}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={{ display: "flex", borderWidth: "2px" }}>
                  <Text style={{ fontWeight: "bold" }}>{item.strTeam}</Text>
                  <Image
                    style={styles.styleImage}
                    source={{ uri: item.strTeamLogo }}
                  />
                  <Text>{item.strDescriptionEN}</Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      title="Facebook"
                      onPress={() => {
                        Linking.openURL(
                          "https://" + item.strFacebook.toString()
                        );
                      }}
                    />

                    <Button
                      title="Instagram"
                      onPress={() => {
                        Linking.openURL(
                          "https://" + item.strInstagram.toString()
                        );
                      }}
                    />
                    <Button
                      title="Twitter"
                      onPress={() => {
                        Linking.openURL(
                          "https://" + item.strTwitter.toString()
                        );
                      }}
                    />
                    <Button
                      title="Website"
                      onPress={() => {
                        Linking.openURL(
                          "https://" + item.strWebsite.toString()
                        );
                      }}
                    />
                  </View>
                </View>
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
    width: 100,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
  },
  styleContainer: {
    display: "flex",
    flexDirection: "row",
    borderColor: "black",
    padding: "5%",
    borderWidth: "2px",
  },
});
