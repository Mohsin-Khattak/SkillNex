import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs, width} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: mvs(36),
    fontWeight: 'bold',
    marginTop: mvs(38),
    marginBottom: mvs(10),
    width: mvs(200),
  },
  orText: {
    textAlign: 'center',
    marginVertical: mvs(20),
    color: colors.grey,
  },
  linkedinButton: {
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  linkedinButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  forgetTxt: {
    fontSize: 12,
    color: colors.green,
    textAlign: 'right',

    width: width - mvs(60),
    marginTop: mvs(10),
    marginBottom: mvs(30),
  },
  loginBtn: {
    borderRadius: mvs(50),
    marginBottom: mvs(15),
  },
  candidateTxt: {
    color: colors.white,
  },
});
export default styles;
