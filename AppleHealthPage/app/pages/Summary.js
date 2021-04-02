import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HistorySection from '../components/HistorySection';

//const HeartImage = '../assets/heart.jpg';
const HeartImage = <Ionicons name="heart" size={15} color="#900" />;
const HeadsetImage = <Ionicons name="ear" size={15} color="#03d7fc" />;
const HeightImage = <Ionicons name="man" size={15} color="purple" />;
const SleepImage = <Ionicons name="bed" size={15} color="#fc8403" />;
const onPress1 = () => {
  alert('clicked1');
};

const onPress2 = () => {
  alert('clicked2');
};

const Summary = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E0E0E0'}}>
      <Text style={styles.tabTitle}> Summary</Text>
      {/* <Button
        title="Edit"
        onPress={() => alert('Edit')}
        style={{paddingLeft: 300, marginTop: -32, size: 12}}
      /> */}

      <Text style={styles.tabSubtile}> Favorites</Text>
      <TouchableOpacity style={{marginTop: -25, paddingLeft: 350}}>
        <Text style={{color: 'blue'}}>Edit</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <HistorySection
          Header="Electrocardiograms(ECO)"
          HeaderColor="red"
          SubHeader="Sinus Rhythm"
          Content="57 BPM Average"
          //ImageSource="require('../assets/heart.jpg')"
          ImageSource={HeartImage}
          onPress={onPress1}></HistorySection>

        <HistorySection
          Header="Headphone Audio Level"
          HeaderColor="blue"
          SubHeader="OK"
          Content="7-Day Exposure"
          ImageSource={HeadsetImage}
          onPress={onPress2}></HistorySection>

        <HistorySection
          Header="Heart Rate"
          HeaderColor="red"
          SubHeader="61"
          Content="BPM"
          ImageSource={HeartImage}
          onPress={onPress1}></HistorySection>

        <HistorySection
          Header="Height"
          HeaderColor="purple"
          SubHeader="6' 4''"
          Content=""
          ImageSource={HeightImage}
          onPress={onPress1}></HistorySection>

        <HistorySection
          Header="Sleep Analysis"
          HeaderColor="#fc8403"
          SubHeader="6H 5Min"
          Content=""
          ImageSource={SleepImage}
          onPress={onPress1}></HistorySection>

        <HistorySection
          Header="Weight"
          HeaderColor="purple"
          SubHeader="184.6"
          Content=""
          ImageSource={HeightImage}
          onPress={onPress1}></HistorySection>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabTitle: {
    marginTop: 32,
    paddingHorizontal: 16,
    fontSize: 28,
    fontWeight: 'bold',
  },

  tabSubtile: {
    marginTop: 16,
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 16,
    fontSize: 12,
  },
  sectionImage: {
    width: 20,
    height: 20,
    paddingHorizontal: 0,
  },

  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },

  sectionHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Summary;
