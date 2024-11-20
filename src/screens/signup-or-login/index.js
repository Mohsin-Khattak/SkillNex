import React from 'react';
import {View} from 'react-native';
import {LogoSvg} from '../../assets/icons/user';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import Regular from '../../typography/regular-text';
import styles from './styles';

const SignUpOrLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LogoSvg color={colors.primary} />

      <Regular
        style={styles.descTxt}
        label={
          'Master Your Interviews with Real-Time Feedback, Confidence Building, and Recruiter Connections Using SkillNex'
        }
      />
      <View style={{width: '100%'}}>
        <PrimaryButton
          onclick={() => navigation.replace('SignIn')}
          label="Log In"
          height={56}
          style={styles.loginBtn}
          textStyle={styles.loginTxt}
        />
        <PrimaryButton
          onclick={() => navigation.replace('SignUp')}
          label="Sign Up"
          height={56}
          style={styles.signupBtn}
          textStyle={styles.signupTxt}
        />
      </View>
    </View>
  );
};

export default SignUpOrLogin;
