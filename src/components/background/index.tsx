import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './style';

type propsType = {
  children: React.ReactNode;
  opacity?: number;
};
export const BackGround = (props: propsType) => {
  const { children, opacity = 0.1 } = props;
  const image = require('../../assets/background.jpeg');
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={[styles.background, { opacity: opacity }]}
    >
      {children}
    </ImageBackground>
  );
};
