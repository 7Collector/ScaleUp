import OnboardingLayout from '@/components/OnboardingLayout'
import { Icons } from '@/constants/Icons'
import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

export class four extends Component {
  render() {
    return (
        <OnboardingLayout
      imageSource={Icons.onboardingFour}
      title="Track Your Progress"
      description="Use our analytics tools to monitor your learning journey, get detailed feedback, insights, celebrate your achievements and identify areas for improvement."
      nextLink="/auth"
    />
    )
  }
}

export default four
