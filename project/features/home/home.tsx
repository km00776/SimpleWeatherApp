import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {LargeWeatherContainer} from './components/largeWeatherContainer/largeWeatherContainer';
import {SafeAreaView, StyleSheet} from 'react-native';
import SmallWeatherContainer from './components/smallWeatherContainer/smallWeatherContainer';
import {Fonts} from '../../styles/Fonts';
import {Size} from '../../styles/FontSize';
import {Colors} from '../../styles/Colors';
import {fetchWeatherData} from './actions/getCurrentWeather';
// import {api}
const BACKGROUND_IMG = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/rain_background.png');

export const Home: React.FC = () => {

  const [errored, setErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const res = fetchWeatherData('London');
    const getWeatherData = async () => {
      const data = await fetchWeatherData('London');
      setTemperatureData(data);
    }
    getWeatherData();
  }, []);


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
