import { Dimensions, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { Content, Button, Text, View } from 'native-base';
import { Surface } from 'gl-react-expo';
import Tomb from './assets/tombstone.jpg'
import MemoizedFilteredImage from './FilteredImage';

const width = Dimensions.get('window').width;

class CatImage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      catOpacity: 1,
      blur: 10,
    };
  }

  updateOpacityBlur = async () => {
    // this.setState({ catOpacity: 0 })
    if(this.props.steps >= 6000)
    {
      this.setState({ blur: 0 });
    }
    else
    {
      this.setState({ blur: 10 - (0.001667 * this.props.steps) });
    }
    console.warn('steps: ', this.props.steps, ' blur: ', this.state.blur);
  };

  render() {
    return (
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <ImageBackground source={ Tomb } style={styles.tombstone}>
            <View style={{opacity: this.state.catOpacity}}>
              <Surface style={styles.modifiedCat} ref={ref => (this.image = ref)}>
                <MemoizedFilteredImage blur={this.state.blur}/>
              </Surface>
            </View>
          </ImageBackground>
          <Button
            rounded={false}
            style={styles.button}
            block
            onPress={this.updateOpacityBlur}>
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