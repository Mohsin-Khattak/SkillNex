import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: mvs(24),
    fontWeight: 'bold',
    marginTop: mvs(10),
    textAlign: 'center',
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
  loginText: {
    textAlign: 'center',
    color: colors.grey,
    marginTop: mvs(28),
  },
  signupBtn: {
    borderRadius: mvs(50),
    marginBottom: mvs(10),
    backgroundColor: colors.white,
    borderWidth: mvs(2.5),
    borderColor: colors.secondary,
  },
  signupTxt: {
    color: colors.black,
  },
});
export default styles;
