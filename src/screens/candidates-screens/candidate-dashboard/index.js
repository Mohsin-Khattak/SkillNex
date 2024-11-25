import React, {useState} from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PrimaryButton from '../../../components/carts/button';
import {colors} from '../../../config/colors';
import BackHeader from '../../../components/atoms/headers/back-header';
import styles from './styles';
import SemiBold from '../../../typography/semi-bold-text';
import {mvs} from '../../../config/metrices';
import Regular from '../../../typography/regular-text';
import {StartTime} from '../../../assets/images';
import { navigate } from '../../../navigation/navigation-ref';

const CandidateDashboard = props => {
  const insets = useSafeAreaInsets();
  const [flag, setFlag] = useState('Practice');

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader name="Sadruddin" date="Today   Jan 27" />
      <View style={styles.btnContainer}>
        <PrimaryButton
          onclick={() => setFlag('Practice')}
          style={
            flag == 'Practice' ? styles.preOnActiveBtn : styles.preOnInActiveBtn
          }
          label="Practice"
          textStyle={flag == 'Practice' ? styles.activeTxt : styles.inActiveTxt}
        />
        <PrimaryButton
          onclick={() => setFlag('Recruitment')}
          style={
            flag == 'Recruitment'
              ? styles.preOnActiveBtn
              : styles.preOnInActiveBtn
          }
          label="Recruitment"
          textStyle={
            flag == 'Recruitment' ? styles.activeTxt : styles.inActiveTxt
          }
        />
      </View>
      <SemiBold
        style={styles.startedText}
        label={'Get Started with Practice'}
      />
      <Regular
        style={styles.contentText}
        label={
          'Welcome to the starting line of your interview prep! Here, we’ll help you kick off the right way—through focused practice and self-evaluation.'
        }
      />
      <TouchableOpacity onPress={() => navigate('MettingScreen')}>
        <Image source={StartTime} style={styles.startImage} />
      </TouchableOpacity>
      <PrimaryButton
        style={styles.realtimeBtn}
        color={colors.primary}
        textStyle={styles.txtBtn}
        label="Real Time Feedback and Reports"
      />
    </View>
  );
};

export default CandidateDashboard;
