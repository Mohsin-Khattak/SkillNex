import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {LinkedInSvg} from '../../../assets/icons/user';
import {mvs} from '../../../config/metrices';
import {colors} from '../../../config/colors';

export const LinkedInCard = props => {
  const {text1 = '', text2 = '', onLinkedinPress, onPress} = props;
  return (
    <Fragment>
      <Text style={styles.orText}>- OR Continue with -</Text>
      <TouchableOpacity style={styles.linkedinButton} onPress={onLinkedinPress}>
        <LinkedInSvg />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.loginText}>
          {text1}
          <Text
            style={{
              color: colors.green,
              textDecorationLine: 'underline',
              fontWeight: '600',
            }}>
            {' '}
            {text2}
          </Text>
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  orText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
    marginVertical: mvs(20),
    color: colors.grey,
  },
  linkedinButton: {
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },

  loginText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.grey,
    marginTop: mvs(20),
  },
});
