import { Dimensions, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { Content, Button, Text, View } from 'native-base';
import { Surface } from 'gl-react-expo';
import Tomb from './assets/tombstone.jpg'
import FilteredImage from './FilteredImage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class CatImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      catOpacity: 1
    };
    console.warn('props is ', props);
  }

  updateOpacity = async () => {
    this.setState({ catOpacity: 0 })
  };

  render() {
    return (
      <Content style={styles.content} showsVerticalScrollIndicator={false}>
        <ImageBackground source={Tomb} resizeMode='contain' style={styles.tombstone}>
          <View style={{ opacity: this.state.catOpacity }}>
            <Surface style={styles.modifiedCat} ref={ref => (this.image = ref)}>
              <FilteredImage/>
            </Surface>
          </View>
        </ImageBackground>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: { marginTop: 20, marginHorizontal: 20 },
  tombstone: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.5,  // Change opacity for tombstone image
	width: width,
  },
  modifiedCat: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: width * 0.78,
    height: height * 0.3,
  }
});

export default CatImage;