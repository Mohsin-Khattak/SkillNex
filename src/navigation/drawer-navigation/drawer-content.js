import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {PrivacyPolicy} from '../../assets/icons';
import {logoNew} from '../../assets/images';
import {Row} from '../../components/atoms/row';
import Regular from '../../typography/regular-text';
import {colors} from '../../config/colors';
import {mvs} from '../../assets/metrices';
const CustomDrawerContent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoNew} style={{height: mvs(70), width: mvs(55)}} />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Row style={styles.row}>
          <PrivacyPolicy />
          <Regular style={styles.title} label={'privacy_policy'} />
        </Row>
      </TouchableOpacity>
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary2,
  },

  header: {
    height: mvs(150),
    backgroundColor: colors.primary,
    marginBottom: mvs(48.5),
    borderBottomLeftRadius: mvs(15),
    borderBottomRightRadius: mvs(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {justifyContent: 'flex-start', alignItems: 'center'},
  title: {marginLeft: mvs(10), color: colors.primary, fontSize: mvs(16)},
  language: {marginLeft: mvs(10), color: colors.primary, fontSize: mvs(20)},
  content: {color: colors.primary, fontSize: mvs(20), marginTop: mvs(30)},
  mtop21: {marginTop: mvs(21)},
});
