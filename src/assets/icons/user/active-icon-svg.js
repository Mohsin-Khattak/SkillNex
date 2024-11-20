import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ActiveIconSvg = props => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.61355 13.3238C10.7672 13.3238 13.3238 10.7672 13.3238 7.61355C13.3238 4.45988 10.7672 1.90332 7.61355 1.90332C4.45988 1.90332 1.90332 4.45988 1.90332 7.61355C1.90332 10.7672 4.45988 13.3238 7.61355 13.3238Z"
      stroke="#0BA02C"
      strokeWidth={1.14205}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.2307 6.18604L6.74111 9.517L4.99634 7.85152"
      stroke="#0BA02C"
      strokeWidth={1.14205}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ActiveIconSvg;
