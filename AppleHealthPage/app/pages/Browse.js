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
  //SearchBar,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
//import SearchBar from 'react-native-searchbar';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HistorySection from '../components/HistorySection';
import BrowseSection from '../components/BrowseSection';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Activity, BarChartScreen, LineChartScreen} from './Activity';

const FireImage = <Ionicons name="flame" size={25} color="#fc4503" />;
const HeightImage = <Ionicons name="body" size={25} color="purple" />;
const CycleImage = <Ionicons name="refresh" size={25} color="orange" />;
const HeadsetImage = <Ionicons name="ear" size={25} color="#03d7fc" />;
const HeartImage = <Ionicons name="heart" size={25} color="#900" />;
const MindfulnessImage = <Ionicons name="flower" size={25} color="#03d7fc" />;
const NutritionImage = <Ionicons name="nutrition" size={25} color="#03d7fc" />;
const DataImage = <Ionicons name="analytics" size={25} color="#03d7fc" />;
const SleepImage = <Ionicons name="bed" size={25} color="#fc8403" />;

const onPress1 = () => {
  alert('clicked1');
};

const onPress2 = () => {
  alert('clicked2');
};

function updateSearch() {
  alert('Searched');
}

const Stack = createStackNavigator();

const BrowseContainer = () => {
  return (
    //<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="BarChartScreen" component={BarChartScreen} />
      <Stack.Screen name="LineChartScreen" component={LineChartScreen} />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};

const Browse = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E0E0E0'}}>
      <Text style={styles.tabTitle}> Browse</Text>

      <SearchBar
        lightTheme
        round
        fontSize={18}
        inputStyle={{backgroundColor: 'white'}}
        leftIconContainerStyle={{
          backgroundColor: '#E0E0E0',
          borderRadius: 0,
          borderWidth: 0,
        }}
        rightIconContainerStyle={{
          backgroundColor: '#E0E0E0',
        }}
        containerStyle={{
          //flex: 1,
          marginTop: 16,
          justifyContent: 'center',
          height: 58,
          backgroundColor: '#E0E0E0',
          size: 10,
          shadowColor: 'white', //no effect
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          borderLeftColor: 'transparent',
        }}
        placeholder="Type Here..."
        onChangeText={updateSearch}
      />
      <Text style={styles.tabSubtile}> Health Catagories</Text>
      <ScrollView style={styles.container}>
        <BrowseSection
          Header="Activity"
          //ImageSource="require('../assets/heart.jpg')"
          ImageSource={FireImage}
          onPress={() => navigate(Activity)}></BrowseSection>

        <BrowseSection
          Header="Body Measurement"
          ImageSource={HeightImage}
          onPress={onPress2}></BrowseSection>

        <BrowseSection
          Header="Cycle Tracking"
          ImageSource={CycleImage}
          onPress={onPress1}></BrowseSection>

        <BrowseSection
          Header="Hearing"
          ImageSource={HeadsetImage}
          onPress={onPress1}></BrowseSection>

        <BrowseSection
          Header="Heart"
          ImageSource={HeartImage}
          onPress={onPress1}></BrowseSection>

        <BrowseSection
          Header="Mindfulness"
          ImageSource={MindfulnessImage}
          onPress={onPress1}></BrowseSection>

        <BrowseSection
          Header="Nutrition"
          ImageSource={NutritionImage}
          onPress={onPress1}></BrowseSection>

        <BrowseSection
          Header="Other Data"
          ImageSource={DataImage}
          onPress={onPress1}></BrowseSection>

        <BrowseSection
          Header="Respiratory"
          ImageSource={DataImage}
          onPress={onPress1}></BrowseSection>

        <BrowseSection
          Header="Sleep"
          ImageSource={SleepImage}
          onPress={onPress1}></BrowseSection>
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
    marginTop: 20,
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
    fontSize: 16,
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

//export default Browse;
export default BrowseContainer;
