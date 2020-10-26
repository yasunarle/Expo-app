import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
// Components
import SampleSpring from './src/components/samples/Spring'

import SampleReanimatedV2 from './src/components/samples/ReanimatedV2'

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

      <SampleReanimatedV2 />
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
