import * as React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import TabNav from './components/screens/TabNav';


function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      <TabNav />
    </NavigationContainer>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: 'white',
    card: 'white',
    text: 'white',
    border: 'black',
    notification: 'rgb(255, 69, 58)',
  },
};

export default App;