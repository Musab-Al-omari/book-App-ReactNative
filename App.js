import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './scr/HomeScreen'

const myStack = createStackNavigator()

function App() {


  return (
    <NavigationContainer>
      <myStack.Navigator>
        <myStack.Screen name='Home Screen' component={HomeScreen} />
      </myStack.Navigator>
    </NavigationContainer>
  )

}


export default App