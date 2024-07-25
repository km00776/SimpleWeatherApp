import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import RadialGradientBackground from './components/radialGradientBackground/radialGradientBackground';
import WeatherContentContainer from './components/weatherContentContainer/weatherContentContainer';
import {Colors} from '../../../../styles/Colors';

// import RadialBackground from './components/RadialGradientBackground/RadialBackground';
const SmallWeatherContainer = () => {
  return (
    <View style={styles.container}>
      <BlurView style={styles.absolute} blurType="light" blurAmount={12}>
        <RadialGradientBackground />
      </BlurView>
      <View style={styles.content}>
        <View style={styles.weatherContainer}>
          <WeatherContentContainer />
          <WeatherContentContainer />

          <WeatherContentContainer />
          <WeatherContentContainer />
          <WeatherContentContainer />
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.weatherContainer2}>
          <WeatherContentContainer />
          <WeatherContentContainer />

          <WeatherContentContainer />
          <WeatherContentContainer />
          <WeatherContentContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginTop: '15%',
    borderRadius: 35,
    overflow: 'hidden',
  },
  content: {
    marginVertical: '4%',
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: '2%',
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weatherContainer2: {
    flexDirection: 'row',
    marginTop: '1%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineBreak: {
    width: '98%', // Adjust the width as needed
    height: '0.4%',
    marginVertical: '5%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
});

export default SmallWeatherContainer;
