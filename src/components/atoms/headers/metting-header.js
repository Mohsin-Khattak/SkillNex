import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BackIconSvg from '../../../assets/icons/user/back-icon-svg';
import {Profile, Time} from '../../../assets/images';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {Row} from '../row';
import {useNavigation} from '@react-navigation/native';
import BackIconTwoSvg from '../../../assets/icons/user/back-icon-two-svg';

const MeetingHeader = ({name = 'abid', date = 'Today Jan 27', back = true}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Row style={{gap: 10}}>
        {back && (
          <TouchableOpacity
            style={{
              width: mvs(30),
              height: mvs(30),
              borderRadius: mvs(15),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => navigation.goBack()}>
            <BackIconTwoSvg stroke={colors.black} width={15} height={15} />
          </TouchableOpacity>
        )}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
        </View>
      </Row>
      <Image source={Time} style={{width: 75, height: 25}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(9),
    backgroundColor: colors.primary,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: mvs(41),
    height: mvs(41),
    borderRadius: mvs(20),
    marginRight: mvs(8),
  },
  userName: {
    color: colors.white,
    fontSize: mvs(14),
    fontWeight: '400',
  },
  dateView: {
    padding: mvs(7),
    borderWidth: mvs(2),
    borderColor: colors.primary2,
    borderRadius: mvs(3),
  },
  date: {
    color: colors.white,
    fontSize: mvs(14),
  },
});

export default MeetingHeader;
