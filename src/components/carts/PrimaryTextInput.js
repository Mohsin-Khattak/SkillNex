import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import * as SVG from '../../assets/icons/user';
import {mvs} from '../../config/metrices';
import {Row} from '../atoms/row';
const PrimaryTextInput = ({
  leftIcon = '',
  rightIcon = '',
  placeholder = '',
  style,
}) => {
  const LeftIcon = SVG[leftIcon];
  const RightIcon = SVG[rightIcon];

  const [counter, setCounter] = useState(0);
  return (
    <Row style={{...styles.main, ...style}}>
      <View>{LeftIcon ? <LeftIcon /> : null}</View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'lightgray'}></TextInput>
      {RightIcon ? <RightIcon width={20} /> : null}
    </Row>
  );
};
export default PrimaryTextInput;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: mvs(10),
    paddingHorizontal: mvs(5),
    height: mvs(50),
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 5,
  },

  counter: {
    backgroundColor: '#20D994',
    marginVertical: mvs(16),
    alignItems: 'center',
    padding: mvs(5),
  },
  input: {
    flex: 1,
    paddingLeft: mvs(10),
    color: 'black',
  },
});
