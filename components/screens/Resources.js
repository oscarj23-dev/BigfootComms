import * as React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function ResourcesScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style='auto' />
			<InfoItem description={"Map of the Colville Reservation"}/>
      <InfoItem description={"Hunting License Information"}/>
      <InfoItem description={"Community Contaacts"}/>
      <InfoItem description={"Application Feedback"}/>
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