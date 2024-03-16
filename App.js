import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import TabCard from './components/card';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style='auto' />
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          <TabCard title='Calendar' image='calendar.png' />
          <TabCard title='news' image='news.png'/>
          <TabCard title='Elder Resources' />
          <TabCard title='Resources' image='resources.png' />
          <TabCard title='Tribal Government' image='tribal.png' />
          <TabCard title='Public Health' image='public-health.png' />
          <TabCard title='About Us' image='about-us.png' />
          <TabCard title='Bigfoot Portal' image='bigfoot-logo.png' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(249, 249, 252, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
  },
  scrollView: {
    marginVertical:25,
  },
  speratator: {
    marginVertical:16,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
