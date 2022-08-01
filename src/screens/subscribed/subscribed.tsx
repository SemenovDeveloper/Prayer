import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ISubscribed {
  columnId: number
}

export const Subscribed = ({columnId}: ISubscribed ) => {
  return (
    <View>
      <Text>Subscribed{columnId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})