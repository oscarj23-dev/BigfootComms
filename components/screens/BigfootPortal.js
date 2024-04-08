import * as React from 'react';
import { View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function BigfootPortalScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<StatusBar style='auto' />
				<Text onPress={() => navigation.navigate('Home')}
					style={{ fontSize: 26, fontWeight: 'bold'}}> Bigfoot Portal Screen</Text>
			</View>
	);
}