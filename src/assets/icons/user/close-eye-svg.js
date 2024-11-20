import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../config/colors';
const CloseEyeIconSvg = ({color = colors.secondary}) => (
  <Svg
    width={35}
    height={17}
    viewBox="0 0 35 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M2.95703 2.21875C3.48143 3.22613 4.27602 4.16064 5.28918 4.99096C8.12983 7.3191 12.6888 8.82831 17.8285 8.82831C22.9683 8.82831 27.5272 7.3191 30.3679 4.99096C31.381 4.16064 32.1756 3.22613 32.7 2.21875"
      stroke={color}
      strokeWidth={2.54}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.9414 8.82812L23.652 15.2125"
      stroke={color}
      strokeWidth={2.54}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M28.8613 6.64062L33.535 11.3142"
      stroke={color}
      strokeWidth={2.54}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.13086 11.3142L6.80449 6.64062"
      stroke={color}
      strokeWidth={2.54}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9858 15.2125L13.6966 8.82812"
      stroke={color}
      strokeWidth={2.54}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CloseEyeIconSvg;
