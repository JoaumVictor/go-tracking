import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { statusBarHeight } from '~/utils';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Olá, bem-vindo</Text>
      <Text style={styles.texts}>Status</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: statusBarHeight,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    backgroundColor: '#1D1C83',
    height: '10%',
    width: '100%',
  },
  texts: {
    color: '#fff',
    fontSize: 16,
  }
})