import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: mvs(40),
    marginTop: mvs(50),
    borderColor: colors.primary,
    borderWidth: mvs(1),
  },
});
export default styles;
