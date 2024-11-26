import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { pick, types } from 'react-native-document-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import { UploadIconSvg } from '../../../assets/icons/user';
import BackHeader from '../../../components/atoms/headers/back-header';
import { KeyboardAvoidScrollview } from '../../../components/atoms/keyboard-avoid-scrollview';
import PrimaryButton from '../../../components/carts/button';
import { colors } from '../../../config/colors';
import styles from './styles';

const validationSchema = Yup.object().shape({
  education: Yup.string().required('Education is required'),
  experience: Yup.number()
    .typeError('Experience must be a number')
    .positive('Experience must be positive')
    .required('Experience is required'),
  current_job_title: Yup.string().required('Current job title is required'),
  field: Yup.string().required('Field is required'),
});

const CandidateEditProfile = () => {
  const [fileName, setFileName] = useState('');
  const [editable, setEditable] = useState(false);

  const handleFileUpload = () => {
    pick({
      allowMultiSelection: false,
      type: [types.pdf, types.docx],
    })
      .then(res => {
        if (res.length > 0) {
          console.log('Selected files:', res);
          setFileName(res[0].name || '');
        }
      })
      .catch(err => {
        if (err && err.message === 'User canceled the picker') {
          console.log('User canceled the picker');
        } else {
          console.error('Error picking document:', err);
          // Alert.alert('An unknown error occurred while picking files.');
        }
      });
  };
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidScrollview contentContainerStyle={{paddingHorizontal: 0}}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />

      <Formik
        initialValues={{
          education: '',
          experience: '',
          current_job_title: '',
          field: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('Form data:', values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <BackHeader name="Sadruddin" date="Today   Jan 27" />

            <View style={styles.contentContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.title}>Profile</Text>
                <TouchableOpacity
                  onPress={() => setEditable(f => !f)}
                  style={styles.editButton}>
                  <Text style={styles.editButtonText}>
                    {editable ? 'Save' : 'Edit'}
                  </Text>
                </TouchableOpacity>
              </View>

              {[
                {
                  label: 'Education',
                  name: 'education',
                  placeholder: 'Education',
                },
                {
                  label: 'Experience',
                  name: 'experience',
                  placeholder: 'Experience',
                },
                {
                  label: 'Current Job Title',
                  name: 'current_job_title',
                  placeholder: 'Head of desgin',
                },
                {
                  label: 'Preferred Field',
                  name: 'field',
                  placeholder: 'UI/UX Designing',
                },
              ].map((item, index) => (
                <View key={index} style={styles.inputContainer}>
                  <Text style={styles.label}>{item.label}</Text>
                  <TextInput
                    editable={editable}
                    style={styles.input}
                    placeholder={item.placeholder}
                    placeholderTextColor={colors.grey}
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                  />
                  {errors[item.name] && touched[item.name] && (
                    <Text style={styles.errorText}>{errors[item.name]}</Text>
                  )}
                </View>
              ))}

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Upload CV</Text>
                <TouchableOpacity
                  disabled={!editable}
                  style={styles.uploadContainer}
                  onPress={handleFileUpload}>
                  <UploadIconSvg />
                  <Text style={styles.uploadText}>
                    {fileName || 'Browse file'}
                  </Text>
                </TouchableOpacity>
              </View>
              <PrimaryButton
                onPress={handleSubmit}
                label="Submit"
                style={styles.submitButton}
                textStyle={styles.submitButtonText}
              />
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidScrollview>
  );
};

export default CandidateEditProfile;
