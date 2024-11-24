import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {ModalWrapper} from '../../atoms/modal-wrapper';
import {CrossIcon} from '../../../assets/images';
import Bold from '../../carts/bold';
import {Row} from '../../atoms/row';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SemiBold from '../../../typography/semi-bold-text';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Regular from '../../../typography/regular-text';
import PrimaryButton from '../../carts/button';

const FeedbackReportModal = ({
  style,
  visible = false,
  onPress,
  loading,
  onClose = item => {},
}) => {
  const data = [
    {
      id: 1,
      title:
        ' Work with the team to design and iOS mobile applications on Azure using Swift and Objective-C.',
    },
    {
      id: 2,
      title:
        'Understanding, assessing, analysing user requirements and function specification ',
    },
    {
      id: 3,
      title: 'Prepare detail technical specification.',
    },
    {
      id: 4,
      title: 'Function design and implementation for new features. ',
    },
    {
      id: 5,
      title: 'Production maintenance and enhancement',
    },
    {
      id: 6,
      title: 'Prepare test case, conduct the unit test and system test.',
    },
    {
      id: 7,
      title:
        'Communicate with IT PM and user about solution and development progress',
    },
  ];
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={{...styles.contentContainerStyle, style}}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => onClose()}
          style={styles.crossContainer}>
          <Image
            style={{width: mvs(30), height: mvs(30), borderRadius: mvs(15)}}
            source={CrossIcon}
          />
        </TouchableOpacity>
        <View style={{paddingHorizontal: mvs(30), marginTop: mvs(26)}}>
          <Bold label="Senior Backend Engineer" />
          <Row style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={mvs(11)} color={'black'} />
            <SemiBold
              style={{fontWeight: '600'}}
              label={'10 Minutes'}
              color={colors.black}
              fontSize={mvs(10)}
            />
          </Row>
          <Row style={{...styles.timeContainer, marginTop: mvs(10)}}>
            <Fontisto name={'world-o'} size={mvs(11)} color={'black'} />
            <SemiBold
              style={{fontWeight: '600'}}
              label={'English'}
              color={colors.black}
              fontSize={mvs(10)}
            />
          </Row>
        </View>
        <View style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
          <Bold label="Job `Description" color={colors.brown} />
          <Row
            style={{
              flexDirection: 'column',
              gap: mvs(5),
              paddingHorizontal: mvs(20),
              marginTop: mvs(10),
            }}>
            {data.map((item, index) => (
              <Row
                key={item.id}
                style={{justifyContent: 'flex-start', gap: mvs(5)}}>
                <Entypo
                  name={'dot-single'}
                  size={mvs(20)}
                  color={colors.brown}
                />
                <Regular
                  label={item.title} // Trimming any extra spaces
                  color={colors.brown}
                  fontSize={mvs(10)}
                />
              </Row>
            ))}
          </Row>
        </View>
        <PrimaryButton
          style={{marginHorizontal: mvs(20), marginTop: mvs(29)}}
          label="View Feedback Report"
        />
      </View>
    </ModalWrapper>
  );
};
export default FeedbackReportModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: mvs(20),
  },
  innerContainer: {
    width: mvs('100%'),
    backgroundColor: 'white',
    borderRadius: mvs(8),
    paddingVertical: mvs(26),
    marginHorizontal: mvs(20),
  },
  crossContainer: {
    position: 'absolute',
    right: -5,
    top: -8,
    backgroundColor: 'white',
    borderRadius: mvs(15),
  },
  timeContainer: {
    justifyContent: 'flex-start',
    gap: mvs(10),
    alignItems: 'center',
    marginTop: mvs(22),
  },
});
