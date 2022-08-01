import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IMyPrayers {
  columnId: number
}

export const MyPrayers = ({columnId}: IMyPrayers) => {
  return (
    <View>
      <Text>Prayers{columnId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})