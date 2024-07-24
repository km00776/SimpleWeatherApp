import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface CloudIconProps {
  color?: string;
}

const CloudIcon: React.FC<CloudIconProps> = ({color = '#fff'}) => {
  return (
    <Svg width={16} height={12} viewBox="0 0 16 12" fill="none">
      <Path
        d="M9 3c2.465 0 3.863 1.574 4.066 3.474h.062C14.714 6.474 16 7.711 16 9.237 16 10.763 14.714 12 13.128 12H4.873C3.287 12 2 10.763 2 9.237c0-1.526 1.286-2.763 2.872-2.763h.062C5.14 4.561 6.535 3 9 3zM6.392 0c1.456 0 2.726.828 3.353 2.045A6.054 6.054 0 009 2C6.61 2 4.87 3.307 4.247 5.286l-.062.214-.046.187-.165.03a3.734 3.734 0 00-2.716 2.258 2.622 2.622 0 011.2-4.856l.222-.005A3.77 3.77 0 016.392 0z"
        fill={color}
      />
    </Svg>
  );
};

export default CloudIcon;
