import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function NextPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const urlAPI = 'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php';

export default function LeaguesList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigator = useNavigation();

  useEffect(() => {
    axios
      .get(urlAPI)
      .then(({ data }) => {
        setData(data.leagues);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ height: '100%', width: '100%' }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{ paddingHorizontal: '15%', display: 'flex' }}
          data={data}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigator.navigate('LeagueScreen', { item });
                    }}
                  >
                    <View style={styles.styleView}>
                      <Text style={[styles.styleText, styles.styleTitle]}>{item.strLeague}</Text>
                      <Text style={[styles.styleText, styles.styleAlt]}>
                        {item.strLeagueAlternate}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
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
    paddingLeft: 2,
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontSize: 12,
    alignSelf: 'center'
  },
  styleTitle: {
    fontWeight: 'bold'
  },
  styleAlt: {
    fontStyle: 'italic'
  },
  styleView: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    padding: '5%',
    borderWidth: '2px'
  }
});
