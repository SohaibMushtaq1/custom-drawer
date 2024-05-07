import React, {useState} from 'react';
import {
  Animated,
  Pressable,
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
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
  const screens = ['Home', 'Profile', 'Page1', 'Page2', 'Page3', 'Page4'];
  const [selectedItem, setSelectedItem] = useState(screens[0]);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const HeaderRightButton = () => {
    return (
      <Pressable style={styles.headerButton} onPress={toggleDrawer}>
        <Text>{isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}</Text>
      </Pressable>
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

      {isDrawerOpen && (
        <CustomDrawer
          initialRoute={'Home'}
          screens={screens}
          visible={isDrawerOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          onNavigate={() => setIsDrawerOpen(false)}
        />
      )}
    </NavigationContainer>
  );
}

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
  backgroundSelected: {backgroundColor: 'lightgrey'},
});
