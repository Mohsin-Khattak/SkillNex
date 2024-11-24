import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {Row} from '../../atoms/row';
import Bold from '../../carts/bold';
import {mvs} from '../../../config/metrices';
import PrimaryButton from '../../carts/button';
import Regular from '../../../typography/regular-text';
import {colors} from '../../../config/colors';
import {CheckCircle, GoogleCard} from '../../../assets/images';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {navigate} from '../../../navigation/navigation-ref';
const JobBoardCard = ({item, style, onPress, ...props}) => {
  return (
    <View style={{...styles.container}}>
      <Row style={{alignItems: 'center'}}>
        <View style={{flex: 1, marginRight: mvs(10)}}>
          <Bold label="Senior Backend Developer" style={{fontSize: mvs(14)}} />
          <Row
            style={{
              justifyContent: 'flex-start',
              marginTop: mvs(14),
              alignItems: 'center',
            }}>
            <Row
              style={{
                width: mvs(150),
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: mvs(5),
              }}>
              <Image source={GoogleCard} />
              <Regular fontSize={12} label={'Google'} />
            </Row>
            <Row style={{justifyContent: 'flex-start', gap: 5}}>
              <Image style={{width: 12, height: 12}} source={CheckCircle} />
              <Regular fontSize={12} color={colors.green} label={'Active'} />
            </Row>
          </Row>
          <Row style={{justifyContent: 'flex-start', gap: mvs(5)}}>
            <EvilIcons size={mvs(12)} name={'location'} color={colors.black} />
            <Regular fontSize={12} label={'Lisbon, Portugal'} />
          </Row>
        </View>

        <PrimaryButton
          onclick={() => navigate('CandidateJobDescription')}
          textStyle={styles.applyTextStyle}
          width={75}
          height={35}
          label="Apply"
        />
      </Row>
    </View>
  );
};

export default React.memo(JobBoardCard);
