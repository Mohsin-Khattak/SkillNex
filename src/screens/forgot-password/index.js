import {Formik} from 'formik';
import React from 'react';
import {Platform, Text, View} from 'react-native';
import * as Yup from 'yup';
import {
  CurrentJobIconSvg,
  LockIconSvg,
  MailIconSvg,
  NameIconSvg,
  OpenEyeIconSvg,
  UserIDIconSvg,
} from '../../assets/icons/user';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import PrimaryButton from '../../components/carts/button';
import CustomTextInput from '../../components/carts/customTextInput';
import {LinkedInCard} from '../../components/molicules/linkedin-card';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email Address is required'),
});

const ForgotPassword = ({navigation}) => {
  const handleFormSubmit = values => {
    console.log('Form Values:', values);
  };
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidScrollview>
      <View style={{paddingTop: Platform.OS === 'ios' ? insets.top : 0}} />

      <Formik
        initialValues={{
          email: '',
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
            <Bold label={'Forgot Password?'} style={styles.title} />

            <CustomTextInput
              leftIcon={<MailIconSvg />}
              placeholder="Email Address"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
            />

            <Text
              style={{
                fontSize: 12,
                color: colors.red,
                marginLeft: 10,
                width: 280,
                marginVertical: 26,
              }}>
              *
              <Text
                style={{
                  fontSize: 12,
                  color: colors.grey,
                }}>
                {' '}
                We will send you a message to set or reset your new password
              </Text>
            </Text>
            <PrimaryButton
              onclick={() => navigation.navigate('SignIn')}
              label="Submit"
              height={56}
              style={styles.candidateBtn}
              textStyle={styles.candidateTxt}
            />
          </View>
        )}
      </Formik>
    </KeyboardAvoidScrollview>
  );
};

export default ForgotPassword;
