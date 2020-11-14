import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CatImage from './CatImage';
import StepData from './StepData';

import { Constants } from 'react-native-unimodules';
console.log(Constants.systemFonts);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CatImage/> */}
      <StepData/>
      <Text style={{color: '#888', fontSize: 30}}>
          Hello World!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
