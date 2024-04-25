import { Text, ScrollView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InfoItem from '../InfoItem';



export default function ElderResourcesScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar style='auto' />
			<InfoItem description={"Colville Area Agency on Aging Website"} image={"bhp-logo.png"} url={"https://www.cct-hhs.com/area-agency-on-aging"}/>
      <InfoItem description={"Senior Meal Sites - Inchelium Meal Site"} image={"inchelium-meal-site.jpeg"} url={"https://www.cct-hhs.com/inchelium-meal-site"}/>
      <InfoItem description={"Senior Meal Sites - Keller Meal Site"} image={"keller-meal-site.jpeg"} url={"https://www.cct-hhs.com/keller-meal-site-1"}/>
      <InfoItem description={"Senior Meal Sites - Nespelem Meal Site"} image={"nespelem-meal-site.jpeg"} url={"https://www.cct-hhs.com/nespelem-meal-site"}/>
      <InfoItem description={"Senior Health Insurance Benefits Assistance"} image={"shiba-hd-logo.png"} url={"https://www.insurance.wa.gov/statewide-health-insurance-benefits-advisors-shiba"}/>
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
