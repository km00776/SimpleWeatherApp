import React from 'react';
import {Svg, Defs, RadialGradient, Stop, Rect} from 'react-native-svg';

interface RadialGradientBackgroundProps {
  stopColor: string;
}

const RadialGradientBackground: React.FC<RadialGradientBackgroundProps> = ({
  stopColor,
}) => {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <RadialGradient
          id="grad"
          cx="50%"
          cy="50%"
          rx="50%"
          ry="50%"
          fx="50%"
          fy="50%"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0%" stopColor={stopColor} stopOpacity="0.7" />
          <Stop offset="100%" stopColor={stopColor} stopOpacity="0.3" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
};

export default RadialGradientBackground;
