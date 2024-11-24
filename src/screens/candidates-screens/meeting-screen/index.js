import React, {useState} from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Frontcamera, MettingPic} from '../../../assets/images';
import MeetingHeader from '../../../components/atoms/headers/metting-header';
import {Row} from '../../../components/atoms/row';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Regular from '../../../typography/regular-text';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FeedbackReportModal from '../../../components/molicules/modals/feedbackReportModal';
import CongratulationModal from '../../../components/molicules/modals/congratulationsModal';
const MettingScreen = props => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const [congratulationModal, setCongratulationModal] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <MeetingHeader name="Ui/UX Designs" />
      <Image source={MettingPic} style={{width: '100%', height: '84%'}} />
      <Image
        source={Frontcamera}
        style={{
          width: mvs(143),
          height: mvs(174),
          position: 'absolute',
          bottom: '12%',
          right: 10,
        }}
      />
      <Row
        style={{
          width: '100%',
          height: mvs(78),
          backgroundColor: colors.primary,
          paddingHorizontal: mvs(20),
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <FontAwesome name="microphone-slash" size={24} color={'white'} />
          <Regular label={'Unmute'} fontSize={mvs(12)} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Feather name="video-off" size={24} color={'white'} />
          <Regular
            label={'Start video'}
            fontSize={mvs(12)}
            color={colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="record-circle-outline"
            size={24}
            color={'white'}
          />
          <Regular
            label={'Record video'}
            fontSize={mvs(12)}
            color={colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCongratulationModal(true)}
          style={{
            alignItems: 'center',
            height: mvs(35),
            width: mvs(70),
            backgroundColor: colors.red,
            borderRadius: mvs(7),
          }}>
          <Regular
            style={{textAlign: 'center'}}
            label={'Leave meeting'}
            fontSize={mvs(12)}
            color={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{alignItems: 'center'}}>
          <Entypo name="dots-three-horizontal" size={24} color={'white'} />
          <Regular label={'More'} fontSize={mvs(12)} color={colors.white} />
        </TouchableOpacity>
      </Row>
      <FeedbackReportModal
        onClose={() => setVisible(false)}
        visible={visible}
      />
      <CongratulationModal
        onClose={() => setCongratulationModal(false)}
        visible={congratulationModal}
      />
    </View>
  );
};

export default MettingScreen;
