import {View} from 'react-native';
import React from 'react';
import {mvs} from '../../../config/metrices';
import {colors} from '../../../config/colors';
const Line = ({marginVertical = 0, bgColor = colors.gray}) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        height: mvs(1),
        marginVertical: marginVertical,
      }}
    />
  );
};
export default Line;
