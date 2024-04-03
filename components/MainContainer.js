import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ResourcesScreen from './screens/Resources';
import NewsScreen from './screens/News';

// Screen Names
const homeName = "Home";
const resourcesName = "Resources";
const newsName = "News";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === resourcesName) {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === newsName) {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }
            color = focused ? '#fff' : 'rgba(162, 162, 162, 1)';
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {backgroundColor: 'rgba(5, 16, 101, 1)'},
          tabBarLabelStyle : { color: '#fff'},
        })}>
        <Tab.Screen name={resourcesName} component={ResourcesScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={newsName} component={NewsScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
