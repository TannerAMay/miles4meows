import { Dimensions, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { Content, Button, Text, View } from 'native-base';
import { Surface } from 'gl-react-expo';
import Tomb from './assets/tombstone.jpg'
import FilteredImage from './FilteredImage';

const width = Dimensions.get('window').width;

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
    // console.warn('new opacity: ', this.state.catOpacity);
  };

  render() {
    return (
      <Content style={styles.content} showsVerticalScrollIndicator={false}>
        <ImageBackground source={Tomb} style={styles.tombstone}>
          <View style={{ opacity: this.state.catOpacity }}>
            <Surface style={styles.modifiedCat} ref={ref => (this.image = ref)}>
              <FilteredImage />
            </Surface>
          </View>
        </ImageBackground>
        <Button
          rounded={false}
          style={styles.button}
          block
          onPress={this.updateOpacity}>
          <Text>Change Opacity</Text>
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: { marginTop: 20, marginHorizontal: 20 },
  button: { marginVertical: 20, borderRadius: 0 },
  tombstone: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    opacity: 0.5  // Change opacity for tombstone image
  },
  modifiedCat: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: width,
    height: width,
  }
});

export default CatImage;