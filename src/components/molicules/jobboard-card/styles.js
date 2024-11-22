import {StyleSheet} from 'react-native';
import {mvs} from '../../../config/metrices';
import {colors} from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',

    paddingVertical: mvs(16),
    borderRadius: 10,
    marginTop: mvs(14),
    marginRight: mvs(10),
    padding: mvs(10),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  applyTextStyle: {
    fontSize: mvs(14),
    fontWeight: 'bold',
  },
});
export default styles;
