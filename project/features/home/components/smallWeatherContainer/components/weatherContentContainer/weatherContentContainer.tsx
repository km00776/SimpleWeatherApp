import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../../../styles/Fonts';
import {Size} from '../../../../../../styles/FontSize';
import {Colors} from '../../../../../../styles/Colors';

import CloudIcon from '../../../../../../svgs/cloudIcon';

interface WeatherContentContainer {
  temp: number;
  title: string;
}

const WeatherContentContainer: React.FC<WeatherContentContainer> = ({
  temp,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <CloudIcon />
        </View>
        <Text style={styles.text}>{temp}°</Text>
      </View>
    </View>
  );
};

export default WeatherContentContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: '2%',
    alignItems: 'center',
  },
  iconContainer: {
    marginTop: '11%',
    marginRight: '6%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: Size.SM,
    color: Colors.white,
  },
});
