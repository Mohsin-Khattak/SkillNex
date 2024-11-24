import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AIAnalyzer from '../screens/ai-analyzer';
import CandidateDashboard from '../screens/candidates-screens/candidate-dashboard';
import CandidateEditProfile from '../screens/candidates-screens/candidate-editprofile';
import CandidateJobDescription from '../screens/candidates-screens/candidate-job-description';
import CandidateJobBoard from '../screens/candidates-screens/candidate-jobboard';
import MettingScreen from '../screens/candidates-screens/meeting-screen';
import FeedbackReportCandidate from '../screens/feedback-report-candidate';
import FeedbackReportRecruiter from '../screens/feedback-report-recruiter';
import ForgotPassword from '../screens/forgot-password';
import JobPostScreen from '../screens/iob-post-screen';
import JobBoard from '../screens/job-board';
import JobSubmission from '../screens/job-submission';
import OnboardingScreen from '../screens/on-boarding';
import PrescreeningCandidates from '../screens/prescreening-candidates';
import RecruiterProfile from '../screens/recruiter-profile';
import RecruitmentDashboard from '../screens/recruitment-dashboard';
import SelectUserType from '../screens/select-user-type';
import SignIn from '../screens/sign-in';
import SignUp from '../screens/sign-up';
import SignUpOrLogin from '../screens/signup-or-login';
import Splash from '../screens/splash';
import TotalJobPost from '../screens/total-job-post';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
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
        <Stack.Screen name="JobSubmission" component={JobSubmission} />
        <Stack.Screen
          name="FeedbackReportRecruiter"
          component={FeedbackReportRecruiter}
        />
        <Stack.Screen
          name="FeedbackReportCandidate"
          component={FeedbackReportCandidate}
        />
        <Stack.Screen name="AIAnalyzer" component={AIAnalyzer} />
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
  container: { flex: 1 },
});
