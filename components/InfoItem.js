import { useState } from 'react';
import { StyleSheet, View, Pressable, Image, Modal } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Card, Text } from '@rneui/themed'; // Assuming Text is imported from react-native
import WebView from 'react-native-webview';
import call from 'react-native-phone-call';

import { BackgroundImage } from './ImageStorage';
import { ScreenHeight, ScreenWidth } from '@rneui/base';

export default function InfoItem({ description, image, title, url, phone }) {
  const [visible, setVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to track if both url and phone are undefined

  const onPressFn = () => {
    if (url) {
      setVisible(true); // Open modal with WebView
    } else if (phone) {
      call(phone).catch(console.error); // Make phone call
    } else {
      setShowPopup(!showPopup); // Show the pop-up square
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        onPress={onPressFn}
        >
        <Modal 
          visible={visible} 
          presentationStyle={'formSheet'} 
          animationType={'slide'} 
          onRequestClose={() => setVisible(false)}
          >
          <WebView source={{ uri: url }} />
        </Modal>

        <Modal 
          visible={showPopup} 
          transparent={true}
          animationType={'fade'}
          onRequestClose={() => setShowPopup(!showPopup)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable         
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0, paddingBottom:10, }] }
                onPress={onPressFn}>
                  <FeatherIcon
                    color="black"
                    name="x"
                    size={40} 
                  />
              </Pressable>
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalTitle}>Stuff </Text>  
                <Text style={styles.modalDescription}>Stuff to fill out the description </Text>  
              </View>
            </View>
          </View>
        </Modal>

          <Card containerStyle={styles.card}>
            <View style={styles.content}>
              <Image source={BackgroundImage.GetImage(image)} style={styles.image} />
              <View style={styles.textContainer}>
                {title && <Text style={styles.title}>{title}</Text>}
                <Text style={styles.description}>{description}</Text>
              </View>
            </View>
          </Card>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: ScreenHeight/2,
    width: ScreenWidth/1.2,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  card: {
    width: 378,
    height: 'auto',
    borderRadius: 35,
    
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:3
  },
  modalTitle: {
    fontSize:30,
    fontWeight:'600',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 88,
    height: 88,
    marginRight: 15,
    borderRadius: 10
  },
  textContainer: {
    flex: 1, // Allow the text container to expand
  },
  modalTextContainer: {
    flex: 1, // Allow the text container to expand
    padding:15,
  },
  description: {
    maxWidth: 250, // Constrain the width of the text
    fontSize: 18
  },
  modalDescription: {
    maxWidth: 250, // Constrain the width of the text
    fontSize: 18,
    padding:5,
  },
});
