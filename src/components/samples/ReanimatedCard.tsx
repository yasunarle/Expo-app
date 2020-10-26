import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  spring,
  withTiming,
} from 'react-native-reanimated'

type Props = {
  // intervalMS: number
  content: string
  index: number
}

const Card = ({ content, index }: Props) => {
  const intervalMS = 400 * index
  // Note: Setup
  const offset = useSharedValue(50)
  const opacity = useSharedValue(0)
  const config = {
    duration: 650,
    easing: Easing.in(Easing.ease),
  }
  // Note: Methods
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(offset.value, config) }],
      opacity: withTiming(opacity.value, config),
    }
  })
  const delay = () => {
    setTimeout(() => {
      offset.value = 0
      opacity.value = 1
    }, intervalMS)
  }
  // Note: Created
  useEffect(() => {
    delay()
  }, [])
  return (
    <Animated.View style={[styles.card, animatedStyles]}>
      <Text style={{ fontSize: 26 }}>{content}</Text>
    </Animated.View>
  )
}
export default Card

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
})
