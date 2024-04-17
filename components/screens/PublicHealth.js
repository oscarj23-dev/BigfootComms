import * as React from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function PublicHealthScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
			<StatusBar style='auto' />
			<Text style={{ fontSize: 26, fontWeight: 'bold'}}> Public Health Resources</Text>
			
			<InfoItem description={"Mental Health Chat"} />
			<InfoItem description={"CCT Mental Health Hotline"} />
			<InfoItem description={"Suicide Crisis Line"} />
			<Text style={{ fontSize: 26, fontWeight: 'bold'}}>Addiction Resources</Text>

			<InfoItem description={"Find Naloxone Near You"} />
			<InfoItem description={"SAMHSA National Helpline 1-800-662-4257"} />
			<InfoItem description={"Treatment Centers Near You"} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container : {
		alignItems: 'center', 
		justifyContent: 'flex-start',
		padding: 20
	}
})