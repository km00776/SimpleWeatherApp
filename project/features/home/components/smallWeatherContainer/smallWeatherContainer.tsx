import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import RadialGradientBackground from './components/radialGradientBackground/radialGradientBackground';
// import RadialBackground from './components/RadialGradientBackground/RadialBackground';
const SmallWeatherContainer = () => {
  return (
    <View style={styles.container}>
      {/* <RadialBackground /> */}
      <BlurView style={styles.absolute} blurType="light" blurAmount={12}>
        <RadialGradientBackground />
        <Text>asdasdadas</Text>

      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '23%',
    marginTop: '13%',
    borderRadius: 35,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SmallWeatherContainer;
