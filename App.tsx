import React, {useRef, useState} from 'react';
import {Animated, TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomDrawer from './src/navigation/CustomDrawer';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import Page1 from './src/screen/Page1';
import Page2 from './src/screen/Page2';
import Page3 from './src/screen/Page3';
import Page4 from './src/screen/Page4';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const drawerTranslateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const CustomDrawer = () => {
    const navigation = useNavigation();
    const navigate = (screen: any) => {
      setIsDrawerOpen(false);
      navigation.navigate(screen);
    };
    return (
      <Animated.View
        style={[styles.drawer, {transform: [{translateX: drawerTranslateX}]}]}>
        {/* <TouchableOpacity
          onPress={() => {
            console.log('pressed');
          }}>
          <Text>test</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigate('Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigate('Page1')}>
          <Text>Page 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigate('Page2')}>
          <Text>Page 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigate('Page3')}>
          <Text>Page 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigate('Page4')}>
          <Text>Page 4</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const HeaderRightButton = () => {
    return (
      <TouchableOpacity style={styles.headerButton} onPress={toggleDrawer}>
        <Text>{isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => <HeaderRightButton />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerRight: () => <HeaderRightButton />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{
            headerRight: () => <HeaderRightButton />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{
            headerRight: () => <HeaderRightButton />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Page3"
          component={Page3}
          options={{
            headerRight: () => <HeaderRightButton />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Page4"
          component={Page4}
          options={{
            headerRight: () => <HeaderRightButton />,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>

      {isDrawerOpen && <CustomDrawer />}
    </NavigationContainer>
  );
}

const MainScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomDrawer />
    </View>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  drawer: {
    flex: 1,
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
});

// import React, {useState, useRef} from 'react';
// import {TouchableOpacity, Text, StyleSheet, View, Animated} from 'react-native';
// import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screen/HomeScreen';
// import ProfileScreen from './src/screen/ProfileScreen';
// import Page1 from './src/screen/Page1';
// import Page2 from './src/screen/Page2';
// import Page3 from './src/screen/Page3';
// import Page4 from './src/screen/Page4';

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   const navigation = useNavigation();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const drawerAnimation = useRef(new Animated.Value(0)).current;

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//     Animated.timing(drawerAnimation, {
//       toValue: isDrawerOpen ? 0 : 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const navigate = screen => {
//     setIsDrawerOpen(false);
//     navigation.navigate(screen);
//   };

// const drawerTranslateX = drawerAnimation.interpolate({
//   inputRange: [0, 1],
//   outputRange: [-200, 0],
// });

//   const HeaderRightButton = () => {
//     return (
//       <TouchableOpacity style={styles.headerButton} onPress={toggleDrawer}>
//         <Text>{isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerRight: () => <HeaderRightButton />,
//             headerTitleAlign: 'center',
//           }}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             headerRight: () => <HeaderRightButton />,
//             headerTitleAlign: 'center',
//           }}
//         />
//         <Stack.Screen
//           name="Page1"
//           component={Page1}
//           options={{
//             headerRight: () => <HeaderRightButton />,
//             headerTitleAlign: 'center',
//           }}
//         />
//         <Stack.Screen
//           name="Page2"
//           component={Page2}
//           options={{
//             headerRight: () => <HeaderRightButton />,
//             headerTitleAlign: 'center',
//           }}
//         />
//         <Stack.Screen
//           name="Page3"
//           component={Page3}
//           options={{
//             headerRight: () => <HeaderRightButton />,
//             headerTitleAlign: 'center',
//           }}
//         />
//         <Stack.Screen
//           name="Page4"
//           component={Page4}
//           options={{
//             headerRight: () => <HeaderRightButton />,
//             headerTitleAlign: 'center',
//           }}
//         />
//       </Stack.Navigator>
//       <View style={styles.container}>
//         <Animated.View
//           style={[
//             styles.drawer,
//             {transform: [{translateX: drawerTranslateX}]},
//           ]}>
//           <TouchableOpacity
//             style={styles.drawerItem}
//             onPress={() => navigate('Home')}>
//             <Text>Home</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.drawerItem}
//             onPress={() => navigate('Profile')}>
//             <Text>Profile</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.drawerItem}
//             onPress={() => navigate('Page1')}>
//             <Text>Page 1</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.drawerItem}
//             onPress={() => navigate('Page2')}>
//             <Text>Page 2</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.drawerItem}
//             onPress={() => navigate('Page3')}>
//             <Text>Page 3</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.drawerItem}
//             onPress={() => navigate('Page4')}>
//             <Text>Page 4</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       </View>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   headerButton: {
//     marginRight: 10,
//     padding: 10,
//     backgroundColor: 'lightblue',
//     borderRadius: 5,
//   },
//   drawer: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     width: 200,
//     backgroundColor: '#fff',
//     elevation: 16,
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   drawerItem: {
//     marginBottom: 20,
//   },
// });
