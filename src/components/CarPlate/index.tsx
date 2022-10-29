import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { Shadow } from 'react-native-shadow-2';

type propsType = {
  car: {
    plate_color: any;
    brand: string;
    character: string | number;
    number: string | number;
  };
  type?: string;
};
export const CarPlate = (props: propsType) => {
  const { car, type } = props;
  return (
    <View
      style={type === 'details' ? styles.detailsCntainer : styles.container}
    >
      <Shadow distance={7}>
        <View style={styles.platContainer}>
          <View style={styles.innerShaodw} />
          <View
            style={[
              styles.mainContainer,
              { backgroundColor: car?.plate_color?.color },
            ]}
          >
            <View style={styles.dot} />
            <Text style={styles.brandName}>{car?.brand}</Text>
            <View style={styles.dot} />
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.carNumber}>{car?.character}</Text>
            <Shadow distance={7}>
              <View style={styles.line} />
            </Shadow>
            <Text style={styles.carNumber}>{car?.number}</Text>
          </View>
        </View>
      </Shadow>
    </View>
  );
};
