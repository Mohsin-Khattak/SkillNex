import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { ThreeDot } from '../../assets/icons/lottie';
import { LogoSvg } from '../../assets/icons/user';
import GradientBackground from '../../components/atoms/linear-gradient';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import Light from '../../typography/light-text';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <GradientBackground
      colors={['#00A4CC', '#0047AB']}
      style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.secondary}
        barStyle={'light-content'}
      />
      <View style={{marginTop: mvs(180)}} />
      <LogoSvg color={colors.white} />
      <Light
        label={'AI Powered Interview App'}
        color={colors.white}
        style={{marginTop: mvs(100), marginBottom: mvs(50)}}
      />
      {/* <LoaderSvg /> */}
  
      <LottieView source={ThreeDot} autoPlay loop style={styles.lottie} />
    </GradientBackground>
  );
};

export default Splash;
