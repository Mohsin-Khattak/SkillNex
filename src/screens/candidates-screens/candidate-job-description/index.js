import React, {useState} from 'react';
import {Image, Platform, View} from 'react-native';
import BackHeader from '../../../components/atoms/headers/back-header';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Bold from '../../../typography/bold-text';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DotedLine, NiraLogo} from '../../../assets/images';
import SemiBold from '../../../typography/semi-bold-text';
import Regular from '../../../typography/regular-text';

const CandidateJobDescription = props => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader name="Sadruddin" date="Today   Jan 27" />
      <View style={styles.card}>
        <Image
          style={{width: mvs(41), height: mvs(41), borderRadius: mvs(11)}}
          source={NiraLogo}
        />
        <SemiBold
          fontSize={mvs(15)}
          style={{fontWeight: '600', marginTop: mvs(8)}}
          label={'Graphic Designer'}
        />
        <Regular
          label={'Poler Web-design'}
          fontSize={mvs(12)}
          style={{marginTop: mvs(3)}}
          color={colors.brown}
        />
        <Image source={DotedLine} style={{width: 246}} />
      </View>
    </View>
  );
};

export default CandidateJobDescription;
