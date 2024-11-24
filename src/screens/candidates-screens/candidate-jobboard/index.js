import React, {useEffect, useState} from 'react';
import {FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NextIconSvg, PrevIconSvg} from '../../../assets/icons/user';
import BackHeader from '../../../components/atoms/headers/back-header';
import {colors} from '../../../config/colors';
import styles from './styles';
import JobboardCard from '../../../components/molicules/jobboard-card';
import {mvs} from '../../../config/metrices';
import Bold from '../../../typography/bold-text';
import {Row} from '../../../components/atoms/row';
import Medium from '../../../typography/medium-text';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CandidateJobBoard = props => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [items, setItems] = useState(itemsPerPage);

  const allData = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(allData.slice(startIndex, endIndex));
    setItems(
      allData.length - startIndex < itemsPerPage
        ? allData.length - startIndex
        : itemsPerPage,
    );
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(allData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const insets = useSafeAreaInsets();
  const renderItem = ({item}) => (
    <JobboardCard
      item={item}
      onPress={() => navigate('TrailerPlayerScreen', {seriesData: item})}
    />
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader name="Sadruddin" date="Today   Jan 27" />
      <Bold
        label={'Latest jobs'}
        fontSize={mvs(15)}
        style={{marginHorizontal: 20, marginTop: 30, marginBottom: 12}}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: mvs(20),
          paddingBottom: mvs(20),
        }}
      />

      <View style={styles.paginationControls}>
        <TouchableOpacity onPress={handlePrevious} disabled={currentPage === 1}>
          <AntDesign
            name={'verticleright'}
            size={15}
            color={currentPage === 1 ? colors.grey : colors.black}
          />
        </TouchableOpacity>
        <Row>
          <View style={styles.numberContainer}>
            <Medium
              style={{textAlign: 'center'}}
              color={colors.white}
              label={'1'}
            />
          </View>
        </Row>

        <TouchableOpacity
          onPress={handleNext}
          disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}>
          <AntDesign
            size={15}
            name="verticleleft"
            color={
              currentPage === Math.ceil(allData.length / itemsPerPage)
                ? colors.grey
                : colors.black
            }
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.pageNumber}>{` ${currentPage} of ${Math.ceil(
        allData.length / itemsPerPage,
      )} Pages (${items} items}`}</Text>
    </View>
  );
};

export default CandidateJobBoard;
