import React from 'react'
import Dashboard from './../../screens/Dashboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsPublicNavigationStack } from '../@types';

export default function PrivateRoute() {
  const AuthStack = createNativeStackNavigator<propsPublicNavigationStack>()

  return (
    <AuthStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Dashboard" component={Dashboard} />
      {/* <AuthStack.screen name={'Status'} component={Status} /> */}
    </AuthStack.Navigator>
  )
}
