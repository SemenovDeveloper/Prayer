import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { SignInForm, SignUpForm } from './components'

export const Auth = () => {
  const [isRegistrated, setIsRegistrated] = useState<boolean>(false)
  
  return (
    <SafeAreaView style={styles}>
      {isRegistrated ? <SignInForm /> : <SignUpForm />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})