import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
import Routes from '~/routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor='#1D1C83' />
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
