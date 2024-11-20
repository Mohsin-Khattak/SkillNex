import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIconSvg = props => (
  <Svg
    width={12}
    height={20}
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 2L1.99993 10.0001L10 18.0001"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BackIconSvg;
