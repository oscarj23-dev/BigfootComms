import * as React from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function PublicHealthScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
			<StatusBar style='auto' />
			
			<Text style={{ fontSize: 26, fontWeight: 'bold'}}> Mental Health Resources</Text>
			<InfoItem description={"Mental Health Chat"} image={"suicide-crisis-lifeline.png"} />
			<InfoItem description={"CCT Mental Health Hotline"} image={"blue-phone.png"} />
			<InfoItem description={"Suicide Crisis Line"} image={"blue-phone.png"} />

			<Text style={{ fontSize: 26, fontWeight: 'bold'}}>Addiction Resources</Text>
			<InfoItem description={"Find Naloxone Near You"} image={"stop-overdose.png"} />
			<InfoItem description={"SAMHSA National Helpline 1-800-662-4257"} image={"blue-phone.png"} />
			<InfoItem description={"Treatment Centers Near You"} image={"handshake.png"} />
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