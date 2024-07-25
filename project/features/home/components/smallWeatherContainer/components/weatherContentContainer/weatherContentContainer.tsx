import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../../../../../styles/Fonts';
import {Size} from '../../../../../../styles/FontSize';
import {Colors} from '../../../../../../styles/Colors';

import CloudIcon from '../../../../../../svgs/cloudIcon';

const WeatherContentContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Now</Text>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <CloudIcon />
        </View>
        <Text style={styles.text}>25°</Text>
      </View>
    </View>
  );
};

export default WeatherContentContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  iconContainer: {
    marginRight: '10%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: Size.SM,
    color: Colors.white,
  },
});
