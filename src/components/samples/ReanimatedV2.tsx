import React, { useEffect, useState } from 'react'
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  spring,
  withTiming,
} from 'react-native-reanimated'

const { Value, timing } = Animated

const SampleReanimatedV2 = () => {
  const users = ['yasunari', 'react man', 'hoge']
  const trails = []
  // Note: Sample
  const sheredVal = useSharedValue(0)
  const transX = new Value(0)
  // Note: Setup
  const offset = useSharedValue(50)
  const opacity = useSharedValue(0)

  // Note: Methods
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(offset.value, {
            duration: 650,
            easing: Easing.in(Easing.ease),
          }),
        },
      ],
      opacity: withTiming(opacity.value, {
        duration: 650,
        easing: Easing.in(Easing.ease),
      }),
    }
  })

  // Note: Created
  useEffect(() => {
    offset.value = 0
    opacity.value = 1
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyles]}>
        <Text style={{ fontSize: 40 }}>Spring</Text>
      </Animated.View>
      {/* for each */}

      {/* <Button
        onPress={() => {
          offset.value = withSpring(Math.random(), {
            damping: 40,
            stiffness: 200,
          })
        }}
        title="Move"
      /> */}
    </View>
  )
}
export default SampleReanimatedV2
const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 200,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
})
