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
import JobPostScreen from '../screens/iob-post-screen';
import JobBoard from '../screens/job-board';
import JobSubmission from '../screens/job-submission';
import PrescreeningCandidates from '../screens/prescreening-candidates';
import RecruiterProfile from '../screens/recruiter-profile';
import RecruitmentDashboard from '../screens/recruitment-dashboard';
import TotalJobPost from '../screens/total-job-post';
import DrawerNavigation from './drawer-navigation/drawer-navigation';

const Stack = createNativeStackNavigator();

export const RecruiterStackNavigation = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
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
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
