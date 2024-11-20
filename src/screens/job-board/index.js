import React from 'react';
import {View} from 'react-native';
import CustomFlatList from '../../components/atoms/custom-flatlist';
import BackHeader from '../../components/atoms/headers/back-header';
import JobCard from '../../components/atoms/job-card';
import Medium from '../../typography/medium-text';
import styles from './styles';

const jobData = [
  {
    id: '1',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  {
    id: '2',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  {
    id: '3',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  {
    id: '4',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  {
    id: '5',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  {
    id: '6',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  {
    id: '7',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  {
    id: '8',
    title: 'Senior Backend Engineer',
    company: 'Google',
    location: 'Lisbon, Portugal',
    status: 'Active',
  },
  // Add more job data as needed
];

const JobBoard = () => {
  return (
    <View style={styles.container}>
      <BackHeader name="Sadruddin" date="Today Jan 27" />
      <Medium style={styles.header} label={'Latest jobs'} />
      <CustomFlatList
        data={jobData}
        renderItem={({item}) => <JobCard item={item} />}
      />
    </View>
  );
};

export default JobBoard;
