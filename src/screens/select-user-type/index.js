import React from 'react';
import {Image, View} from 'react-native';
import {SelectUser} from '../../assets/images';
import GradientBackground from '../../components/atoms/linear-gradient';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import styles from './styles';

const SelectUserType = ({navigation}) => {
  return (
    <View style={styles.container}>
      <GradientBackground
        colors={['#00A4CC', '#0047AB']}
        style={styles.gradientContainer}>
        <Image source={SelectUser} style={styles.img} />
        <Bold
          label={'Select a User Type:'}
          color={colors.white}
          style={styles.userTypeText}
        />
      </GradientBackground>
      <PrimaryButton
        onclick={() => navigation.replace('SignUpOrLogin')}
        label="Candidate"
        height={56}
        style={styles.candidateBtn}
        textStyle={styles.candidateTxt}
      />
      <PrimaryButton
        onclick={() => navigation.replace('SignUpOrLogin')}
        label="Recruiter"
        height={56}
        style={styles.recruiterBtn}
        textStyle={styles.recruiterTxt}
      />
    </View>
  );
};

export default SelectUserType;
