import * as React from 'react';
import { View, Text, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function NewsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style='auto' />
      <Text onPress={() => Alert.alert("You pressed the news button!")}
        style={{ fontSize: 26, fontWeight: 'bold'}}> Settings Screen
      </Text>
    </View>
	);
}