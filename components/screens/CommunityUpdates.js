import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StatusBar, FlatList } from 'react-native';
import { firebase } from '../../firebaseConfig';
import InfoItem from '../InfoItem';

export default function CommunityUpdatesScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const communityCollection = firebase.firestore().collection('communityUpdates');
    const unsubscribe = communityCollection.onSnapshot(querySnapshot => {
      const fetchedUsers = [];
      querySnapshot.forEach(doc => {
        const { title, date, description } = doc.data();
        fetchedUsers.push({
          id: doc.id,
          title,
          description,
          date,
        });
      });
      setUsers(fetchedUsers);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView>
      <Text
        style={{ 
          paddingTop:10,
          paddingLeft:10,
          display:'flex', 
          fontSize: 22, 
          fontWeight: 'bold', 
          alignItems:"flex-start",
          color: 'rgba(5, 16, 101, 1)'
        }}>
        Community Updates Screen 
      </Text>
      <View style={{ display:'flex', justifyContent: 'center' }}>
        <StatusBar style='auto' />
        {users.map(user => (
          <InfoItem 
            key={user.id}
            title={user.title}
            description={`Date: ${user.date && user.date.seconds ? new Date(user.date.seconds * 1000).toLocaleDateString('en-US', {
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : ''}\n${user.description}`}
            image="notification-alert.png"
          />
        ))}
      </View>
    </ScrollView>
  );
}
