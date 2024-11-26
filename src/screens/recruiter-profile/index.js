import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Alert,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {pick, types} from 'react-native-document-picker';
import * as Yup from 'yup';
import {UploadIconSvg} from '../../assets/icons/user';
import BackHeader from '../../components/atoms/headers/back-header';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack} from '../../navigation/navigation-ref';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  fieldOfStudy: Yup.string().required('Study field is required'),
  yearsOfExperience: Yup.number()
    .typeError('Must be a number')
    .positive('Must be positive')
    .required('Experience is required'),
  linkedinProfile: Yup.string().url('Invalid URL').required('Link is required'),
});

const RecruiterProfile = props => {
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
          Alert.alert('An unknown error occurred while picking files.');
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
          email: '',
          fieldOfStudy: '',
          yearsOfExperience: '',
          linkedinProfile: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('Form Values:', values);
          goBack();
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
                  <Text style={styles.editButtonText}>{editable?'Save': 'Edit'}</Text>
                </TouchableOpacity>
              </View>

              {[
                {
                  label: 'Email Address',
                  name: 'email',
                  placeholder: 'Email Address',
                },
                {
                  label: 'Field of Study',
                  name: 'fieldOfStudy',
                  placeholder: 'Field of Study',
                },
                {
                  label: 'Years of Relevant Experience',
                  name: 'yearsOfExperience',
                  placeholder: 'Years of Experience',
                },
                {
                  label: 'LinkedIn Profile',
                  name: 'linkedinProfile',
                  placeholder: 'www.xdfnm.com',
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
                <Text style={styles.label}>Portfolio Samples</Text>
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
                onclick={handleSubmit}
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

export default RecruiterProfile;
