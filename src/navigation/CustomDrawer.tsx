import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

const CustomDrawer = ({
  screens,
  visible,
  onNavigate,
  initialRoute,
  selectedItem,
  setSelectedItem,
}: any) => {
  // const [selectedItem, setSelectedItem] = useState(
  //   initialRoute || screens[0] || '',
  // );
  const navigation = useNavigation();

  useEffect(() => {
    console.log('selectedItem===============', selectedItem);
  }, [selectedItem, setSelectedItem]);

  const navigate = (screen: any) => {
    console.log('Current selectedItem:', selectedItem);
    setSelectedItem(screen); // Update selected item when navigating
    console.log('New selectedItem:', screen);
    navigation.navigate(screen);
    onNavigate();
  };

  if (visible) {
    return (
      <ScrollView style={[styles.drawer]}>
        {screens.map((item: any, index) => (
          <Pressable
            key={index}
            style={[
              styles.drawerItem,
              selectedItem === item ? styles.backgroundSelected : null,
            ]}
            onPress={() => navigate(item)}>
            <Text>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#fff',
    elevation: 16,
    paddingTop: 40,
    paddingHorizontal: 5,
  },
  drawerItem: {
    marginBottom: 15,
    width: '90%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundSelected: {
    backgroundColor: 'lightblue',
  },
});

export default CustomDrawer;
