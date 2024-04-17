import * as React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InfoItem from '../InfoItem';

export default function AboutUsScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style='auto' />
			<InfoItem description={"A Brief History of the Confederated Tribes of the Colville Reservation"} image={"native-horses.png"}/>
      <InfoItem description={"Colville Cultural Information"} image={"flo-dell.png"}/>
      <Text style={styles.text}>Visitors Guide</Text>
      <InfoItem description={"Colville Public Accessible Landmark Information"} image={"colville-hike.png"}/>
      <InfoItem description={"Map of the Colville Reservation"}image={"colville-map.png"}/>
      <InfoItem description={"Tourism and Information"} image={"coulee-dam.png"}/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center', 
		justifyContent: 'center',
		padding: 10
	}, 
	text: {
    fontSize: 26, 
    paddingTop: 10,
    fontWeight: 'bold', 
    color: 'rgba(5, 16, 101, 1)',
  }
});