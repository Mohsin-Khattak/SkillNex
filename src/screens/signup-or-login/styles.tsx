import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs, width} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
  },
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descTxt: {
    textAlign: 'justify',
    fontSize: mvs(14),
    // width: mvs(250),
    marginVertical: mvs(90),
    paddingHorizontal: mvs(44),
    // lineHeight: mvs(18),
  },
  loginBtn: {
    marginHorizontal: mvs(20),
    borderRadius: mvs(50),
    marginBottom: mvs(20),
  },
  loginTxt: {
    color: colors.white,
  },
  signupBtn: {
    marginHorizontal: mvs(20),
    borderRadius: mvs(50),
    backgroundColor: colors.white,
    borderWidth: mvs(1.5),
    borderColor: colors.secondary,
  },
  signupTxt: {
    color: colors.black,
  },
});
export default styles;
