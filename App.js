import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import CatImage from './CatImage';
import Frame from './display';
import topFrame from './assets/frame-tp.png';
import bottomFrame from './assets/frameInverted-tp.png';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
	
  return ( <Frame/> );
}
