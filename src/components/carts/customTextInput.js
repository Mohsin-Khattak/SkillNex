import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../config/colors';
import {mvs, width} from '../../config/metrices';

const CustomTextInput = ({
  placeholder,
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  onBlur,
  secureTextEntry,
  error,
  touched,
  style,
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      {leftIcon && leftIcon}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
      {rightIcon && rightIcon}

      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: mvs(16),
    flexDirection: 'row',
    backgroundColor: colors.gray,
    gap: mvs(7),
    borderWidth: mvs(1),
    borderColor: colors.grey,
    borderRadius: mvs(8),
    alignItems: 'center',
    paddingHorizontal: 10,
    // paddingVertical: mvs(6),
    height: mvs(55),
  },
  input: {
    fontSize: mvs(12),
    color: colors.grey,
    width: width - mvs(120),
  },
  errorText: {
    color: colors.red,
    fontSize: mvs(12),
    marginTop: mvs(5),
  },
});

export default CustomTextInput;
