import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import TabCard from '../card';

export default function HomeScreen({ navigation }) {
  return (

      <ScrollView contentContainerStyle={styles.cardContainer}>
        <TabCard navigation={navigation} title="Calendar" image="calendar.png" />
        <TabCard navigation={navigation} title="News" image="news.png" />
        <TabCard navigation={navigation} title='Elder Resources' image='elder-resources.png' />
        <TabCard navigation={navigation} title='Resources' image='resources.png' />
        <TabCard navigation={navigation} title='Tribal Government' image='tribal.png' />
        <TabCard navigation={navigation} title='Public Health' image='public-health.png' />
        <TabCard navigation={navigation} title='About Us' image='about-us.png' />
        <TabCard navigation={navigation} title='Bigfoot Portal' image='bigfoot-logo.png' />
      </ScrollView>
	);
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
});
