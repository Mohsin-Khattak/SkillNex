import {Formik} from 'formik';
import React, {useState} from 'react';
import {Platform, StatusBar, Text, View} from 'react-native';
import * as Yup from 'yup';
import {
  CurrentJobIconSvg,
  LockIconSvg,
  MailIconSvg,
  NameIconSvg,
  OpenEyeIconSvg,
  UserIDIconSvg,
} from '../../assets/icons/user';
import CountryIconSvg from '../../assets/icons/user/country-icon-svg';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import PrimaryButton from '../../components/carts/button';
import CustomTextInput from '../../components/carts/customTextInput';
import {LinkedInCard} from '../../components/molicules/linkedin-card';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  jobTitle: Yup.string().required('This field is required'),
  userId: Yup.string().required('User ID is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUp = ({navigation}) => {
  const [candidate, setCandidate] = useState(true);
  const handleFormSubmit = values => {
    console.log('Form Values:', values);
  };
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidScrollview>
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom : 0,
        }}>
        <Formik
          initialValues={{
            fullName: '',
            jobTitle: '',
            userId: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.container}>
              <Bold label={'Create Account'} style={styles.title} />

              <CustomTextInput
                leftIcon={<NameIconSvg />}
                placeholder={candidate ? 'Full Name' : 'Recruiter Name'}
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                error={touched.fullName && errors.fullName}
              />

              <CustomTextInput
                leftIcon={
                  candidate ? <CurrentJobIconSvg /> : <CountryIconSvg />
                }
                placeholder={candidate ? 'Current Job Title' : 'Country'}
                value={values.jobTitle}
                onChangeText={handleChange('jobTitle')}
                onBlur={handleBlur('jobTitle')}
                error={touched.jobTitle && errors.jobTitle}
              />

              <CustomTextInput
                leftIcon={<UserIDIconSvg />}
                placeholder="User ID"
                value={values.userId}
                onChangeText={handleChange('userId')}
                onBlur={handleBlur('userId')}
                error={touched.userId && errors.userId}
              />

              <CustomTextInput
                leftIcon={<MailIconSvg />}
                placeholder={
                  !candidate ? 'Email Address' : 'Company Email Address'
                }
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
              />

              <CustomTextInput
                leftIcon={<LockIconSvg />}
                rightIcon={<OpenEyeIconSvg />}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
                error={touched.password && errors.password}
              />

              <CustomTextInput
                leftIcon={<LockIconSvg />}
                rightIcon={<OpenEyeIconSvg />}
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                secureTextEntry
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: colors.grey,
                  marginLeft: 10,
                  width: 280,
                  marginVertical: 5,
                }}>
                By clicking the
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.green,
                  }}>
                  {' '}
                  Register{' '}
                  <Text style={{fontSize: 12, color: colors.grey}}>
                    button, you agree to the public offer
                  </Text>
                </Text>
              </Text>
              <PrimaryButton
                onclick={() => navigation.replace('RecruitmentDashboard')}
                label="Create Account"
                height={56}
                style={styles.signupBtn}
                textStyle={styles.signupTxt}
              />
              <LinkedInCard
                onPress={() => navigation.navigate('SignIn')}
                onLinkedinPress={() => {}}
                text1={'I Already Have an Account'}
                text2={'Login'}
              />
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidScrollview>
  );
};

export default SignUp;
