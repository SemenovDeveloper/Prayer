import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

export const Auth = () => {
  const [isRegistrated, setIsRegistrated] = useState<boolean>(true)
  
  return (
    <SafeAreaView style={styles}>
      {isRegistrated ? <Text>Log In</Text>: <Text>Log Up</Text>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})