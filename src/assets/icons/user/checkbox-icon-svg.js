import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
const CheckBoxIconSvg = props => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={1} y={1} width={10} height={10} stroke="#0047AB" strokeWidth={2} />
  </Svg>
);
export default CheckBoxIconSvg;
