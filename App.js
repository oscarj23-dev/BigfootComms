import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import TabCard from './components/card';

const Separator = () => <View style={styles.speratator} />;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style='auto' />
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          <TabCard title='TabCard Component 1' img='../assets/resources.png' />
          <TabCard title='TabCard Component 2' />
          <TabCard title='TabCard Component 3' />
          <TabCard title='TabCard Component 4' />
          <TabCard title='TabCard Component 5' />
          <TabCard title='TabCard Component 6' />
          <TabCard title='TabCard Component 7' />
          <TabCard title='TabCard Component 8' />
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
    justifyContent: 'center',
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
