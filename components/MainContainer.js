import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


// Screens
import HomeScreen from './screens/HomeScreen';
import ResourcesScreen from './screens/Resources';
import NewsScreen from './screens/News';

// Screen Names
const homeName = "Home";
const resourcesName = "Resources";
const newsName = "Settings";

const Tab = createBottomTabNavigator();
const homeNavigator = createNativeStackNavigator();

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
              iconName = focused ? 'settings' : 'settings-outline';
            }
            color = focused ? '#fff' : 'rgba(162, 162, 162, 1)';
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle : { color: '#fff', position: 'absolute' },
          tabBarStyle: {
            backgroundColor: 'rgba(5, 16, 101, 1)',
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20 
          },
          headerStyle: { backgroundColor: 'rgba(5, 16, 101, 1)' },
          headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
        })}>

        <Tab.Screen name={resourcesName} component={ResourcesScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={newsName} component={NewsScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
