import { useState } from 'react';
import { StyleSheet, View, Pressable, Image, Modal } from 'react-native';

import { Card, Text } from '@rneui/themed'; // Assuming Text is imported from react-native
import WebView from 'react-native-webview';
import call from 'react-native-phone-call'

import { BackgroundImage } from './ImageStorage';

export default function InfoItem({ description, image, title, url, phone }) {
const [visible, setVisible] = useState(false);
const onPressFn = () => {
  if (url) {
    setVisible(true); // Open modal with WebView
  } else if (phone) {
    call(phone).catch(console.error); // Make phone call
  }
};
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFn}>
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
      <Modal 
        visible={visible} 
        presentationStyle={'pageSheet'} 
        animationType={'slide'}
        onRequestClose={() => setVisible(false)}
      >
        <WebView source={{uri: url}} />
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
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
  description: {
    maxWidth: 250, // Constrain the width of the text
    fontSize: 18
  },
});
