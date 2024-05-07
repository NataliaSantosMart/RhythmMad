import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import EventList from '../screens/EventList';


const SplashScreen = ({ }) => {

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1A57',
  },
  image: {
    width: '45%', 
    height: '45%', 
  },
});

export default SplashScreen;
