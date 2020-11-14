import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
import StepData from './StepData';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://thiscatdoesnotexist.com/' }} style={{ width: 305, height: 159 }} />
      <Text style={{ color: '#888', fontSize: 30 }}>
        Hello World!
      </Text>
      <StepData></StepData>
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


