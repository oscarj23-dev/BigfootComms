import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import testIDs from '../testIDs';

interface State {
  items?: AgendaSchedule;
}

const generateDummyData = (): AgendaSchedule => {
  const dummyData: AgendaSchedule = {};

  // Generate dummy dates
  const startDate = new Date(); // Today's date
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i); // Increment date by i days

    // Format date as "YYYY-MM-DD"
    const formattedDate = currentDate.toISOString().split('T')[0];

    // Generate dummy entries for each date
    const dummyEntries: AgendaEntry[] = [];
    for (let j = 0; j < Math.floor(Math.random() * 5) + 1; j++) { // Generate 1 to 5 dummy entries
      dummyEntries.push({
        name: `Event ${j + 1}`,
        height:Math.max(50, Math.floor(Math.random() * 150)), // Random height
        day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][currentDate.getDay()] // Get day of the week
      });
    }

    dummyData[formattedDate] = dummyEntries;
  }

  return dummyData;
};
const state: State = {
  items: generateDummyData(),
};


export default class AgendaScreen extends Component<State> {  
  // reservationsKeyExtractor = (item, index) => {
  //   return `${item?.reservation?.day}${index}`;
  // };

  render() {
    return (
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={state.items}
        loadItemsForMonth={this.loadItems}
        selected={new Date().toString()}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
      />
    );
  }

  loadItems = (day: DateData) => {
    const items = state.items || {};
    console.log("STATE IS: " + state.items);

    setTimeout(() => {
      for (let i = 0; i < 7; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        console.log("CALCULATED TIME IS: " + strTime)
        console.log("ITEMS AT STRTIME: " + !items[strTime])
        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  };

  renderDay = (day) => {
    if (day) {
      return <Text style={styles.customDay}>{day.getDay()}</Text>;
    }
    return <View style={styles.dayItem}/>;
  };

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green'
  },
  dayItem: {
    marginLeft: 34
  }
});