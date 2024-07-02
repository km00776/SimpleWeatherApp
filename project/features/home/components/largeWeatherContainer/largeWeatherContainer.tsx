import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ArrowIcon from '../../../../svgs/arrowIcon';
import {Fonts} from '../../../../styles/Fonts';
import {Colors} from '../../../../styles/Colors';

export const LargeWeatherContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.date}>Today</Text>
        {/* <ArrowIcon /> */}
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
    height: '65%',
    width: '85%',
    backgroundColor: Colors.rainy,
    borderRadius: 35,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '6%',
  },
  date: {
    fontFamily: Fonts.medium,
    fontSize: 20,
    color: Colors.rainyTxt,
  },
});
