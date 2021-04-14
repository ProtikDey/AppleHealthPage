import React, {Component} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const ScreenWidth = Dimensions.get('window').width;

class BarChartClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.week,
    };
  }
  Load_Week_Data = () => {
    this.setState({
      data: this.props.week,
    });
  };
  Load_Month_Data = () => {
    this.setState({
      data: this.props.month,
    });
  };
  Load_Year_Data = () => {
    this.setState({
      data: this.props.year,
    });
  };

  // constructor(props) {
  //   super(props);

  //   Obj = new Chart();
  // }

  // CallFunction_1 = () => {
  //   Obj.Load_Week_Data();
  // };

  // CallFunction_2 = () => {
  //   Obj.Load_Month_Data();
  // };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E0E0E0'}}>
        <View style={styles.timeSectionContainer}>
          <TouchableOpacity onPress={this.Load_Week_Data}>
            <Text>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Load_Week_Data}>
            <Text style={{paddingHorizontal: 50}}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Load_Month_Data}>
            <Text style={{paddingHorizontal: 25}}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Load_Year_Data}>
            <Text style={{paddingHorizontal: 50}}>Year</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <BarChart
            //style={styles.sectionContainer}
            // style={graphStyle}
            data={this.state.data}
            width={ScreenWidth}
            height={500}
            yAxisLabel={'$'}
            chartConfig={chartConfig}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: 'black',
  backgroundGradientToOpacity: 0,
  fillShadowGradient: 'black',
  fillShadowGradientOpacity: 1,
  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({
  timeSectionContainer: {
    flexDirection: 'row',
    //flex: 0.5,
    marginTop: 48,
    paddingHorizontal: 25,
    //backgroundColor: 'grey',
  },

  sectionContainer: {
    flex: 0.1,
    marginTop: 48,
    paddingHorizontal: 5,
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

export default BarChartClass;
