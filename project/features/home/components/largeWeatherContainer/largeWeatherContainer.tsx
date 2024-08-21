import React, {ReactNode} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Fonts} from '../../../../styles/Fonts';
import {Colors} from '../../../../styles/Colors';
import {Size} from '../../../../styles/FontSize';
import DegreeIcon from '../../../../svgs/degreeIcon';

interface LargeWeatherContainerProps {
  temp: number;
  conditions: string;
  location: string;
  children: ReactNode;
  colorArray: string[];
  weatherIcon: ReactNode;
}
// im aware we doing props drilling here, but keeping this here for now.
export const LargeWeatherContainer: React.FC<LargeWeatherContainerProps> = ({
  temp,
  conditions,
  location,
  children,
  colorArray,
  weatherIcon,
}) => {
  return (
    <View style={[styles.container, {backgroundColor: colorArray[1]}]}>
      <View style={styles.content}>
        <View style={styles.row}>{children}</View>
        <View style={styles.weatherContainer}>
          <View style={styles.row2}>
            <View style={styles.rainyIcon}>{weatherIcon}</View>
            <Text style={[styles.degree, {color: colorArray[0]}]}>{temp}</Text>
            <View style={styles.degreeIcon}>
              <DegreeIcon color={colorArray[0]} />
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={[styles.weatherText, {color: colorArray[0]}]}>
            {conditions}
          </Text>
          <Text style={[styles.locationText, {color: colorArray[0]}]}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: '40.3%',
    width: '85%',
    backgroundColor: Colors.rainy,
    borderRadius: 35,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },

  weatherContainer: {
    marginLeft: '2%',
  },

  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'space-between',
    marginBottom: '20%',
  },
  locationText: {
    fontFamily: Fonts.medium,
    fontSize: Size.SM,
    color: Colors.rainyTxt,
    marginBottom: '2%',
  },
  description: {
    fontFamily: Fonts.medium,
    fontSize: Size.SM,
    color: Colors.rainyTxt,
  },
  content: {
    marginTop: '2%',
  },
});
