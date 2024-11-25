import React from 'react';
import {
  Image,
  Platform,
  ProgressBarAndroidBase,
  ScrollView,
  View,
} from 'react-native';
import {Profile} from '../../assets/images';
import {BackCircle} from '../../components/atoms/headers/back-circle';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {styles} from './styles';
import {navigate} from '../../navigation/navigation-ref';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const FeedbackReportRecruiter = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.white,
        }}
      />
      <View style={styles.header}>
        <BackCircle />
        <Bold
          style={{transform: [{translateY: 10}]}}
          label={'Feedback Report'}
          fontSize={20}
          color={colors.primary}
        />
        <View />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.rowContainer}>
          <View style={styles.profileSection}>
            <Image source={Profile} style={styles.profileImage} />
            <Bold label={'Sadruddin'} style={styles.profileName} />
          </View>
          <View style={{flex: 1, gap: 25}}>
            <Regular
              label={`“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`}
              style={styles.quote}
            />
            <Regular
              label={'- Name, Title at Company'}
              style={styles.quoteAuthor}
            />
          </View>
        </View>

        <View style={styles.contentSection}>
          <View style={{...styles.rowContainer, paddingHorizontal: 0}}>
            <Bold label={'The Strengths'} style={styles.sectionTitle} />
            <View style={{flex: 1}}>
              <Regular
                label={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                style={styles.description}></Regular>
              <View style={styles.list}>
                <Regular
                  label={
                    '• Work with the team to design and iOS mobile applications on Azure using Swift and Objective-C.'
                  }
                  style={styles.listItem}></Regular>
                <Regular
                  label={
                    '• Understanding, assessing, analyzing user requirements and function specification.'
                  }
                  style={styles.listItem}></Regular>
                <Regular
                  label={'• Prepare detailed technical specification.'}
                  style={styles.listItem}></Regular>
              </View>
            </View>
          </View>
          <View style={{...styles.rowContainer, paddingHorizontal: 0}}>
            <Bold label={'The Weakness'} style={styles.sectionTitle} />
            <View style={{flex: 1}}>
              <Regular
                label={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                style={styles.description}></Regular>
              <View style={styles.list}>
                <Regular
                  label={
                    '• Work with the team to design and iOS mobile applications on Azure using Swift and Objective-C.'
                  }
                  style={styles.listItem}></Regular>
                <Regular
                  label={
                    '• Understanding, assessing, analyzing user requirements and function specification.'
                  }
                  style={styles.listItem}></Regular>
                <Regular
                  label={'• Prepare detailed technical specification.'}
                  style={styles.listItem}></Regular>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statisticsSection}>
          <View style={styles.stat}>
            <Bold label={'25%'} style={styles.statPercentage} />
            <Regular
              label={'Lorem ipsum dolor sit consectetuer adipiscing elit'}
              style={styles.statDescription}
            />
          </View>
          <View style={styles.stat}>
            <Bold label={'10%'} style={styles.statPercentage} />
            <Regular
              label={'Lorem ipsum dolor sit consectetuer adipiscing elit'}
              style={styles.statDescription}
            />
          </View>
          <View style={styles.stat}>
            <Bold label={'15%'} style={styles.statPercentage} />
            <Regular
              label={'Lorem ipsum dolor sit consectetuer adipiscing elit'}
              style={styles.statDescription}
            />
          </View>
        </View>

        <View style={styles.buttonSection}>
          <PrimaryButton
            onclick={() => navigate('AIAnalyzer')}
            label={'Recommended for Next Round'}
            textStyle={{fontSize: 14}}
          />
          <PrimaryButton
            style={{marginBottom: 20}}
            onclick={() => navigate('FeedbackReportCandidate')}
            label={'Further Evaluation'}
            textStyle={{fontSize: 14}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedbackReportRecruiter;
