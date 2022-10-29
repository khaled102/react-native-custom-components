import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './style';

type propsType = {
  children: React.ReactNode;
  opacity?: number;
  image: any;
};
export const BackGround = (props: propsType) => {
  const { children, opacity = 0.1, image } = props;
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      imageStyle={{ opacity: opacity }}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};
