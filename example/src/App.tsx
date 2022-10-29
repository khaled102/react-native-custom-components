import * as React from 'react';

import { StyleSheet, Text } from 'react-native';
import { BackGround } from 'khaled-salem-custom-components';

export default function App() {
  const image = null;
  return (
    <BackGround image={image} opacity={0.1}>
      <Text style={styles.text}>Test custom image BG</Text>
    </BackGround>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 14,
  },
});
