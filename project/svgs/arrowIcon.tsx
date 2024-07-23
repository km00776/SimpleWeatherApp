import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

interface ArrowIconProps {
  color?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({color = '#C9E8E0'}) => {
  return (
    <Svg width={16} height={9} viewBox="0 0 16 9" fill="none">
      <Rect
        x={16}
        y={1.70747}
        width={11.3232}
        height={2.41474}
        rx={1.20737}
        transform="rotate(135 16 1.707)"
        fill={color}
      />
      <Rect
        width={11.3232}
        height={2.41474}
        rx={1.20737}
        transform="scale(1 -1) rotate(-45 -2.061 -.854)"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowIcon;
