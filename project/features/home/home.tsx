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
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import DropdownMenu from './components/largeWeatherContainer/components/dropDown/dropDown';

const BACKGROUND_IMG = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/rain_background.png');

export const Home: React.FC = () => {
  const [errored, setErrored] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temperatureData, setTemperatureData] = useState<WeatherData | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format('DD MMM YYYY'),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const onModalPress = () => {
    setModalVisible(!modalVisible);
  };

  const onDatePress = (dateValue: string, dateIndex: number) => {
    setSelectedDate(dateValue);
    setSelectedIndex(dateIndex);
  };

  // move to a component when this gets better
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }
  // move to a component as it might be required in the future when the app gets bigger
  if (errored) {
    return <View style={styles.errorContainer} />;
  }

  return (
    <ImageBackground
      source={BACKGROUND_IMG}
      resizeMode={'cover'}
      style={styles.imageContainer}>
      <SafeAreaView style={styles.container}>
        {!isEmpty(temperatureData) && (
          <LargeWeatherContainer
            temp={Math.round(temperatureData.days[selectedIndex].temp)}
            location={temperatureData.address}
            conditions={temperatureData.days[selectedIndex].conditions}
            // passing this as children as it will avoid props drilling and no need to use context
            children={
              <DropdownMenu
                dates={temperatureData.days.map(day =>
                  moment(day.datetime).format('DD MMM YYYY'),
                )}
                onModalPress={onModalPress}
                modalVisible={modalVisible}
                onDatePress={onDatePress}
                selectedDate={selectedDate}
              />
            }
          />
        )}
        <SmallWeatherContainer
          hourlyData={temperatureData?.days[selectedIndex].hours}
        />
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
  loadingContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  errorContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
});
