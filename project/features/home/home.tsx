import React, { useEffect } from 'react';
import {ImageBackground} from 'react-native';
import {LargeWeatherContainer} from './components/largeWeatherContainer/largeWeatherContainer';
import {SafeAreaView, StyleSheet} from 'react-native';
import SmallWeatherContainer from './components/smallWeatherContainer/smallWeatherContainer';
import {Fonts} from '../../styles/Fonts';
import {Size} from '../../styles/FontSize';
import {Colors} from '../../styles/Colors';
import { getCurrentWeather } from './actions/getCurrentWeather';
// import {api}
const BACKGROUND_IMG = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/rain_background.png');

export const Home: React.FC = () => {
  console.log('API', process.env.API_KEY);

  // useEffect(() => {
  //     api.get
  // }, [])
useEffect(() => {
  console.log('hi')
    getCurrentWeather();
},[]);

  return (
    <ImageBackground
      source={BACKGROUND_IMG}
      resizeMode={'cover'}
      style={styles.imageContainer}>
      <SafeAreaView style={styles.container}>
        <LargeWeatherContainer />
        <SmallWeatherContainer />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    marginTop: '6%',
    flex: 1,
  },
  textContainer: {
    width: '96%',
    marginTop: '2%',
  },
  title: {
    marginBottom: '4%',
    fontFamily: Fonts.semi_bold,
    fontSize: Size.SM,
    color: Colors.white,
  },
  description: {
    fontFamily: Fonts.semi_bold,
    fontSize: Size.SM,
    color: Colors.white,
  },
  imageContainer: {
    flex: 1,
  },
});
