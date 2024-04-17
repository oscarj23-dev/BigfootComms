import * as React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InfoItem from '../InfoItem';

export default function AboutUsScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style='auto' />
				<Text style={styles.text}> About Us Screen</Text>
			<InfoItem description={"A Brief History of the Confederated Tribes of the Colville Reservation"}/>
      <InfoItem description={"Colville Cultural Information"}/>
      <Text style={styles.text}>Visitors Guide</Text>
      <InfoItem description={"Colville Public Accessible Landmark Information"}/>
      <InfoItem description={"Map of the Colville Reservation"}/>
      <InfoItem description={"Tourism and Information"}/>
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