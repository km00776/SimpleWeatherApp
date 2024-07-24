import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface DegreeIconProps {
  color?: string;
}
const DegreeIcon: React.FC<DegreeIconProps> = ({color = '#C9E8E0'}) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <Path
        d="M0 7.48c0-2.056.738-3.817 2.215-5.282C3.692.733 5.466 0 7.539 0c2.046 0 3.802.733 5.265 2.198C14.268 3.663 15 5.424 15 7.48c0 2.056-.732 3.824-2.196 5.302C11.341 14.26 9.585 15 7.54 15c-2.047 0-3.815-.74-5.305-2.217C.744 11.305 0 9.537 0 7.48zm3.653 0c0 1.08.376 1.993 1.127 2.739.777.77 1.697 1.156 2.759 1.156 1.062 0 1.982-.385 2.759-1.156.777-.772 1.166-1.684 1.166-2.738s-.389-1.96-1.166-2.719C9.52 4.004 8.6 3.625 7.538 3.625c-1.087 0-2.007.372-2.758 1.118-.752.745-1.127 1.658-1.127 2.738z"
        fill={color}
      />
    </Svg>
  );
};

export default DegreeIcon;
