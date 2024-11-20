import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MenueSvg, NextIconSvg, PrevIconSvg} from '../../assets/icons/user';
import BackHeader from '../../components/atoms/headers/back-header';
import {Row} from '../../components/atoms/row';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PrescreeningCandidates = props => {
  console.log(
    '🚀 ~ PrescreeningCandidates ~ props:',
    props?.route?.params?.value,
  );
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [flag, setFlag] = useState(props?.route?.params?.value);
  const itemsPerPage = 12;
  const [items, setItems] = useState(itemsPerPage);

  const allData = [
    {
      id: '1',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '2',
      date: 'Oct 24, 2018',
      name: 'Munazza',
      field: 'UI/UX designing',
      status: 'Final Screening',
    },
    {
      id: '3',
      date: 'May 12, 2019',
      name: 'Munazza',
      field: 'Wordpress',
      status: 'Initial Screening',
    },
    {
      id: '4',
      date: 'Feb 29, 2012',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '5',
      date: 'Nov 7, 2017',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '6',
      date: 'Dec 19, 2013',
      name: 'Munazza',
      field: 'AI Development',
      status: 'Final Screening',
    },
    {
      id: '7',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '8',
      date: 'Oct 24, 2018',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '9',
      date: 'Feb 29, 2012',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Final Screening',
    },
    {
      id: '10',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Final Screening',
    },
    {
      id: '11',
      date: 'Nov 7, 2017',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '12',
      date: 'Dec 19, 2013',
      name: 'Munazza',
      field: 'AI Development',
      status: 'Final Screening',
    },
    {
      id: '13',
      date: 'Feb 11, 2014',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
    {
      id: '14',
      date: 'Oct 24, 2018',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Final Screening',
    },
    {
      id: '15',
      date: 'Feb 29, 2012',
      name: 'Munazza',
      field: 'AI/ML Development',
      status: 'Initial Screening',
    },
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

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <BackHeader name="Sadruddin" date="Today   Jan 27" />
      <View style={styles.btnContainer}>
        <PrimaryButton
          onclick={() => setFlag('Pre Screening')}
          style={
            flag == 'Pre Screening'
              ? styles.preOnActiveBtn
              : styles.preOnInActiveBtn
          }
          label="Pre Screening"
          textStyle={
            flag == 'Pre Screening' ? styles.activeTxt : styles.inActiveTxt
          }
        />
        <PrimaryButton
          onclick={() => setFlag('Onboard')}
          style={
            flag == 'Onboard' ? styles.preOnActiveBtn : styles.preOnInActiveBtn
          }
          label="Onboard"
          textStyle={flag == 'Onboard' ? styles.activeTxt : styles.inActiveTxt}
        />
      </View>
      <Row style={styles.searchContainer}>
        <Bold label={'This Month'} />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <MenueSvg />
      </Row>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>S.NO.</Text>
          <Text style={styles.tableHeaderText}>DATE</Text>
          <Text style={styles.tableHeaderText}>NAME</Text>
          <Text style={styles.tableHeaderText}>FIELD</Text>
          <Text style={styles.tableHeaderText}>STATUS</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.tableRow,
                {backgroundColor: index % 2 == 0 ? colors.white : colors.gray},
              ]}>
              <Text style={styles.tableCell}>{item.id}</Text>
              <Text style={styles.tableCell}>{item.date}</Text>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.field}</Text>
              <Text style={styles.tableCell}>{item.status}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.paginationControls}>
        <TouchableOpacity onPress={handlePrevious} disabled={currentPage === 1}>
          <PrevIconSvg color={currentPage === 1 ? colors.grey : colors.black} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}>
          <NextIconSvg
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

export default PrescreeningCandidates;
