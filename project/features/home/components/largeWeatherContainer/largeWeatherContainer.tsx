import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ArrowIcon from '../../../../svgs/arrowIcon';
import {Fonts} from '../../../../styles/Fonts';
import {Colors} from '../../../../styles/Colors';
import {Size} from '../../../../styles/FontSize';

export const LargeWeatherContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.date}>Today</Text>
        <View style={styles.iconContainer}>
          <ArrowIcon />
        </View>
      </View>

      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '43.3%',
    width: '85%',
    backgroundColor: Colors.rainy,
    borderRadius: 35,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  iconContainer: {
    marginTop: '1%',
  },
  date: {
    fontFamily: Fonts.medium,
    fontSize: Size.MD,
    color: Colors.rainyTxt,
    marginRight: '3.5%',
  },
});
