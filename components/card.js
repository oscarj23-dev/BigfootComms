import React from 'react';
import { Card } from '@rneui/themed';
import { BackgroundImage } from './ImageStorage';
import { StyleSheet, View, Pressable, Image } from 'react-native';

export default function TabCard({ navigation, title, image }) {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate(title)}>
        <Card containerStyle={styles.card}>
          <Image source={BackgroundImage.GetImage(image)} />
          <Card.Divider />
          <Card.Title>{title}</Card.Title>
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