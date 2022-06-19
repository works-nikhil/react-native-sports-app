import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SportsScreen(props) {
  console.log(props.route.params.item);

  const [data, setData] = useState(props.route.params.item);
  return (
    <View style={{ width: '100%', height: '100%', alignSelf: 'center' }}>
      <Image source={{ uri: data.strSportThumb }} style={{ height: '20%', margin: 20 }} />
      <Text style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 20 }}>{data.strSport}</Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontStyle: 'italic',
          paddingLeft: 20,
          paddingTop: 10,
          paddingRight: 20
        }}
      >
        {data.strSportDescription}
      </Text>
    </View>
  );
}
