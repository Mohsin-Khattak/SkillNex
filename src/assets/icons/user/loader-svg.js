import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const LoaderSvg = props => (
  <Svg
    width={42}
    height={18}
    viewBox="0 0 42 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={3} cy={15} r={3} fill="white" />
    <Circle cx={15} cy={11} r={3} fill="white" />
    <Circle cx={27} cy={3} r={3} fill="white" />
    <Circle cx={39} cy={12} r={3} fill="white" />
  </Svg>
);
export default LoaderSvg;
