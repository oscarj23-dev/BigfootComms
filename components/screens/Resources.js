import * as React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function ResourcesScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style='auto' />
			<InfoItem description={"Map of the Colville Reservation"} image={"colville-map.png"}/>
      <InfoItem description={"Hunting License Information"} image={"hunting-license-image.png"}/>
      <InfoItem description={"Community Contaacts"} image={"orange-contact.png"}/>
      <InfoItem description={"Application Feedback"} image={"feedback-image.png"}/>
				<Text onPress={() => navigation.navigate('Home')}
					style={styles.text}> More Coming Soon!</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container : {
		alignItems: 'center', 
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
});