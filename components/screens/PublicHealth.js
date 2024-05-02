import * as React from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoItem from '../InfoItem';

export default function PublicHealthScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
			<StatusBar style='auto' />
			
			<Text style={{ fontSize: 26, fontWeight: 'bold'}}> Mental Health Resources</Text>
			<InfoItem description={"Mental Health Chat"} image={"988-logo.png"} url={"https://988lifeline.org/chat/"}/>
			<InfoItem description={"CCT Mental Health Hotline"} image={"phone-ringing.png"} url={"https://www.samhsa.gov/find-help/national-helpline"} />
			<InfoItem description={"Suicide Crisis Line"} image={"phone-ringing.png"} url={"https://988lifeline.org/talk-to-someone-now/"} />
			<InfoItem description={"SAMHSA National Helpline 1-800-662-4257"} image={"phone-ringing.png"} phone={ { number: ' 18006624257', prompt: true, skipCanOpen: true}}  />

			<Text style={{ fontSize: 26, fontWeight: 'bold'}}>Addiction Resources</Text>
			<InfoItem description={"Find Naloxone Near You"} image={"stop-overdose.jpg"} url={"https://stopoverdose.org/find-naloxone-near-me-washington-state/"} />
			<InfoItem description={"Treatment Centers Near You"} image={"helping-hands.avif"} url={"https://www.addictions.com/rehabs/washington/"}/>
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