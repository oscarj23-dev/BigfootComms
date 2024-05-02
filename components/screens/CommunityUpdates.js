import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';


import InfoItem from '../InfoItem';

export default function CommunityUpdatesScreen() {

	return (
    <ScrollView>
      <View style={{ display:'flex', justifyContent: 'center' }}>
			<StatusBar style='auto' />
				<Text
					style={{ 
            paddingTop:10,
            paddingLeft:10,
            display:'flex', 
            fontSize: 22, 
            fontWeight: 'bold', 
            alignItems:"flex-start",
            color: 'rgba(5, 16, 101, 1)'
          }}>Community Updates Screen</Text>
          <InfoItem title={"FLOOD WARNING"} description={`Date issued: ${new Date().toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' })
            }\nWhere: Omak, WA`} image="notification-alert.png"/>
          <InfoItem title={"WILDFIRE WARNING"} description={`Date issued: ${new Date().toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' })
            }\nWhere: Omak, WA`} image="notification-alert.png"/>
          <InfoItem description="Flood Warning: Possible flooding around the Coulee Damn" image="notification-alert.png"/>
          <InfoItem description="Flood Warning: Possible flooding around the Coulee Damn" image="notification-alert.png"/>
          <InfoItem description="Flood Warning: Possible flooding around the Coulee Damn" image="notification-alert.png"/>
			</View>
    </ScrollView>
		
	);
}