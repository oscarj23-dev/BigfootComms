import * as React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function ResourcesScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style='auto' />
			<InfoItem 
				description={"Map of the Colville Reservation"} 
				image={"colville-map.png"} 
				url={"https://noanet.maps.arcgis.com/apps/webappviewer/index.html?id=52954c1c029146c19224d4560286daa9"} 
			/>
      <InfoItem 
				description={"Hunting License Information"}
				image={"hunting-license-image.png"} 
				url={"https://colville.nagfa.net/online/"} 
			/>
      <InfoItem 
				description={"Community Contacts"}
				image={"orange-contact.png"}
				url={"https://www.colvilletribes.com/get-to-know-your-council"}
			/>
      <InfoItem
				description={"Application Feedback"} 
				image={"feedback-image.png"}
			/>
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