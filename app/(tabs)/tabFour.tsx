import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export class tabFour extends Component {
  render() {
    return (
        <SafeAreaView className="bg-primary-background flex-1">
        <View className="relative flex-1">
          <View className="rounded-3xl bg-tertiary min-h-full mx-6 mt-16" />
          <View className="absolute top-20 right-0 left-0 bg-white h-full w-full rounded-t-3xl items-center"></View>
        </View>
      </SafeAreaView>
    )
  }
}

export default tabFour
