import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../config/colors';
const NextIconSvg = ({color = colors.grey}) => (
  <Svg
    width={37}
    height={20}
    viewBox="0 0 37 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M23.9151 14.5136L28.699 9.73128L23.9151 4.94897L22.7892 6.07413L26.4495 9.73446L22.7892 13.3948L23.9151 14.5136ZM30.5196 14.5056H32.1111V4.95693H30.5196V14.5056Z"
      fill={color}
    />
    <Path
      d="M4.18359 4.8501L7.76526 8.43177L4.18359 12.0134L3.58629 11.4166L6.57151 8.43177L3.58629 5.44697L4.18359 4.8501Z"
      fill={color}
      stroke={color}
      strokeWidth={0.353655}
    />
  </Svg>
);
export default NextIconSvg;
