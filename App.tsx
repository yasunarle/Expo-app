import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
// react-spring
import { useSpring, animated, useTransition } from 'react-spring/native'

const AnimatedView = animated(View)
const AnimatedText = animated(Text)

export default function App() {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  })

  return (
    <View style={styles.container}>
      <AnimatedView style={springProps}>
        <Text style={{ fontSize: 40 }}>spring</Text>
      </AnimatedView>
      <Text>Open up App.tsx to start working on your app!</Text>
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
