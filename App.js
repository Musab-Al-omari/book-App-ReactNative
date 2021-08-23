import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, } from '@react-navigation/stack'

import HomeScreen from './scr/HomeScreen'
import ItemScreen from './scr/ItemScreen'

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

const myStack = createStackNavigator()

function App() {


  return (
    <NavigationContainer  ref={navigationRef}>
      <myStack.Navigator>
        <myStack.Screen name='Home Screen' component={HomeScreen} />
        <myStack.Screen name='Item Screen' component={ItemScreen} />
      </myStack.Navigator>
    </NavigationContainer>
  )

}


export default App