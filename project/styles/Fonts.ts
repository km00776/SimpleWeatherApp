import {Platform} from 'react-native';

export const POPPINS_REGULAR = Platform.select({
  ios: 'Poppins-Regular',
  android: 'Poppins-Regular',
});

export const POPPINS_BOLD = Platform.select({
  ios: 'Poppins-Bold',
  android: 'Poppins-Bold',
});

export const POPPINS_SEMI_BOLD = Platform.select({
  ios: 'Poppins-SemiBold',
  android: 'Poppins-SemiBold',
});

export const Fonts = {
  regular: POPPINS_REGULAR,
  bold: POPPINS_BOLD,
  semi_bold: POPPINS_SEMI_BOLD,
};
