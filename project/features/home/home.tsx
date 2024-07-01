import React from 'react';
import {ImageBackground, Text} from 'react-native';

const BACKGROUND_IMG = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/rain_background.png');

export const Home: React.FC = () => {
  return (
    <ImageBackground
      source={BACKGROUND_IMG}
      resizeMode={'cover'}
      style={{backgroundColor: 'red', flex: 1, justifyContent: 'center'}}>
      <Text>hi</Text>
    </ImageBackground>
  );
};
