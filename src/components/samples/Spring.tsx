// Note: Type Error => 2個
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { useSpring, animated, useTransition, useTrail } from 'react-spring/native'

const AnimatedView = animated(View)
const AnimatedText = animated(Text)

const SampleSpringComponent = () => {
  const [users, setUsers] = useState([{ name: 'yasunari' }, { name: 'react man' }, { name: 'hoge' }])

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  })

  const trail = useTrail(users.length, {
    from: {
      marginLeft: -40,
      opacity: 0,
    },
    to: {
      marginLeft: 0,
      opacity: 1,
    },
  })
  return (
    <View>
      {trail.map((props, index) => {
        // console.log('--- trail map each ---')
        // console.log(props)
        // console.log(index)
        return (
          <AnimatedView style={props} key={index}>
            <Text style={{ fontSize: 28 }}>{users[index].name}</Text>
          </AnimatedView>
        )
      })}
      <AnimatedView style={springProps}>
        <Text style={{ fontSize: 40 }}>spring</Text>
      </AnimatedView>
    </View>
  )
}
export default SampleSpringComponent
