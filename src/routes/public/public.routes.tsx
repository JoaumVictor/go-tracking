import React from 'react'
import { StyleSheet } from 'react-native'
import Dashboard from './../../screens/Dashboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function PrivateRoute() {
  const AuthStack = createNativeStackNavigator()

  return (
    <AuthStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: true }}
    >
      <AuthStack.Screen name="Dashboard" component={Dashboard} />
    </AuthStack.Navigator>
  )
}

const styles = StyleSheet.create({})