import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

const width = Dimensions.get('window').width;

const HistorySection = ({
  Header,
  HeaderColor,
  SubHeader,
  Content,
  ImageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionHeaderText, {color: HeaderColor}]}>
          {/* <Image style={styles.sectionImage} source={{ImageSource}} /> */}
          {ImageSource}
          {Header}
        </Text>

        <Text style={{fontSize: 16, fontWeight: 'bold', paddingHorizontal: 16}}>
          {SubHeader}
        </Text>
        <Text style={{paddingHorizontal: 16}}>{Content}</Text>
      </View>
    </TouchableOpacity>
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
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },

  sectionHeaderText: {
    fontSize: 18,
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

export default HistorySection;
