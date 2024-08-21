import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale, verticalScale} from '../styles/FontSize';

interface CloudyIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const CloudyIcon: React.FC<CloudyIconProps> = ({
  color = '#E4F1F9',
  height = 74,
  width = 95,
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
        d="M53.44 18c14.635 0 22.935 9.444 24.14 20.844h.368C87.365 38.844 95 46.266 95 55.422 95 64.578 87.365 72 77.948 72H28.931c-9.417 0-17.052-7.422-17.052-16.578 0-9.156 7.635-16.578 17.052-16.578h.368C30.516 27.366 38.804 18 53.439 18zM37.955 0C46.6 0 54.14 4.968 57.863 12.27A35.585 35.585 0 0053.44 12c-14.19 0-24.533 7.842-28.226 19.716L24.846 33l-.273 1.122-.98.18a22.072 22.072 0 00-9.748 4.725 22.392 22.392 0 00-6.377 8.823 15.688 15.688 0 01-6.295-7.444 15.887 15.887 0 01-.718-9.765 15.755 15.755 0 015.136-8.303 15.477 15.477 0 019.001-3.624l1.318-.03A22.673 22.673 0 0123.57 5.288 22.243 22.243 0 0137.955 0z"
        fill={color}
      />
    </Svg>
  );
};

export default CloudyIcon;
