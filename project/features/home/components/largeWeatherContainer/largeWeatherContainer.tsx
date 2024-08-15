import React, {ReactNode} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Fonts} from '../../../../styles/Fonts';
import {Colors} from '../../../../styles/Colors';
import {Size} from '../../../../styles/FontSize';
import RainyIcon from '../../../../svgs/rainyIcon';
import DegreeIcon from '../../../../svgs/degreeIcon';

interface LargeWeatherContainerProps {
  temp: number;
  conditions: string;
  location: string;
  children: ReactNode;
}
// im aware we doing props drilling here, but keeping this here for now.
export const LargeWeatherContainer: React.FC<LargeWeatherContainerProps> = ({
  temp,
  conditions,
  location,
  children,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>{children}</View>
      <View style={styles.weatherContainer}>
        <View style={styles.row2}>
          <View style={styles.rainyIcon}>
            <RainyIcon />
          </View>
          <Text style={styles.degree}>{temp}</Text>
          <View style={styles.degreeIcon}>
            <DegreeIcon />
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.weatherText}>{conditions}</Text>
        <Text style={styles.locationText}>{location}</Text>
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
    justifyContent: 'center',
    marginTop: '5%',
  },

  weatherContainer: {
    marginLeft: '2%',
  },

  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    // marginTop: '1%',
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
    marginRight: '5%',
    alignSelf: 'center',
    height: '60%',
  },
  weatherText: {
    fontFamily: Fonts.semi_bold,
    fontSize: Size.MD,
    color: Colors.rainyTxt,
  },
  column: {
    alignItems: 'center',
    height: '20%',
    justifyContent: 'space-between',
  },
  locationText: {
    fontFamily: Fonts.medium,
    fontSize: Size.SM,
    color: Colors.rainyTxt,
  },
});
