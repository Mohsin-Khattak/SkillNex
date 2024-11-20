import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    marginBottom: mvs(16),
    flex: 1,
    marginTop: mvs(30),
  },
  title: {
    fontSize: mvs(14),
    fontWeight: '600',
    color: colors.black,
  },
  position: {
    fontSize: mvs(18),
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: mvs(16),
    marginTop: mvs(10),
  },
  applyBy: {
    fontSize: mvs(14),
    color: colors.black,
  },
  jobTypeContainer: {
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(4),
    borderRadius: mvs(20),
    backgroundColor: colors.transparent,
    borderWidth: mvs(1.5),
    alignSelf: 'center',
    marginTop: mvs(10),
    borderColor: '#E1D3FF',
  },
  jobTypeText: {
    fontSize: mvs(14),
    color: '#40189D',
  },
  location: {
    fontSize: mvs(16),
    color: colors.grey,
    marginVertical: mvs(8),
  },
  section: {
    marginBottom: mvs(12),
  },
  sectionTitle: {
    fontSize: mvs(16),
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: mvs(4),
  },
  checkboxItem: {
    paddingVertical: mvs(6),
  },
  checkboxText: {
    fontSize: mvs(12),
    color: colors.black,
    marginLeft: mvs(3),
  },
  buttonText: {
    fontSize: mvs(14),
    fontWeight: '700',
    color: colors.white,
  },
});
export default styles;
