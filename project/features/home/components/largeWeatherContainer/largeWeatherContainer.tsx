import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ArrowIcon from '../../../../svgs/arrowIcon';

export const LargeWeatherContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Today</Text>
        <ArrowIcon />
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
    backgroundColor: '#7FC3AE',
    borderRadius: 35,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
