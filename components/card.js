import React from 'react';
import { Card } from '@rneui/themed';
import { BackgroundImage } from './ImageStorage';
import { StyleSheet, View, Pressable, Alert, Image } from 'react-native';

export default function TabCard(props) {
	return (
		<View>
			<Pressable onPress={() => Alert.alert(`CONGRATS! You pressed the ${props.title} card!`)}>
				<Card containerStyle={styles.card}>	
					<Image 
						source={BackgroundImage.GetImage(props.image)} 
					/>
					<Card.Divider></Card.Divider>
					<Card.Title>{props.title}</Card.Title>
				</Card>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
  card: {
		width:177,
		height:124 + (172.3 - 124),
    borderRadius:25,
		justifyContent:'space-evenly',
		alignItems: 'center',
		borderWidth:1,
  },
});