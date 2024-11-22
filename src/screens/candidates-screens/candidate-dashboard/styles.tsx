import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: mvs(1),
  },
  preOnActiveBtn: {
    width: '50%',
    borderRadius: 0,
    height: mvs(56),
    backgroundColor: colors.primary,
  },
  preOnInActiveBtn: {
    borderRadius: 0,
    width: '50%',
    height: mvs(56),
    backgroundColor: colors.gray,
  },
  activeTxt: {
    color: colors.white,
    borderBottomWidth: mvs(2),
    borderBottomColor: colors.white,
  },
  inActiveTxt: {color: colors.black},
  startedText: {
    marginHorizontal: mvs(60),
    fontSize: mvs(32),
    textAlign: 'center',
    marginTop: mvs(84),
  },
  contentText: {
    marginHorizontal: mvs(28),
    marginTop: mvs(41),
    fontSize: mvs(14),
    lineHeight: mvs(17.64),
    color: colors.black,
    textAlign: 'center',
  },
  startImage: {
    width: mvs(143),
    height: mvs(143),
    alignSelf: 'center',
    marginTop: mvs(43),
    borderRadius: mvs(71),
  },
  realtimeBtn: {
    marginHorizontal: mvs(24),
    backgroundColor: colors.white,
    borderWidth: mvs(1),
    borderBlockColor: colors.primary,
  },
  txtBtn: {fontSize: mvs(14), fontFamily: fonts.bold, fontWeight: 'bold'},
});
export default styles;
