import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import WeatherContentContainer from './components/weatherContentContainer/weatherContentContainer';
import {Colors} from '../../../../styles/Colors';
import moment from 'moment';

interface SmallWeatherContainerProps {
  hourlyData: any[];
  colorArray: string[];
  children: ReactNode;
}

// import RadialBackground from './components/RadialGradientBackground/RadialBackground';
const SmallWeatherContainer: React.FC<SmallWeatherContainerProps> = ({
  hourlyData,
  children,
}) => {
  return (
    <View style={styles.container}>
      <BlurView style={styles.absolute} blurType="light" blurAmount={12}>
        {children}
      </BlurView>
      <View style={styles.content}>
        <View style={styles.weatherContainer}>
          {hourlyData?.slice(0, 5).map((hour, key) => (
            <WeatherContentContainer
              temp={Math.round(hour.temp)}
              title={moment(hour.datetime, 'HH:mm:ss').format('hA')}
              key={key}
            />
          ))}
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.weatherContainer}>
          {hourlyData?.slice(5, 10).map((hour, key) => (
            <WeatherContentContainer
              temp={Math.round(hour.temp)}
              title={moment(hour.datetime, 'HH:mm:ss').format('hA')}
              key={key}
            />
          ))}
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.weatherContainer}>
          {hourlyData?.slice(10, 15).map((hour, key) => (
            <WeatherContentContainer
              temp={Math.round(hour.temp)}
              title={moment(hour.datetime, 'HH:mm:ss').format('hA')}
              key={key}
            />
          ))}
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.weatherContainer}>
          {hourlyData?.slice(15, 20).map((hour, key) => (
            <WeatherContentContainer
              temp={Math.round(hour.temp)}
              title={moment(hour.datetime, 'HH:mm:ss').format('hA')}
              key={key}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginTop: '12%',
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
