import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: mvs(20),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: mvs(16),
  },
  title: {
    fontSize: mvs(20),
    fontWeight: '700',
    color: colors.primary,
  },
  editButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(27),
    paddingVertical: mvs(8),
    borderRadius: mvs(5),
  },
  editButtonText: {
    color: colors.white,
    fontSize: mvs(14),
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: mvs(12),
  },
  label: {
    fontSize: mvs(16),
    marginBottom: mvs(4),
    color: colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: mvs(8),
    padding: mvs(12),
    fontSize: mvs(14),
    color: colors.black,
  },
  errorText: {
    fontSize: mvs(10),
    color: colors.red,
    marginTop: mvs(1),
    marginLeft: mvs(5),
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: mvs(8),
    padding: mvs(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    fontSize: mvs(12),
    color: colors.grey,
  },
  browseText: {
    color: colors.primary,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: colors.primary,
    marginTop: mvs(16),
  },
  submitButtonText: {
    color: colors.white,
    fontSize: mvs(16),
    fontWeight: '600',
  },
});
export default styles;
