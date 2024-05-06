// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createProfiledDrawerNavigator} from '@shopify/react-native-performance-navigation-drawer';
// import HomeScreen from '../screen/HomeScreen';
// import ProfileScreen from '../screen/ProfileScreen';
// import Page1 from '../screen/Page1';
// import Page2 from '../screen/Page2';
// import Page3 from '../screen/Page3';
// import Page4 from '../screen/Page4';
// import CustomDrawer from './CustomDrawer';

// const Drawer = createProfiledDrawerNavigator();

// const MyDrawer = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerStatusBarAnimation: 'fade',
//         drawerType: 'front',
//         drawerActiveBackgroundColor: 'transparent',
//         drawerInactiveTintColor: '#333',
//         drawerAllowFontScaling: true,
//       }}
//       drawerContent={props => <CustomDrawer {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="Page1" component={Page1} />
//       <Drawer.Screen name="Page2" component={Page2} />
//       <Drawer.Screen name="Page3" component={Page3} />
//       <Drawer.Screen name="Page4" component={Page4} />
//     </Drawer.Navigator>
//   );
// };

// export default MyDrawer;
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
      {drawerOpen && (
        <View style={styles.drawer}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Profile')}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Page1')}>
            <Text>Page 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Page2')}>
            <Text>Page 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Page3')}>
            <Text>Page 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Page4')}>
            <Text>Page 4</Text>
          </TouchableOpacity>
        </View>
      )}

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
