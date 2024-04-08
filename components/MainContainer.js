import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/HomeScreen';

import AboutUsScreen from './screens/AboutUs';
import BigfootPortalScreen from './screens/BigfootPortal';
import CalendarScreen from './screens/CalendarScreen';
import ElderResourcesScreen from './screens/ElderResources';
import NewsScreen from './screens/News';
import PublicHealthScreen from './screens/PublicHealth';
import ResourcesScreen from './screens/Resources';
import TribalGovernmentScreen from './screens/TribalGovernment';

const Stack = createNativeStackNavigator();

export default function MainContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="Calendar" component={CalendarScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="News" component={NewsScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="Elder Resources" component={ElderResourcesScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="Resources" component={ResourcesScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="Tribal Government" component={TribalGovernmentScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="Public Health" component={PublicHealthScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="About Us" component={AboutUsScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

      <Stack.Screen name="Bigfoot Portal" component={BigfootPortalScreen} options={{
        headerStyle: {backgroundColor: "rgba(5, 16, 101, 1)"},
        headerTitleStyle: {color: "#fff", fontWeight:"bold", fontSize: 20},
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }} />

    </Stack.Navigator>
  );
}
