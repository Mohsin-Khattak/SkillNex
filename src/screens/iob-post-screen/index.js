import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CheckBoxIconSvg, FillRadioBtnSvg} from '../../assets/icons/user';
import {CompanyLogo} from '../../assets/images';
import BackHeader from '../../components/atoms/headers/back-header';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import Line from '../../components/atoms/line';
import {Row} from '../../components/atoms/row';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const JobPostScreen = () => {
  const insets = useSafeAreaInsets();
  const [checkedItems, setCheckedItems] = useState({
    technicalSkills: false,
    certification: false,
    proficiencies: false,
  });

  const toggleCheckbox = key => {
    setCheckedItems(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader name="Sadruddin" date="Today Jan 27" />
      <KeyboardAvoidScrollview>
        <Row>
          <View style={styles.header}>
            <Text style={styles.title}>Highspeed Studios</Text>
            <Text style={styles.position}>Senior Software Engineer</Text>
            <Text style={styles.applyBy}>Apply By: 15 Nov 2024</Text>
          </View>
          <View>
            <Image source={CompanyLogo} />
            <View style={styles.jobTypeContainer}>
              <Text style={styles.jobType}>Fulltime</Text>
            </View>
          </View>
        </Row>
        <Line marginVertical={4} />
        <Text style={styles.location}>
          Location:<Text style={{color: colors.black}}> Medan, Indonesia</Text>
        </Text>

        <View style={styles.section}>
          <Bold label={'Job Requirement'} style={styles.sectionTitle} />
          <Regular
            style={styles.text}
            label={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Interview Questions:</Text>
          {[
            'Sed ut perspiciatis unde omnis',
            'Doloremque laudantium',
            'Ipsa quae ab illo inventore',
            'Architecto beatae vitae dicta',
          ].map((question, index) => (
            <Text key={index} style={styles.listItem}>
              <FillRadioBtnSvg /> {'  ' + question}
            </Text>
          ))}
        </View>
        <Line marginVertical={10} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Description:</Text>
          <Regular
            style={styles.text}
            label={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Baseline Criteria:</Text>
          {[
            {key: 'technicalSkills', label: 'Technical skills'},
            {key: 'certification', label: 'Certification'},
            {key: 'proficiencies', label: 'Proficiencies relevant to the job'},
          ].map(item => (
            <TouchableOpacity
              key={item.key}
              style={styles.checkboxItem}
              onPress={() => toggleCheckbox(item.key)}>
              <Text style={styles.checkboxText}>
                {<CheckBoxIconSvg />} {'  ' + item.label}
                {/* {checkedItems[item.key] ? '☑' : '☐'} {item.label} */}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <PrimaryButton label="Publish" textStyle={styles.buttonText} />
      </KeyboardAvoidScrollview>
    </View>

  );
};

export default JobPostScreen;
