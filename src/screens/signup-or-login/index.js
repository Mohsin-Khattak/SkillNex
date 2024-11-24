import React from 'react';
import {StatusBar, View} from 'react-native';
import {LogoSvg} from '../../assets/icons/user';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import Regular from '../../typography/regular-text';
import styles from './styles';
import {navigate} from '../../navigation/navigation-ref';

const SignUpOrLogin = props => {
  const userType = props?.route?.params?.userType;
  console.log(userType);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <LogoSvg color={colors.primary} />

      <Regular
        style={styles.descTxt}
        label={
          'Master Your Interviews with Real-Time Feedback, Confidence Building, and Recruiter Connections Using SkillNex'
        }
      />
      <View style={{width: '100%'}}>
        <PrimaryButton
          onclick={() => navigate('SignIn', {userType: userType})}
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
