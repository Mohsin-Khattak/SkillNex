import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {ModalWrapper} from '../../atoms/modal-wrapper';
import {CrossIcon, flag} from '../../../assets/images';
import Bold from '../../carts/bold';
import {Row} from '../../atoms/row';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SemiBold from '../../../typography/semi-bold-text';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Regular from '../../../typography/regular-text';
import PrimaryButton from '../../carts/button';
import Medium from '../../../typography/medium-text';

const FeedbackReportTwoModal = ({
  style,
  visible = false,
  onPress,
  loading,
  onClose = item => {},
}) => {
  const data = [
    {
      id: 1,
      title: '1',
      flag: false,
    },
    {
      id: 2,
      title: '2',
      flag: false,
    },
    {
      id: 3,
      title: '3',
      flag: false,
    },
    {
      id: 4,
      title: '4',
      flag: true,
    },
  ];
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={{...styles.contentContainerStyle, style}}>
      <View style={styles.innerContainer}>
        <Bold style={{fontSize: 24}} color={colors.white} label="Progress" />
        <Regular
          fontSize={mvs(14)}
          color={colors.halfWhite}
          label={'GOOD JOB!'}
        />
        <Row style={{marginTop: mvs(24)}}>
          <View style={{width: '40%'}}>
            <Regular color={colors.halfWhite} label={'Interview Score'} />
            <Medium
              style={{marginTop: mvs(5)}}
              color={colors.white}
              fontSize={mvs(20)}
              label={'8'}>
              <Regular
                fontSize={mvs(12)}
                label={'     /10'}
                color={colors.halfWhite}
              />
            </Medium>
          </View>
          <View style={{width: '40%'}}>
            <Regular color={colors.halfWhite} label={'Confidence Level'} />
            <Medium
              style={{marginTop: mvs(5)}}
              color={colors.white}
              fontSize={mvs(20)}
              label={'6'}>
              <Regular
                fontSize={mvs(12)}
                label={'     /10'}
                color={colors.halfWhite}
              />
            </Medium>
          </View>
        </Row>
        <Regular
          style={{marginTop: mvs(23)}}
          label={'Communication Skills'}
          color={colors.halfWhite}
        />
        <Medium
          style={{marginTop: mvs(5)}}
          label={'Excellent'}
          fontSize={mvs(14)}
          color={colors.white}
        />
        <Regular
          style={{marginTop: mvs(10)}}
          label={'Technical Competency'}
          color={colors.halfWhite}
        />
        <Medium
          style={{marginTop: mvs(5)}}
          label={'Solid foundations'}
          fontSize={mvs(14)}
          color={colors.white}
        />
        <Regular
          style={{marginTop: mvs(10), textAlign: 'center'}}
          label={'View Previous Interviews'}
          color={colors.white}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: mvs(5),
            paddingHorizontal: mvs(20),
            marginTop: mvs(10),
          }}>
          {data.map((item, index) => (
            <Row
              key={item.id}
              style={{
                ...styles.numberContainer,
                backgroundColor: item?.flag ? colors.primary : colors.halfWhite,
              }}>
              <Regular
                label={item.title} // Trimming any extra spaces
                color={item?.flag ? colors.white : colors.brown}
                fontSize={mvs(10)}
              />
            </Row>
          ))}
        </View>
        <PrimaryButton label="View More Details" style={{marginTop: mvs(30)}} />
      </View>

      <Medium
        style={{textAlign: 'center', marginVertical: mvs(8)}}
        fontSize={mvs(16)}
        label={'or'}
        color={colors.white}
      />
      <PrimaryButton
        textStyle={{color: colors.primary}}
        style={{marginHorizontal: mvs(20), backgroundColor: colors.white}}
      />
    </ModalWrapper>
  );
};
export default FeedbackReportTwoModal;
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
    backgroundColor: '#2F2F42',
    borderRadius: mvs(8),
    paddingVertical: mvs(26),
    marginHorizontal: mvs(20),
    paddingHorizontal: mvs(20),
  },
  numberContainer: {
    gap: mvs(5),
    width: mvs(28),
    height: mvs(28),

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mvs(14),
  },
});
