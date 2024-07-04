import React from 'react';
import {ImageBackground} from 'react-native';
import {LargeWeatherContainer} from './components/largeWeatherContainer/largeWeatherContainer';
import {SafeAreaView, StyleSheet} from 'react-native';

const BACKGROUND_IMG = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/rain_background.png');

export const Home: React.FC = () => {
  return (
    <ImageBackground
      source={BACKGROUND_IMG}
      resizeMode={'cover'}
      style={styles.imageContainer}>
      <SafeAreaView style={styles.container}>
        <LargeWeatherContainer />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    marginTop: '10%',
  },

  imageContainer: {
    flex: 1,
  },
});
