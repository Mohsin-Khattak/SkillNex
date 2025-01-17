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
import BetterLuckModal from '../../../components/molicules/modals/betterLuckModal';
import FeedbackReportTwoModal from '../../../components/molicules/modals/feedbackReportTwoModal';
import {navigate} from '../../../navigation/navigation-ref';
const MettingScreen = props => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const [congratulationModal, setCongratulationModal] = useState(false);
  const [betterluckModal, setBetterluckModal] = useState(false);
  const [visibleReport, setVisibleReport] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <MeetingHeader name="Ui/UX Designs" />
      <View style={{flex: 1}}>
        <Image source={MettingPic} style={{width: '100%', height: '100%'}} />
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
      </View>

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
        <TouchableOpacity
          onPress={() => setVisibleReport(true)}
          style={{alignItems: 'center'}}>
          <Feather name="video-off" size={24} color={'white'} />
          <Regular
            label={'Start video'}
            fontSize={mvs(12)}
            color={colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBetterluckModal(true)}
          style={{alignItems: 'center'}}>
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
        onPress={() => {
          navigate('FeedbackReportRecruiter');
          setVisible(false);
        }}
        visible={visible}
      />
      <CongratulationModal
        onClose={() => setCongratulationModal(false)}
        visible={congratulationModal}
      />
      <BetterLuckModal
        onClose={() => setBetterluckModal(false)}
        visible={betterluckModal}
      />
      <FeedbackReportTwoModal
        onClose={() => setVisibleReport(false)}
        visible={visibleReport}
      />
    </View>
  );
};

export default MettingScreen;
