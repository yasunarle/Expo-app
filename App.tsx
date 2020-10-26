import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
// Components
import SampleSpring from './src/components/SampleSpring'
import SampleReanimated from './src/components/SampleReanimated'

export default function App() {
  return (
    <View style={styles.container}>
      <SampleSpring />
      <Text
        style={{
          fontSize: 30,
          color: 'red',
        }}
      >
        ↑spring -- ↓reanimated
      </Text>
      <SampleReanimated />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
