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
// Components
import Card from './ReanimatedCard'
const SampleReanimatedV2 = () => {
  // Note: Setup
  const users = ['yasunari', 'ootake', 'yamada']

  return (
    <View>
      {users.map((name, index) => (
        <Card content={name} index={index} />
      ))}
    </View>
  )
}
export default SampleReanimatedV2
