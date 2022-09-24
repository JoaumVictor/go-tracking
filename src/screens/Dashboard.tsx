import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './../components/Header';
import DashboardPanel from './../components/DashboardPanel';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Header />
      <DashboardPanel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  }
})