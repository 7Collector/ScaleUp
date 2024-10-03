import OnboardingLayout from '@/components/OnboardingLayout'
import { Icons } from '@/constants/Icons'
import React, { Component } from 'react'
import { Text, TouchableOpacity, View , Image} from 'react-native'

export class three extends Component {
  render() {
    return (
        <OnboardingLayout
      imageSource={Icons.onboardingThree}
      title="Interactive & Engaging Features"
      description="Dive into a variety of interactive modules, quizzes, and community discussions. We make learning fun and interactive, ensuring you stay on track."
      nextLink="/four"
    />
    )
  }
}

export default three
