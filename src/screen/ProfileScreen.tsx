import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Easing, StyleSheet, View} from 'react-native';

const ProfileScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isTop, setIsTop] = useState(true);

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIsTop(!isTop);
    });
  };

  useEffect(() => {
    startAnimation(isTop ? 1 : 0);
  }, [isTop]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get('window').height - 70],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.square, {transform: [{translateY}]}]}></Animated.View>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
  },
});
