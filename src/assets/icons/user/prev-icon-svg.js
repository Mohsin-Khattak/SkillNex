import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../config/colors';
const PrevIconSvg = ({color = colors.gray}) => (
  <Svg
    width={30}
    height={11}
    viewBox="0 0 30 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9.08488 10.5136L4.30098 5.73128L9.08488 0.948975L10.2108 2.07413L6.5505 5.73446L10.2108 9.39479L9.08488 10.5136ZM2.48036 10.5056H0.888916V0.956932H2.48036V10.5056Z"
      fill={color}
    />
    <Path
      d="M28.8165 0.850098L25.2349 4.43177L28.8165 8.01345L29.4138 7.41657L26.4286 4.43177L29.4138 1.44697L28.8165 0.850098Z"
      fill={color}
      stroke={color}
      strokeWidth={0.353655}
    />
  </Svg>
);
export default PrevIconSvg;
