import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Animated, { Easing, Transition, useValue } from 'react-native-reanimated'

const SampleReanimated = () => {
  const value = useValue(0)
  const opacity = useValue(0)
  console.log(opacity)

  const config = {
    duration: 1000,
    toValue: 1,
    easing: Easing.inOut(Easing.ease),
  }

  const fadeIn = () => {
    Animated.timing(opacity, config).start()
  }
  useEffect(() => {
    fadeIn()
  }, [])

  return (
    <View>
      <Text>Sample Reanimated Component</Text>

      <Animated.View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'tomato',
          opacity,
          transform: [
            {
              translateX: value,
            },
          ],
        }}
      />
      <TouchableOpacity onPress={fadeIn}>
        <Text>Fade In</Text>
      </TouchableOpacity>
    </View>
  )
}
export default SampleReanimated
