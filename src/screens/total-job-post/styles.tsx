import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  totalJob: {
    color: colors.primary,
    fontSize: mvs(20),
    paddingLeft: mvs(22),
    paddingVertical: mvs(16),
  },
  preOnActiveBtn: {
    borderRadius: 0,
    height: mvs(56),
    backgroundColor: colors.white,
  },
  preOnInActiveBtn: {
    borderRadius: 0,
    height: mvs(56),
    backgroundColor: colors.white,
  },
  activeTxt: {
    color: colors.black,
    borderBottomWidth: mvs(2),
    borderBottomColor: colors.black,
    fontWeight: '500',
    fontSize: mvs(12),
  },
  inActiveTxt: {color: colors.black, fontSize: mvs(12)},

  searchContainer: {marginHorizontal: mvs(30)},
  searchInput: {
    width: '60%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  tableContainer: {
    borderColor: colors.grey,
    borderWidth: mvs(1.5),
    marginHorizontal: mvs(12),
    height: mvs(350),
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 8,
  },
  paginationControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  paginationButton: {
    fontSize: 16,
    color: '#1E90FF',
  },
  disabledButton: {
    color: '#ccc',
  },
  pageNumber: {
    fontSize: 10,
    marginTop: 80,
    textAlign: 'center',
    color: colors.grey,
  },
});
export default styles;
