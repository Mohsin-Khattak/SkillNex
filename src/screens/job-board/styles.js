import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  header: {
    fontSize: mvs(20),
    marginBottom: mvs(16),
    marginLeft: mvs(20),
    marginTop: mvs(25),
    color: colors.black,
  },
});
export default styles;
