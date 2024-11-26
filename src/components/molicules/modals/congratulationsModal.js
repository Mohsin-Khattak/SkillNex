import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {ModalWrapper} from '../../atoms/modal-wrapper';
import {CongratesImage} from '../../../assets/images';
import LottieLoader from '../../../assets/icons/lottie/lottie-loader.json';
import LottieView from 'lottie-react-native';

const CongratulationModal = ({
  style,
  visible = false,
  onPress,
  loading,
  onClose = item => {},
}) => {
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={{...styles.contentContainerStyle, style}}>
      <View style={styles.innerContainer}>
        <Image
          style={{width: '100%', height: 373, borderRadius: 10}}
          source={CongratesImage}
        />
        <View style={styles.loaderContainer}>
          <LottieView
            source={LottieLoader}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      </View>
    </ModalWrapper>
  );
};
export default CongratulationModal;
const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    height: mvs(120),
    bottom: mvs(0),
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F5F9FF',
  },
  lottie: {
    height: mvs(40),
    width: mvs(40),
  },
  contentContainerStyle: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    paddingVertical: 0,
    // paddingHorizontal: mvs(20),
  },
  innerContainer: {
    width: mvs('100%'),
    height: mvs(450),
    backgroundColor: '#F5F9FF',
    borderRadius: mvs(8),
    marginHorizontal: mvs(20),
    paddingTop: mvs(20),
    paddingBottom: mvs(20),
    borderRadius: mvs(30),
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
