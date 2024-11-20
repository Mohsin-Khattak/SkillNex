import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gradientContainer: {
    flex: 0,
    borderBottomRightRadius: mvs(30),
    borderBottomLeftRadius: mvs(30),
    height: mvs(500),
    marginBottom: mvs(50),
  },
  img: {
    height: mvs(265),
    width: mvs(239),
    marginTop: mvs(100),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  userTypeText: {
    marginTop: mvs(20),
    width: mvs(230),
    paddingHorizontal: mvs(20),
    fontSize: 36,
  },
  candidateBtn: {
    marginHorizontal: mvs(20),
    borderRadius: mvs(50),
    marginBottom: mvs(20),
  },
  candidateTxt: {
    color: colors.white,
  },
  recruiterBtn: {
    marginHorizontal: mvs(20),
    borderRadius: mvs(50),
    backgroundColor: colors.white,
    borderWidth: mvs(1.5),
    borderColor: colors.secondary,
  },
  recruiterTxt: {
    color: colors.black,
  },
});
export default styles;
