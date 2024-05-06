import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomDrawer = (props: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <View style={styles.container}>
      {/* Main content */}
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>

      {/* Custom Drawer */}
      {/* {drawerOpen && ( */}
      <View style={styles.drawer}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => console.log('Navigate to Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => console.log('Navigate to Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => console.log('Navigate to Page 1')}>
          <Text>Page 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => console.log('Navigate to Page 2')}>
          <Text>Page 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => console.log('Navigate to Page 3')}>
          <Text>Page 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => console.log('Navigate to Page 4')}>
          <Text>Page 4</Text>
        </TouchableOpacity>
      </View>
      {/* )} */}

      {/* Drawer Toggle Button */}
      <TouchableOpacity
        style={styles.drawerToggleButton}
        onPress={toggleDrawer}>
        <Text>{drawerOpen ? 'Close Drawer' : 'Open Drawer'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#fff',
    elevation: 16,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  drawerItem: {
    marginBottom: 20,
  },
  drawerToggleButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default CustomDrawer;
