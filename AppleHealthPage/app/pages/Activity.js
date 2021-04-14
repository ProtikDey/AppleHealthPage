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

import BrowseSection from '../components/BrowseSection';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LineChart} from 'react-native-chart-kit';
//import {useNavigation} from '@react-navigation/native';

const FireImage = <Ionicons name="flame" size={25} color="#fc4503" />;
const HeightImage = <Ionicons name="body" size={25} color="purple" />;
const CycleImage = <Ionicons name="refresh" size={25} color="orange" />;
const HeadsetImage = <Ionicons name="ear" size={25} color="#03d7fc" />;
const HeartImage = <Ionicons name="heart" size={25} color="#900" />;
const MindfulnessImage = <Ionicons name="flower" size={25} color="#03d7fc" />;
const NutritionImage = <Ionicons name="nutrition" size={25} color="#03d7fc" />;
const DataImage = <Ionicons name="analytics" size={25} color="#03d7fc" />;
const SleepImage = <Ionicons name="bed" size={25} color="#fc8403" />;

import BarChartClass from '../components/BarChartClass';
import LineChartClass from '../components/LineChartClass';

const barYearData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const barWeekData = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const barMonthData = {
  labels: ['1', '7', '14', '21', '28'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
    },
  ],
};

const onPress1 = () => {
  alert('clicked1');
};

const onPress2 = () => {
  alert('clicked2');
};

function updateSearch() {
  alert('Searched');
}

export const LineChartScreen = () => {
  return (
    <LineChartClass
      week={barWeekData}
      month={barMonthData}
      year={barYearData}></LineChartClass>
  );
};

export const BarChartScreen = () => {
  return (
    <BarChartClass
      week={barWeekData}
      month={barMonthData}
      year={barYearData}></BarChartClass>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="Browse" component={Browse} />
    </Stack.Navigator>
  );
};

const OnPress3 = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export const Activity = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E0E0E0'}}>
      <Text style={styles.tabTitle}>Activity</Text>

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
        containerStyle={
          Platform.OS === 'android'
            ? {
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
              }
            : {
                //flex: 1,
                justifyContent: 'center',
                height: 49,
                backgroundColor: '#E0E0E0',
              }
        }
        placeholder="Type Here..."
        onChangeText={updateSearch}
      />
      <Text style={styles.tabSubtile}> Health Catagories</Text>
      <ScrollView style={styles.container}>
        <BrowseSection
          Header="Active Energy"
          //ImageSource="require('../assets/heart.jpg')"

          ImageSource={FireImage}
          //navigation={navigation}>
          //NextPage={Tweets}
          onPress={() => navigate(LineChartScreen)}>
          //onPress={onPress1}
        </BrowseSection>

        <BrowseSection
          Header="Resting Energy"
          //ImageSource="require('../assets/heart.jpg')"

          ImageSource={FireImage}
          //navigation={navigation}>
          //NextPage={Tweets}
          //onPress={navigation.navigate({Tweets})}
          onPress={() => navigate(BarChartScreen)}></BrowseSection>

        <BrowseSection
          Header="Stand Minutes"
          //ImageSource="require('../assets/heart.jpg')"

          ImageSource={FireImage}
          //navigation={navigation}>
          //NextPage={Tweets}
          //onPress={navigation.navigate({Tweets})}
          onPress={() => navigate(BarChartScreen)}></BrowseSection>

        <BrowseSection
          Header="Steps"
          //ImageSource="require('../assets/heart.jpg')"

          ImageSource={HeightImage}
          //navigation={navigation}>
          //NextPage={Tweets}
          //onPress={navigation.navigate({Tweets})}
          onPress={() => navigate(BarChartScreen)}></BrowseSection>
      </ScrollView>
    </SafeAreaView>
  );
};

const ActivityContainer = () => {
  return (
    //<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="LineChartScreen" component={LineChartScreen} />
      <Stack.Screen name="BarChartScreen" component={BarChartScreen} />
    </Stack.Navigator>
    //</NavigationContainer>
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

export default ActivityContainer;

//export default OnPress3;
