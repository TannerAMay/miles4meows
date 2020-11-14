import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { Content } from 'native-base';
import { Surface } from 'gl-react-expo';
import ImageFilters from 'react-native-gl-image-filters';
import Filter from './Filter';

const width = Dimensions.get('window').width;

// Min and Max range for each filter.
const settings = [
  {
    name: 'hue',
    minValue: 0,
    maxValue: 6.3,
  },
  {
    name: 'blur',
    minValue: 0,
    maxValue: 30,
  },
  {
    name: 'sepia',
    minValue: -5,
    maxValue: 5,
  },
  {
    name: 'sharpen',
    minValue: 0,
    maxValue: 15,
  },
  {
    name: 'negative',
    minValue: -2.0,
    maxValue: 2.0,
  },
  {
    name: 'contrast',
    minValue: -10.0,
    maxValue: 10.0,
  },
  {
    name: 'saturation',
    minValue: 0.0,
    maxValue: 2,
  },
  {
    name: 'brightness',
    minValue: 0,
    maxValue: 5,
  },
  {
    name: 'temperature',
    minValue: 0.0,
    maxValue: 40000.0,
  },
];

const state = {
    ...settings,
    hue: 6.3,
    blur: 0,
    sepia: 0,
    sharpen: 0,
    negative: 0,
    contrast: 1,
    saturation: 1,
    brightness: 1,
    temperature: 6500,
  };
 
class CatImage extends React.Component {
  render() {
    return (
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <Surface style={{ width, height: width }} ref={ref => (this.image = ref)}>
            <ImageFilters {...this.state} width={width} height={width}>
              {{ uri: 'https://thiscatdoesnotexist.com' }}
            </ImageFilters>
          </Surface>
          {settings.map(filter => (
            <Filter
              key={filter.name}
              name={filter.name}
              minimum={filter.minValue}
              maximum={filter.maxValue}
              onChange={value => this.setState({ [filter.name]: value })}
            />
          ))}
        </Content>
          
    );
  }
}

const styles = StyleSheet.create({
  content: { marginTop: 20, marginHorizontal: 20 },
  button: { marginVertical: 20, borderRadius: 0 },
});

export default CatImage;