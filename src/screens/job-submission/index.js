import React, {useState} from 'react';
import {Alert, Platform, Text, TouchableOpacity, View} from 'react-native';
import {pick, types} from 'react-native-document-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {UploadIconSvg} from '../../assets/icons/user';
import BackHeader from '../../components/atoms/headers/back-header';
import {DropdownInput} from '../../components/atoms/input';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import PrimaryButton from '../../components/carts/button';
import CustomTextInput from '../../components/carts/customTextInput';
import {colors} from '../../config/colors';
import styles from './styles';
import {navigate} from '../../navigation/navigation-ref';

const JobSubmission = () => {
  const [fileName, setFileName] = useState('');
  console.log('test logs');

  const handleFileUpload = () => {
    pick({
      allowMultiSelection: false,
      type: [types.pdf, types.docx],
    })
      .then(res => {
        const allFilesArePdfOrDocx = res?.every(file => file.hasRequestedType);

        if (!allFilesArePdfOrDocx) {
          Alert.alert(
            'Invalid File Type',
            'Please select only PDF or DOCX files.',
          );
          return;
        }

        console.log('Selected files:', res);
        addResult(res);
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
  const initialValues = {
    interviewType: '',
    jobTitle: '',
    jobDescription: '',
    language: '',
  };

  const interviewTypes = [
    {id: '1', title: 'React Native'},
    {id: '2', title: 'React Js'},
  ];
  const [interviewType, setInterviewType] = useState({
    value: '',
    blur: false,
    errorMessage: 'Interview type is required',
  });

  const [jobTitle, setJobTitle] = useState({
    value: '',
    blur: false,
    errorMessage: 'Job title is required',
  });

  const [jobDescription, setJobDescription] = useState({
    value: '',
    blur: false,
    errorMessage: 'Job description is required',
  });
  const languages = [
    {id: '1', title: 'English'},
    {id: '1', title: 'Urdu'},
  ];
  const [language, setLanguage] = useState({
    value: '',
    blur: false,
    errorMessage: 'Language is required',
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader name="Sadruddin" date="Today   Jan 27" />
      <KeyboardAvoidScrollview contentContainerStyle={{paddingHorizontal: 0}}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.title}>Practice Session</Text>
            </View>
            <DropdownInput
              onBlur={() => {
                setInterviewType({...interviewType, blur: true});
              }}
              onChangeText={id =>
                setInterviewType({...interviewType, value: id})
              }
              label="Interview Type"
              placeholder="Interview Type"
              items={interviewTypes}
              value={
                interviewTypes.find(x => x.id == interviewType.value)?.title
              }
              error={
                interviewType.blur && !interviewType.value
                  ? interviewType.errorMessage
                  : ''
              }
            />

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{'Job Title'}</Text>
              <CustomTextInput
                label={'dsmkd'}
                style={styles.input}
                placeholder={'UI/UX Designing'}
                placeholderTextColor={colors.grey}
                onChangeText={text => setJobTitle({...jobTitle, value: text})}
                onBlur={() => setJobTitle({...jobTitle, blur: true})}
                value={jobTitle.value}
              />
              {jobTitle.blur && !jobTitle.value && (
                <Text style={styles.errorText}>{jobTitle.errorMessage}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{'Job Description'}</Text>
              <CustomTextInput
                label={'dsmkd'}
                style={styles.input}
                placeholder={'Job Description'}
                placeholderTextColor={colors.grey}
                onChangeText={text =>
                  setJobDescription({...jobDescription, value: text})
                }
                onBlur={() =>
                  setJobDescription({...jobDescription, blur: true})
                }
                value={jobDescription.value}
              />
              {jobDescription.blur && !jobDescription.value && (
                <Text style={styles.errorText}>
                  {jobDescription.errorMessage}
                </Text>
              )}
            </View>

            <DropdownInput
              onBlur={() => {
                setLanguage({...language, blur: true});
              }}
              onChangeText={id => setLanguage({...language, value: id})}
              label="Language"
              placeholder="Language"
              items={languages}
              value={languages.find(x => x.id == language.value)?.title}
              error={
                language.blur && !language.value ? language.errorMessage : ''
              }
            />

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Upload Your Transcript</Text>
              <TouchableOpacity
                style={styles.uploadContainer}
                onPress={handleFileUpload}>
                <UploadIconSvg />
                <Text style={styles.uploadText}>
                  {fileName || 'Drag and drop file here or '}
                  <Text style={styles.browseText}>browse file</Text>
                </Text>
              </TouchableOpacity>
            </View>
            <PrimaryButton
              onclick={() => navigate('MettingScreen')}
              label="Submit"
              style={styles.submitButton}
              textStyle={styles.submitButtonText}
            />
          </View>
        </View>
      </KeyboardAvoidScrollview>
    </View>
  );
};

export default JobSubmission;
