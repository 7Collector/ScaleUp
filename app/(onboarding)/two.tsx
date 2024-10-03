import OnboardingLayout from "@/components/OnboardingLayout";
import { Icons } from "@/constants/Icons";
import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export class two extends Component {
  render() {
    return (
      <OnboardingLayout
        imageSource={Icons.onboardingTwo}
        title="Personalized Learning Paths"
        description="Set your goals and interests to receive tailored course recommendations. We curate content just to help you stay motivated and achieve your objectives."
        nextLink="/three"
      />
    );
  }
}

export default two;
