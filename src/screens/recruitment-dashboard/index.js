import React from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackHeader from '../../components/atoms/headers/back-header';
import PrimaryButton from '../../components/carts/button';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../config/colors';
import { navigate } from '../../navigation/navigation-ref';

const RecruitmentDashboard = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      />
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader
        disabled={false}
        onPressProfile={() => navigate('RecruiterProfile')}
        back={false}
        name="Sadruddin"
        date="Today   Jan 27"
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.greetingText}>Hi Sadruddin co.</Text>
        <Text style={styles.subheadingText}>Initial Soft matching</Text>

        <TouchableOpacity style={styles.createContainer}>
          <PrimaryButton
            onclick={() => navigation.navigate('RecruiterProfile')}
            label="+ Create New"
            textStyle={styles.createButtonText}
            style={styles.createButton}
          />
        </TouchableOpacity>
        {[
          {
            title: 'Prescreening Candidates',
            navi: 'PrescreeningCandidates',
            value: 'Pre Screening',
          },
          {title: 'Acceptance/Rejection', navi: 'JobPostScreen'},
          {
            title: 'Onboard',
            navi: 'PrescreeningCandidates',
            value: 'Onboard',
          },
          {title: 'Total Jobs Posted', navi: 'TotalJobPost', value: 'History'},
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listText}>{item?.title}</Text>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() =>
                navigation.navigate(item?.navi, {value: item.value})
              }>
              <Text style={styles.viewButtonText}>View List</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecruitmentDashboard;
