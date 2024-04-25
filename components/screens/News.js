import * as React from 'react';
import { View, Text, Alert, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function NewsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.text}> Recent News</Text>
      <InfoItem description={"Tribal Council Announces Innovative Environmental Initiative to Preserve Colville Reservation's Natural Beauty"}
        image={"notification-alert.png"} />
      <InfoItem description={"Colville Reservation Recognized for Excellence in Tribal Education Initiatives"} image={"notification-alert.png"} />
      <Text style={styles.text}> Past Events</Text>
      <InfoItem description={"Colville Cultural Information"}  image={"notification-alert.png"}/>
      <InfoItem description={"Food Drive on 5th"}  image={"notification-alert.png"}/>
    </ScrollView>
	);
}

const styles = StyleSheet.create({
	container : {
		justifyContent: 'center',
    padding: 10
	},
  text: {
    fontSize: 26, 
    paddingTop: 10,
    fontWeight: 'bold', 
    color: 'rgba(5, 16, 101, 1)',
    alignContent: 'flex-start'
  }
})