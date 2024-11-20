import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: mvs(36),
    fontWeight: 'bold',
    marginTop: mvs(38),
    marginBottom: mvs(79),
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
  loginText: {
    textAlign: 'center',
    color: colors.grey,
    marginTop: mvs(28),
  },
  candidateBtn: {
    borderRadius: mvs(50),
    marginVertical: mvs(50),
  },
  candidateTxt: {
    color: colors.white,
  },
});
export default styles;
