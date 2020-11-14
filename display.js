import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import topFrame from './assets/frame-tp.png';
import bottomFrame from './assets/frameInverted-tp.png';
import CatImage from './CatImage';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Frames extends React.Component {
  render() {
    return (
      <View style={styles.container}>
	    <View style={styles.backgroundContainer}>
	      <CatImage style={{flex: 1, flexDirection: 'column'}} />
		</View>
		<View style={styles.overlay}>
		  <Image source={topFrame} style={styles.topFrame} />
		  <Image source={bottomFrame} style={styles.bottomFrame} />
		  <StatusBar style="auto" />
	    </View>
      </View>
	);
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
	top: 200,
	bottom: 0,
	left: 100,
	right: 0,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
	flexDirection: 'column',
	height: height,
	alignItems: 'center',
	justifyContent: 'flex-start',
	position: 'absolute',
	  top: height * 0.07,
	  bottom: 0,
	  left: 0,
	  right: 0,
  },
  container: {
	  flex: 1,
	  alignItems: 'center',
  },
  topFrame: {
	  width: width,
	  height: height * 0.4,
	  resizeMode: 'contain',
	  marginLeft: width * 0.005,
  },
  bottomFrame: {
	width: width,
	height: height * 0.4,
	resizeMode: 'contain',
	marginTop: height * 0.07,
	marginLeft: width * 0.005,
  }
});

export default Frames;
