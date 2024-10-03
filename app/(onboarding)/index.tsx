import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Icons } from "@/constants/Icons";
import { StatusBar } from "expo-status-bar";
import OnboardingLayout from "@/components/OnboardingLayout";

export class OnboardingLayoutOne extends Component {
  render() {
    return (
      <OnboardingLayout
      imageSource={Icons.onboardingOne}
      title="Welcome to ScaleUp!"
      description="Your journey to focused, distraction-free learning starts here. Discover a platform designed to enhance your knowledge and keep you engaged."
      nextLink="/two"
    />
    );
  }
}

export default OnboardingLayoutOne;
