import * as React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';
export default function ElderResourcesScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style='auto' />
			<InfoItem description={"Colvill Area Agency on Aging Website"} image={"blue-robe-woman.png"}/>
      <InfoItem description={"Senior Meal Sites Information"} image={"lady-elder-pancho.png"}/>
      <InfoItem description={"Senior Health Insurance Benefits Assistance"} image={"shiba.png"}/>
			<Text style={styles.text}> More Coming Soon! </Text>
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
