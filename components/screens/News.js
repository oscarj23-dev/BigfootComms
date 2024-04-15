import * as React from 'react';
import { View, Text, Alert, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function NewsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.text}> Recent News</Text>
      <InfoItem description={"A Brief History of the Confederated Tribes of the Colville Reservation"}/>
      <InfoItem description={"Colville Cultural Information"}/>
      <Text style={styles.text}> Past Events</Text>
      <InfoItem description={"Winter Pow wow"}/>
      <InfoItem description={"Food Drive on 5th"}/>
    </ScrollView>
	);
}

const styles = StyleSheet.create({
	container : {
		justifyContent: 'center',
    padding: 20
	},
  text: {
    fontSize: 26, 
    padding: 5,
    fontWeight: 'bold', 
    color: 'rgba(5, 16, 101, 1)',
    alignContent: 'flex-start'
  }
})