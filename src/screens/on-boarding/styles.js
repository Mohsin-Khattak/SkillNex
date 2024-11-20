import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  stepIndicator: {
    fontSize: 16,
    color: colors.grey,
    fontWeight: '600',
    marginVertical: mvs(20),
  },
  skipButton: {},
  skipText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '600',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    width: mvs(280),
    marginBottom: mvs(30),
    marginLeft: mvs(35),
  },
  description: {
    fontSize: 16,
    color: colors.grey,
    textAlign: 'center',
    marginBottom: mvs(30),
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: mvs(15),
  },
  prevButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  prevText: {
    color: colors.grey,
    fontSize: 16,
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextText: {
    color: colors.green,
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: mvs(6),
    height: mvs(6),
    borderRadius: mvs(3),
    marginHorizontal: mvs(3),
  },
  activeDot: {
    backgroundColor: colors.black,
    width: 30,
  },
  inactiveDot: {
    backgroundColor: colors.grey,
  },
});
export default styles;
