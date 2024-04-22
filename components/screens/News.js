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
        image={"noti-bell.png"} />
      <InfoItem description={"Colville Reservation Recognized for Excellence in Tribal Education Initiatives"} image={"noti-bell.png"} />
      <Text style={styles.text}> Past Events</Text>
      <InfoItem description={"Colville Cultural Information"}  image={"noti-bell.png"}/>
      <InfoItem description={"Food Drive on 5th"}  image={"noti-bell.png"}/>
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