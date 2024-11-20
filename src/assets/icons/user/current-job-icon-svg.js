import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CurrentJobIconSvg = props => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z"
      fill="#626262"
      stroke="#626262"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5"
      stroke="#626262"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5 20L19.5 15L17.5 13L12.5 18V20H14.5Z"
      fill="#626262"
      stroke="#626262"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CurrentJobIconSvg;
