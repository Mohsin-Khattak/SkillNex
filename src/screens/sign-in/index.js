import { Formik } from 'formik';
import React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import {
  CurrentJobIconSvg,
  LockIconSvg,
  MailIconSvg,
  NameIconSvg,
  OpenEyeIconSvg,
} from '../../assets/icons/user';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import PrimaryButton from '../../components/carts/button';
import CustomTextInput from '../../components/carts/customTextInput';
import { LinkedInCard } from '../../components/molicules/linkedin-card';
import { navigate } from '../../navigation/navigation-ref';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import styles from './styles';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  userId: Yup.string().required('User ID is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = props => {
    const isCandidate = props.route?.params?.userType === 'candidate';

  console.log('isCandidate', isCandidate);

  const handleFormSubmit = values => {
    console.log('Form Values:', values);
  };
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidScrollview>
      <Formik
        initialValues={{
          fullName: '',
          userId: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        validateOnBlur
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
            <View
              style={{paddingTop: Platform.OS === 'ios' ? insets.top : 0}}
            />

            <Bold label={'Welcome Back!'} style={styles.title} />
            <CustomTextInput
              leftIcon={<NameIconSvg />}
              placeholder="User ID"
              value={values.userId}
              onChangeText={handleChange('userId')}
              onBlur={handleBlur('userId')}
              error={touched.userId && errors.userId}
            />
            <CustomTextInput
              leftIcon={<CurrentJobIconSvg />}
              placeholder={isCandidate ? 'Candidate Name' : 'Recruiter Name'}
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              error={touched.fullName && errors.fullName}
            />
            <CustomTextInput
              leftIcon={<MailIconSvg />}
              placeholder="Email Address"
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

            <View
              style={{
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                <Regular style={styles.forgetTxt} label={'Forgot Password?'} />
              </TouchableOpacity>
            </View>
            <PrimaryButton
              onclick={() =>
                navigate(isCandidate ? 'Drawer' : 'RecruitmentDashboard')
              }
              label="Login"
              height={56}
              style={styles.loginBtn}
              textStyle={styles.loginText}
            />
            <LinkedInCard
              onPress={() =>
                navigate('SignUp', {userType: props?.route?.params?.userType})
              }
              onLinkedinPress={() => {}}
              text1={'Create an Account'}
              text2={'Sign Up'}
            />
          </View>
        )}
      </Formik>
    </KeyboardAvoidScrollview>
  );
};

export default SignIn;
