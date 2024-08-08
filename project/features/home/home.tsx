import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground, View} from 'react-native';
import {LargeWeatherContainer} from './components/largeWeatherContainer/largeWeatherContainer';
import {SafeAreaView, StyleSheet} from 'react-native';
import SmallWeatherContainer from './components/smallWeatherContainer/smallWeatherContainer';
import {Fonts} from '../../styles/Fonts';
import {Size} from '../../styles/FontSize';
import {Colors} from '../../styles/Colors';
import {fetchWeatherData} from './actions/fetchWeatherData';
import {WeatherData} from './actions/types';
// import {api}
const BACKGROUND_IMG = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/rain_background.png');

export const Home: React.FC = () => {
  const [errored, setErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [temperatureData, setTemperatureData] = useState<WeatherData | []>([]);
  // we get 10 day data, just get the 5 day data + get the min and max.
  useEffect(() => {
    const getWeatherData = async () => {
      setIsLoading(true);
      const data = await fetchWeatherData('London');
      if (data) {
        setTemperatureData(data);
        setErrored(false);
      } else {
        setErrored(true);
      }
      setIsLoading(false);
    };
    getWeatherData();
  }, []);

  console.log('temperatureData', temperatureData);

  // move to a component when this gets better
  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <ActivityIndicator />
      </View>
    );
  }
  // move to a component as it might be required in the future when the app gets bigger
  if (errored) {
    return <View style={{backgroundColor: 'red', flex: 1}} />;
  }

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
