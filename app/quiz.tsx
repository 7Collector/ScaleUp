import { Icons } from "@/constants/Icons";
import { router } from "expo-router";
import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export class quiz extends Component {
  render() {
    return (
      <SafeAreaView className="bg-primary-background flex-1">
        <View className="relative flex-1">
          <View className="rounded-3xl bg-tertiary min-h-full mx-6 mt-16" />
          <View
            className="absolute top-0 right-0 left-0 flex-row justify-between items-center px-3 pt-6"
            style={{ zIndex: 1 }}
          >
            <View className="flex-row items-center">
              <Image
                source={Icons.back}
                className="w-8 h-8 mr-2"
                resizeMode="center"
              />
              <Text className="text-white text-xl">Quiz</Text>
            </View>
            <Image
              source={Icons.menuH}
              className="w-8 h-8 rotate-90"
              resizeMode="center"
            />
          </View>
          <ScrollView className="absolute top-20 right-0 left-0 bg-white h-full w-full rounded-t-3xl pt-4 pb-20 px-3">
            <View className="w-full items-center justify-between flex-row rounded-xl h-36 bg-primary px-6 py-4">
              <View className="flex-row items-center">
                <Image source={Icons.reward} className="w-10 h-10" />
                <View className="ml-2">
                  <Text className="text-white text-2xl font-bold">20</Text>
                  <Text className="text-white">World Ranking</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <Image source={Icons.points} className="w-10 h-10" />
                <View className="ml-2">
                  <Text className="text-white text-2xl font-bold">12000</Text>
                  <Text className="text-white">Points Earned</Text>
                </View>
              </View>
            </View>

            <ImageBackground
              source={Icons.backgroundS}
              resizeMode="cover"
              className="w-full mt-6 items-center justify-center rounded-xl py-6 overflow-hidden"
            >
              <Text className="text-xl font-bold text-primary">Last Quiz</Text>
              <Text className="text-lg text-white">UI/UX Design</Text>
              <Text className="text-base text-white">Points: 150</Text>
              <View className="flex-row items-center mt-2">
                <Image source={Icons.medal} className="w-6 h-6" />
                <Text className="ml-2 text-lg text-white">Rank: 1</Text>
              </View>
            </ImageBackground>

            <View className="w-full mt-6 items-center justify-center rounded-xl bg-primary p-6">
              <Text className="text-lg font-bold text-primary-background">FEATURED</Text>
              <Text className="text-center text-white mt-2">
                Amazing Quizzes lined up for you all in Upcoming Months
              </Text>
              <Text className="text-white mt-1">Stay Tuned..!</Text>
              <TouchableOpacity className="mt-4 px-6 py-2 bg-primary-background rounded-lg">
                <Text className="text-white">Turn on Notifications</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => router.push('/allQuizes')}
            >
            <ImageBackground
              source={Icons.backgroundS}
              resizeMode="cover"
              className="w-full mt-6 items-center justify-center py-12 rounded-xl overflow-hidden"
            >
              <Text className="text-white text-lg">View All Quizzes</Text>
            </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default quiz;
