import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './scr/HomeScreen'
import ItemScreen from './scr/ItemScreen'
import MyBooks from './scr/MyBooks'
import { createNavigationContainerRef } from '@react-navigation/native';


export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
const Drawer = createDrawerNavigator();
const myStack = createStackNavigator()


function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator initialRouteName="Home Screen">
        <Drawer.Screen name="Home Screen" component={HomeScreen} />
        <Drawer.Screen name="Item Screen" component={ItemScreen} />
        <Drawer.Screen name="My Books" component={MyBooks} />
      </Drawer.Navigator>

    </NavigationContainer>
  )

}


export default App