import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ArrowIcon from '../../../../svgs/arrowIcon';
import {Fonts} from '../../../../styles/Fonts';
import {Colors} from '../../../../styles/Colors';
import {Size} from '../../../../styles/FontSize';
import RainyIcon from '../../../../svgs/rainyIcon';
import DegreeIcon from '../../../../svgs/degreeIcon';

export const LargeWeatherContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.date}>Today</Text>
        <View style={styles.iconContainer}>
          <ArrowIcon />
        </View>
      </View>
      <View style={styles.weatherContainer}>
        <View style={styles.row2}>
          <View style={styles.rainyIcon}>
            <RainyIcon />
          </View>
          <Text style={styles.degree}>13</Text>
          <View style={styles.degreeIcon}>
            <DegreeIcon />
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.weatherText}>Rainy</Text>
        <Text style={styles.locationText}>California, Los Angeles</Text>
        <Text style={styles.locationText}>21 Oct 2019</Text>
      </View>
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

  weatherContainer: {
    marginLeft: '2%',
  },

  row2: {
    flexDirection: 'row',
    alignItems: 'center',
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
  degree: {
    fontFamily: Fonts.medium,
    fontSize: Size.XLRG,
    color: Colors.rainyTxt,
    alignItems: 'center',
  },
  degreeIcon: {
    fontFamily: Fonts.medium,
    fontSize: Size.LRG,
    color: Colors.rainyTxt,
    alignSelf: 'flex-start',
    marginTop: '8%',
    marginLeft: '8%',
  },
  rainyIcon: {
    marginRight: '8%',
  },
  weatherText: {
    fontFamily: Fonts.semi_bold,
    fontSize: Size.MD,
    color: Colors.rainyTxt,
  },
  column: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '35%',
  },
  locationText: {
    fontFamily: Fonts.medium,
    fontSize: Size.SM,
    color: Colors.rainyTxt,
  },
});
