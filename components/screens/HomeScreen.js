import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import TabCard from '../card';

export default function HomeScreen() {
    return (
			<View>
				<StatusBar style='auto' />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text onPress={() => Alert.alert("This is the home screen")}
						style={{ fontSize: 26, fontWeight: 'bold'}}> Home Screen</Text>
        </View>

				<ScrollView style={styles.scrollView}>
					<View style={styles.cardContainer}>
						<TabCard title='Calendar' image='calendar.png' />
						<TabCard title='News' image='news.png'/>
						<TabCard title='Elder Resources' image='elder-resources.png' />
						<TabCard title='Resources' image='resources.png' />
						<TabCard title='Tribal Government' image='tribal.png' />
						<TabCard title='Public Health' image='public-health.png' />
						<TabCard title='About Us' image='about-us.png' />
						<TabCard title='Bigfoot Portal' image='bigfoot-logo.png' />
					</View>
				</ScrollView>
			</View>

	);
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Details" component={DetailsScreen} /> 
      <HomeStack.Screen name='Calendar' component={CalendarScreen} />
      <HomeStack.Screen name='News' component={NewsScreen} />
      <HomeStack.Screen name='Elder Resources' component={ElderResourcesScreen} />
      <HomeStack.Screen name='Resources' component={ResourcesScreen} />
      <HomeStack.Screen name='Tribal Government' component={TribalGovernmentScreen} />
      <HomeStack.Screen name='Public Health' component={PublicHealthScreen} />
      <HomeStack.Screen name='About Us' component={AboutUsScreen} />
      <HomeStack.Screen name='Bigfoot Portal' component={BigfootPortalScreen} />
    </HomeStack.Navigator>
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
