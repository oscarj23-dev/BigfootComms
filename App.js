import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import MainContainer from './components/MainContainer';
import CommunityUpdatesScreen from './components/screens/CommunityUpdates';
import SettingsScreen from './components/screens/Settings';
import { View } from 'react-native';
import { color } from '@rneui/base';

// Screen Names
const mainName = "Main";
const resourcesName = "Community";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
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
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20 
          },
          headerStyle: { backgroundColor: 'rgba(5, 16, 101, 1)' },
          headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
        })}>

        <Tab.Screen name={resourcesName} component={CommunityUpdatesScreen} />
        <Tab.Screen name={mainName} component={MainContainer} options={{headerShown:false,}} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;