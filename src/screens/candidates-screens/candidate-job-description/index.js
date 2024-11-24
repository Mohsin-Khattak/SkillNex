import React from 'react';
import {Image, Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DotedLine, NiraLogo} from '../../../assets/images';
import BackHeader from '../../../components/atoms/headers/back-header';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Regular from '../../../typography/regular-text';
import SemiBold from '../../../typography/semi-bold-text';
import styles from './styles';
import {Row} from '../../../components/atoms/row';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import PrimaryButton from '../../../components/carts/button';
const CandidateJobDescription = props => {
  const insets = useSafeAreaInsets();
  const data = [
    {
      id: 1,
      title:
        'Minimum Experience, Essential Knowledge & Skills. At least 2-3 years of relevant experience as a graphic designer with a strong portfolio.',
    },
    {
      id: 2,
      title: 'Degree / diploma in graphic design from a reputed institute.',
    },
  ];
  const description = [
    {
      id: 1,
      title:
        'Studies design briefs and conceptualize wide range of visuals based on given graphic requirements',
    },
    {
      id: 2,
      title:
        'Prepares and develops rough drafts of illustrations, logos, and other designs using editing software or by hands.',
    },
    {
      id: 3,
      title: 'Presents and explains design ideas and rough drafts to the team.',
    },
    {
      id: 4,
      title: 'Revise graphics based on  ',
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader name="Sadruddin" date="Today   Jan 27" />
      <View style={styles.card}>
        <Image
          style={{width: mvs(41), height: mvs(41), borderRadius: mvs(11)}}
          source={NiraLogo}
        />
        <SemiBold
          fontSize={mvs(15)}
          style={{fontWeight: '600', marginTop: mvs(8)}}
          label={'Graphic Designer'}
        />
        <Regular
          label={'Poler Web-design'}
          fontSize={mvs(12)}
          style={{marginTop: mvs(3)}}
          color={colors.brown}
        />
        <Image source={DotedLine} style={{width: mvs(300), height: mvs(10)}} />
        <Row
          style={{
            gap: mvs(9),
            justifyContent: 'flex-start',
            marginTop: mvs(8),
          }}>
          <FontAwesome6
            name={'location-pin'}
            size={15}
            color={colors.primary}
          />
          <SemiBold
            color={colors.brown}
            label={'California, United States'}
            fontSize={mvs(12)}
          />
        </Row>
        <SemiBold
          style={{marginTop: mvs(5)}}
          fontSize={mvs(12)}
          label={'$15k - $25k / month'}
          color={colors.primary}
        />
        <Row
          style={{
            justifyContent: 'flex-start',
            gap: mvs(5),
            marginTop: mvs(5),
          }}>
          <Fontisto name={'stopwatch'} size={15} color={colors.brown} />
          <SemiBold
            color={colors.brown}
            label={'1 Month ago'}
            fontSize={mvs(12)}
          />
        </Row>
      </View>
      <Row style={styles.verticalView}>
        <View style={styles.jobTitle} />
        <SemiBold
          style={{fontWeight: '600'}}
          label={'Job highlights:'}
          fontSize={mvs(16)}
        />
      </Row>
      <View style={styles.numberContainer}>
        {data.map((item, index) => (
          <Row
            key={item.id}
            style={{justifyContent: 'flex-start', gap: mvs(5)}}>
            <Entypo name={'dot-single'} size={mvs(20)} color={colors.brown} />
            <View style={{flex: 1}}>
              <Regular
                label={item.title} // Trimming any extra spaces
                color={colors.brown}
                fontSize={mvs(12)}
              />
            </View>
          </Row>
        ))}
      </View>
      <Row style={styles.verticalView}>
        <View style={styles.jobTitle} />
        <SemiBold
          style={{fontWeight: '600'}}
          label={'Description:'}
          fontSize={mvs(16)}
        />
      </Row>
      <View style={styles.numberContainer}>
        {description.map((item, index) => (
          <Row
            key={item.id}
            style={{justifyContent: 'flex-start', gap: mvs(5)}}>
            <Entypo name={'dot-single'} size={mvs(20)} color={colors.brown} />
            <View style={{flex: 1}}>
              <Regular
                label={item.title} // Trimming any extra spaces
                color={colors.brown}
                fontSize={mvs(12)}
              />
            </View>
          </Row>
        ))}
      </View>
      <PrimaryButton
        style={{marginTop: mvs(24), marginHorizental: 20}}
        label="Apply"
      />
    </View>
  );
};

export default CandidateJobDescription;
