import React from 'react'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

//root stack paramlist add screen name here and also add in NavigationStrings.txs
import { RootStackParamList } from './RootStackParamList'
//screens
import { Home, Splash } from '../screens'





const Stack = createStackNavigator<RootStackParamList>()


const MainStack = () => {

const ScreenOptions:StackNavigationOptions={
  headerShown:false
}
  return (
    <Stack.Navigator initialRouteName='splash'>
    <Stack.Screen name='splash' component={Splash} options={ScreenOptions}/>
    <Stack.Screen name='home' component={Home} options={ScreenOptions}/>
  </Stack.Navigator>
  )
};




export default function StackNavigation() {
return ( 
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
)
 

}
