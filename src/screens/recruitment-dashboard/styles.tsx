import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingHorizontal: mvs(16),
    paddingVertical: mvs(24),
  },
  greetingText: {
    fontSize: mvs(20),
    fontWeight: '600',
    marginBottom: mvs(31),
    color: colors.primary,
  },
  subheadingText: {
    fontSize: mvs(16),
    marginBottom: mvs(11),
    color: colors.black,
  },
  createButton: {
    backgroundColor: colors.primary,
    padding: mvs(12),
    alignSelf: 'center',
    borderRadius: mvs(8),
    width: mvs(114),
    alignItems: 'center',
  },
  createButtonText: {
    color: colors.white,
    fontSize: mvs(16),
    fontWeight: '600',
  },
  createContainer: {
    backgroundColor: colors.gray,
    paddingVertical: mvs(26),
    borderRadius: 8,
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.gray,
    padding: mvs(26),
    borderRadius: mvs(8),
    marginBottom: mvs(12),
  },
  listText: {
    fontSize: mvs(16),
  },
  viewButton: {
    backgroundColor: colors.primary,
    paddingVertical: mvs(6),
    paddingHorizontal: mvs(12),
    borderRadius: mvs(8),
  },
  viewButtonText: {
    color: colors.white,
    fontSize: mvs(14),
    fontWeight: '500',
  },
});
export default styles;
