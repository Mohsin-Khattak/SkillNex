import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AIChart from '../../assets/images/ai-chart.png';
import Voice from '../../assets/images/voice.png';
import PrimaryButton from '../../components/carts/button';
import {colors} from '../../config/colors';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {BackCircle} from '../../components/atoms/headers/back-circle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import { styles } from "./styles";

const {width} = Dimensions.get('window');
const AIAnalyzer = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.white,
        }}
      />
      {/* Header */}
      <View style={styles.header}>
        <BackCircle />
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>AI Analyser</Text>
      <Regular
        fontSize={12}
        color={'#8D8D8D'}
        label={'Process personalization'}
      />
      {/* Insights Section */}
      <View style={styles.insightsContainer}>
        <Text style={styles.insightsTitle}>Insights</Text>
        <Text style={styles.subtitle}>Review Your Overall Performance</Text>
        {/* <View style={styles.audioVisualizer} /> */}
        <Image
          source={Voice}
          style={{height: 50, width: '100%', marginBottom: 10}}
        />
        <Text style={styles.insightsText}>
          Design Thinking Is A Problem-Solving Methodology That Emphasizes
          Empathizing With Users, Defining Problems, Ideating Solutions,
          Prototyping, And Testing.
          <Text style={styles.highlightText}>
            It's A Human-Centered Approach To Design That Encourages Creativity,
            Innovation, And Collaboration.
          </Text>
          creativity, innovation, and collaboration. The design thinking
        </Text>
      </View>

      {/* Facial Expression Section */}
      <Bold label={'Facial Expression'} style={styles.graphTitle} />
      <View style={styles.graphContainer}>
        {/* Placeholder for the graph */}
        <Image source={AIChart} style={{height: 200, width: 200}} />

        {/* <View style={styles.graphPlaceholder} /> */}
      </View>

      {/* Buttons */}
      <View style={{gap: 20}}>
        <PrimaryButton
          textStyle={{fontSize: 16}}
          label="Recommended for Next Round"
        />
        <PrimaryButton
          textStyle={{fontSize: 16}}
          label="Apply For Another Evaluation"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  downloadText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  insightsContainer: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  insightsTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 15,
  },
  audioVisualizer: {
    height: 40,
    backgroundColor: 'black',
    borderRadius: 8,
    marginBottom: 20,
  },
  insightsText: {
    color: '#fff',
    fontSize: 10,
  },
  highlightText: {
    color: '#ff6347',
    fontWeight: 'bold',
  },
  graphContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  graphPlaceholder: {
    height: width * 0.8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AIAnalyzer;
