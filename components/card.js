import React from 'react';
import { Card } from '@rneui/themed';
import { StyleSheet, Text, View, Pressable, Alert, Image } from 'react-native';

export default function TabCard(props) {
	return (
		<View>
			<Pressable onPress={() => Alert.alert('You pressed the card!')}>
				<Card containerStyle={styles.cardContainer}>	
					<Image source={'../assets/resources.png'} />
					<Card.Divider></Card.Divider>
					<Text>{props.title}</Text>
				</Card>
			</Pressable>
		</View>
	);

}
const styles = StyleSheet.create({
  cardContainer: {
		width:176,
    height:164,
    borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});