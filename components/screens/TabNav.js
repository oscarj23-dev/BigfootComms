import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// Screens
import MainContainer from '../MainContainer';
import CommunityUpdatesScreen from './CommunityUpdates';
import SettingsScreen from './Settings';

// Screen Names
const mainName = "Main";
const resourcesName = "Community";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator 
      initialRouteName={mainName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === mainName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === resourcesName) {
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          color = focused ? '#fff' : 'rgba(162, 162, 162, 1)';
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle : { color: '#fff', position: 'absolute' },
        tabBarStyle: {
          backgroundColor: 'rgba(5, 16, 101, 1)',
          borderRadius: 20,
          borderTopWidth: 0,
        },
        headerStyle: { 
          backgroundColor: 'rgba(5, 16, 101, 1)', 
          borderBottomWidth:0,  
        },
        headerTitleStyle: { color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerShadowVisible: false,
      })}>

      <Tab.Screen name={resourcesName} component={CommunityUpdatesScreen} />
      <Tab.Screen name={mainName} component={MainContainer} options={{headerShown:false}} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabNav;