import React from 'react';
import { Card, Text } from '@rneui/themed'; // Assuming Text is imported from react-native
import { StyleSheet, Alert, View, Pressable, Image } from 'react-native';

export default function InfoItem({ description, image }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert("You pressed an Info Item component")}>
        <Card containerStyle={styles.card}>
          <View style={styles.content}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
          <Card.Divider />
          {/* You can add additional content here if needed */}
        </Card>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  card: {
    width: 378,
    borderRadius: 35,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  image: {
    width: 88,
    height: 88,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Allow the text container to expand
  },
  description: {
    maxWidth: 250, // Constrain the width of the text
    fontSize: 20
  },
});
