import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export class OnboardingLayout extends Component {
  render() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
    );
  }
}

export default OnboardingLayout;