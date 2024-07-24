import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Size = {
  XLRG: moderateScale(85), // 96 in design
  LRG: moderateScale(25),
  MD: moderateScale(20),
  SM: moderateScale(15),
};

export {scale, verticalScale, moderateScale, Size};
