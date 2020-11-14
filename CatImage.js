import React from 'react';
import { Image } from 'react-native';

const CatImage = () => {
    let pic = {
      uri: 'https://thiscatdoesnotexist.com/'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110, marginTop:50}}/>
    );
}

export default CatImage;