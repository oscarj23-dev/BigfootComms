import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import TabCard from '../card';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          <TabCard navigation={navigation} title="Calendar" image="calendar.png" />
          <TabCard navigation={navigation} title="News" image="news.png" />
          <TabCard navigation={navigation} title='Elder Resources' image='elder-resources.png' />
          <TabCard navigation={navigation} title='Resources' image='resources.png' />
          <TabCard navigation={navigation} title='Tribal Government' image='tribal.png' />
          <TabCard navigation={navigation} title='Public Health' image='public-health.png' />
          <TabCard navigation={navigation} title='About Us' image='about-us.png' />
          <TabCard navigation={navigation} title='Bigfoot Portal' image='bigfoot-logo.png' />
        </View>
      </ScrollView>
    </View>
	);
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'rgba(5, 16, 101, 1)',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  scrollView: {
    backgroundColor: 'rgba(249, 249, 252, 1)',
  },
  speratator: {
    marginVertical:16,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }, 
  tabBar: {
    backgroundColor:'rgba(5, 16, 101, 1)',
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    alignItems:'center'
  }, 
  header: {
    backgroundColor:'rgba(5, 16, 101, 1)',
    color:'white',
    padding:15
  }
});
