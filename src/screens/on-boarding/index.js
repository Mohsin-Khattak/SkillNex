import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Swipe1stSvg, Swipe2ndSvg, Swipe3rdSvg} from '../../assets/icons/user';
import {Row} from '../../components/atoms/row';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import styles from './styles';

const {width} = Dimensions.get('window');

const OnboardingScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRef = useRef(null);

  const screens = [
    {
      id: 1,
      title: 'Real-Time Feedback with SkillNex',
      description:
        'Unlock the unique advantage of live AI-driven interview practice! Boost your confidence, refine your body language, and perfect your tone with real-time feedback. This app is your personal coaching tool, designed to give you an edge in every interview. Don’t wait, start preparing to stand out today!',
      image: (
        <Swipe1stSvg style={{alignSelf: 'center', marginVertical: mvs(40)}} />
      ),
    },
    {
      id: 2,
      title: 'Emotion and Confidence Tracking',
      description:
        'SkillNex tracks your emotional cues and confidence during interviews, offering detailed feedback to help you appear polished and composed in real scenarios.',
      image: <Swipe2ndSvg />,
    },
    {
      id: 3,
      title: 'Recruiter Connections',
      description:
        'After preparing for interviews, users can directly connect with recruiters through the app. SkillNex facilitates pre-screening interviews, allowing recruiters to view candidate performance and assess their readiness before making hiring decisions.',
      image: <Swipe3rdSvg />,
    },
  ];

  const handleScroll = event => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentStep(slideIndex);
  };

  const scrollToNext = () => {
    if (currentStep < screens.length - 1) {
      scrollRef.current.scrollTo({
        x: width * (currentStep + 1),
        animated: true,
      });
    } else {
      navigation.replace('SelectUserType');
    }
  };

  const scrollToPrevious = () => {
    if (currentStep > 0) {
      scrollRef.current.scrollTo({
        x: width * (currentStep - 1),
        animated: true,
      });
    }
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <View style={{paddingTop: Platform.OS === 'ios' ? insets.top : 0}} />
      {/* Static Header */}
      <Row style={{paddingHorizontal:20}}>
        <Text style={styles.stepIndicator}>{`${currentStep + 1}/${
          screens.length
        }`}</Text>
        <TouchableOpacity
          onPress={() => navigation.replace('SelectUserType')}
          style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </Row>

      {/* Swipeable Content */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {screens.map(screen => (
          <View key={screen.id} style={{width, paddingHorizontal: 20}}>
            {screen.image}
            <Bold label={screen.title} style={styles.title} />
            <Regular label={screen.description} style={styles.description} />
          </View>
        ))}
      </ScrollView>

      {/* Static Footer */}
      <View style={styles.buttonContainer}>
        {currentStep > 0 ? (
          <TouchableOpacity
            onPress={scrollToPrevious}
            style={styles.prevButton}>
            <Text style={styles.prevText}>Prev</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={styles.prevButton}/>
        )}
        <View style={styles.pagination}>
          {screens.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                currentStep === i ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={scrollToNext} style={styles.nextButton}>
          <Text style={styles.nextText}>
            {currentStep < screens.length - 1 ? 'Next' : 'Get Started'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
