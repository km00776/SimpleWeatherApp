import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale, verticalScale} from '../styles/FontSize';

interface SunnyIconProps {
  color?: string;
  height?: number;
  width?: number;
}

const SunnyIcon: React.FC<SunnyIconProps> = ({
  color = '#EFAA82',
  height = 72,
  width = 72,
}) => {
  const formattedWidth = scale(width);
  const formattedHeight = verticalScale(height);
  const viewbox = `0 0 ${formattedWidth} ${formattedHeight}`;
  return (
    <Svg
      width={formattedWidth}
      height={formattedHeight}
      viewBox={viewbox}
      fill="none">
      <Path
        d="M36 0a2.7 2.7 0 012.7 2.7v5.4a2.7 2.7 0 01-5.4 0V2.7A2.7 2.7 0 0136 0zm18 36a18 18 0 11-36 0 18 18 0 0136 0zm15.3 2.7a2.7 2.7 0 000-5.4h-5.4a2.7 2.7 0 000 5.4h5.4zM36 61.2a2.7 2.7 0 012.7 2.7v5.4a2.7 2.7 0 01-5.4 0v-5.4a2.7 2.7 0 012.7-2.7zM8.1 38.7a2.7 2.7 0 000-5.4H2.7a2.7 2.7 0 000 5.4h5.4zM7.992 7.992a2.7 2.7 0 013.816 0l5.4 5.4a2.7 2.7 0 01-3.816 3.816l-5.4-5.4a2.7 2.7 0 010-3.816zm3.816 56.016a2.7 2.7 0 11-3.816-3.816l5.4-5.4a2.7 2.7 0 113.816 3.816l-5.4 5.4zm52.2-56.016a2.7 2.7 0 00-3.816 0l-5.4 5.4a2.7 2.7 0 003.816 3.816l5.4-5.4a2.7 2.7 0 000-3.816zm-3.816 56.016a2.7 2.7 0 103.816-3.816l-5.4-5.4a2.7 2.7 0 10-3.816 3.816l5.4 5.4z"
        fill={color}
      />
    </Svg>
  );
};

export default SunnyIcon;
