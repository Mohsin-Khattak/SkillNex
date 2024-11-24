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
  jobTitle: {
    height: mvs(23),
    width: mvs(4),
    backgroundColor: colors.primary,
    borderRadius: mvs(2),
  },
  verticalView: {
    justifyContent: 'flex-start',
    gap: 5,
    marginHorizontal: mvs(20),
    marginTop: mvs(28),
  },
  numberContainer: {
    flexDirection: 'column',
    paddingHorizontal: mvs(20),
    marginTop: mvs(10),
  },
});
export default styles;
