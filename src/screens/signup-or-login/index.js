import React from 'react';
import { StatusBar, View } from 'react-native';
import { LogoSvg } from '../../assets/icons/user';
import { BackCircle } from '../../components/atoms/headers/back-circle';
import PrimaryButton from '../../components/carts/button';
import { colors } from '../../config/colors';
import { navigate } from '../../navigation/navigation-ref';
import Regular from '../../typography/regular-text';
import styles from './styles';

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
      <BackCircle />
      <View style={styles.body}>
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
            onclick={() => navigate('SignUp', {userType: userType})}
            label="Sign Up"
            height={56}
            style={styles.signupBtn}
            textStyle={styles.signupTxt}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpOrLogin;
