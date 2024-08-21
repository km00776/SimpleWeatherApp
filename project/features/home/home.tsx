import React, {ReactNode, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ImageSourcePropType,
  View,
} from 'react-native';
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
import {determineWeatherType} from './utils';
import RadialGradientBackground from './components/smallWeatherContainer/components/radialGradientBackground/radialGradientBackground';
import SunnyIcon from '../../svgs/sunnyIcon';
import RainyIcon from '../../svgs/rainyIcon';
import CloudyIcon from '../../svgs/cloudyIcon';

type WeatherConfig = {
  backgroundImg: ImageSourcePropType | number;
  colors: string[];
  weatherIcon: ReactNode | null;
};

const RAINY_BACKGROUND = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/rain_background.png');
const SUNNY_BACKGROUND = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/sun_background.png');
const CLOUDY_BACKGROUND = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/cloudy_background.png');
const SNOWY_BACKGROUND = require('/Users/macbook/Desktop/SimpleWeatherApp/project/assets/snow_background.png');

type WeatherCondition = 'Sunny' | 'Rainy' | 'Snowy' | 'Cloudy';

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
  const [config, setConfig] = useState<WeatherConfig>({
    backgroundImg: 0, // Default image
    colors: [Colors.sunnyTxt, Colors.sunny],
    weatherIcon: null,
  });

  const weatherStateCategoryConfig: Record<WeatherCondition, WeatherConfig> = {
    Sunny: {
      backgroundImg: SUNNY_BACKGROUND,
      colors: [Colors.sunnyTxt, Colors.sunny],
      weatherIcon: <SunnyIcon />,
    },
    Rainy: {
      backgroundImg: RAINY_BACKGROUND,
      colors: [Colors.rainyTxt, Colors.rainy],
      weatherIcon: <RainyIcon />,
    },
    Snowy: {
      backgroundImg: SNOWY_BACKGROUND,
      colors: [Colors.snowyTxt, Colors.snowy],
      weatherIcon: <CloudyIcon />,
    },
    Cloudy: {
      backgroundImg: CLOUDY_BACKGROUND,
      colors: [Colors.cloudyTxt, Colors.cloudy],
      weatherIcon: <CloudyIcon />,
    },
  };

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

  useEffect(() => {
    // const {currentConditions} = temperatureData;
    const type: any = determineWeatherType(
      weatherStateCategoryConfig,
      temperatureData?.days[selectedIndex],
    );

    setConfig(type as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temperatureData, selectedIndex]);

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
      source={config.backgroundImg}
      resizeMode={'cover'}
      style={styles.imageContainer}>
      <SafeAreaView style={styles.container}>
        {!isEmpty(temperatureData) && (
          <LargeWeatherContainer
            temp={Math.round(temperatureData.days[selectedIndex].temp)}
            location={temperatureData.address}
            conditions={temperatureData.days[selectedIndex].conditions}
            colorArray={config.colors}
            weatherIcon={config.weatherIcon}
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
                color={config.colors[0]}
              />
            }
          />
        )}
        <SmallWeatherContainer
          hourlyData={temperatureData?.days[selectedIndex].hours}
          colorArray={config.colors}
          children={<RadialGradientBackground stopColor={config.colors[0]} />}
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
