import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Splash from '../screens/splash';
import {colors} from '../config/colors';
import SelectUserType from '../screens/select-user-type';
import SignUpOrLogin from '../screens/signup-or-login';
import OnboardingScreen from '../screens/on-boarding';
import SignIn from '../screens/sign-in';
import PrescreeningCandidates from '../screens/prescreening-candidates';
import SignUp from '../screens/sign-up';
import ForgotPassword from '../screens/forgot-password';
import RecruitmentDashboard from '../screens/recruitment-dashboard';
import RecruiterProfile from '../screens/recruiter-profile';
import JobPostScreen from '../screens/iob-post-screen';
import TotalJobPost from '../screens/total-job-post';
import JobBoard from '../screens/job-board';
import CandidateDashboard from '../screens/candidates-screens/candidate-dashboard';
import CandidateEditProfile from '../screens/candidates-screens/candidate-editprofile';
import CandidateJobBoard from '../screens/candidates-screens/candidate-jobboard';
import CandidateJobDescription from '../screens/candidates-screens/candidate-job-description';
import MettingScreen from '../screens/candidates-screens/meeting-screen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} /> */}
      {/* <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      /> */}
      <Stack.Navigator
        initialRouteName="CandidateJobDescription"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SelectUserType" component={SelectUserType} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="PrescreeningCandidates"
          component={PrescreeningCandidates}
        />
        <Stack.Screen
          name="RecruitmentDashboard"
          component={RecruitmentDashboard}
        />
        <Stack.Screen name="RecruiterProfile" component={RecruiterProfile} />
        <Stack.Screen name="JobPostScreen" component={JobPostScreen} />
        <Stack.Screen name="TotalJobPost" component={TotalJobPost} />
        <Stack.Screen name="JobBoard" component={JobBoard} />
        <Stack.Screen name="SignUpOrLogin" component={SignUpOrLogin} />
        <Stack.Screen
          name="CandidateDashboard"
          component={CandidateDashboard}
        />
        <Stack.Screen
          name="CandidateEditProfile"
          component={CandidateEditProfile}
        />
        <Stack.Screen name="CandidateJobBoard" component={CandidateJobBoard} />
        <Stack.Screen
          name="CandidateJobDescription"
          component={CandidateJobDescription}
        />
        <Stack.Screen name="MettingScreen" component={MettingScreen} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
