/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
//import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Summary from './app/pages/Summary';
import BrowseContainer from './app/pages/Browse';

function summary() {
  return <Summary></Summary>;
}
function browse() {
  return <BrowseContainer></BrowseContainer>;
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'white',
        activeTintColor: 'blue',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Summary"
        component={summary}
        fontSize="16"
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="heart" size={size} color={color}></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseContainer}
        fontSize="16"
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="browsers" size={size} color={color}></Ionicons>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabTitle: {
    marginTop: 32,
    paddingHorizontal: 16,
    fontSize: 28,
    fontWeight: 'bold',
  },

  tabSubtile: {
    marginTop: 40,
    paddingHorizontal: 16,
    fontSize: 16,
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

export default App;
