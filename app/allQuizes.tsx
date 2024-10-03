import { Icons } from "@/constants/Icons";
import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuizItem from "../components/Quiz";

export class UpcomingQuizzes extends Component {
  render() {
    return (
      <SafeAreaView className="bg-primary-background flex-1">
        <View className="relative flex-1">
          {/* Background container */}
          <View className="rounded-3xl bg-tertiary min-h-full mx-6 mt-16" />

          {/* Top navigation bar */}
          <View
            className="absolute top-0 right-0 left-0 flex-row justify-between items-center px-3 pt-4"
            style={{ zIndex: 1 }}
          >
            <View className="flex-row items-center">
              <TouchableOpacity>
                <Image
                  source={Icons.back}
                  className="w-8 h-8"
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text className="text-white text-xl ml-2">Upcoming Quizzes</Text>
            </View>
            <Image
              source={Icons.menuH}
              className="w-8 h-8 rotate-90"
              resizeMode="center"
            />
          </View>

          {/* Main scrollable content */}
          <ScrollView className="absolute top-20 right-0 left-0 bg-white h-full w-full rounded-t-3xl pt-4 pb-20 px-3">
            
            {/* Search Bar */}
            <View className="w-full flex-row items-center bg-gray-200 rounded-xl px-4 py-2">
              <Image source={Icons.search} className="w-6 h-6 mr-2" />
              <TextInput
                className="flex-1"
                placeholder="Search"
                placeholderTextColor="gray"
              />
              <TouchableOpacity>
                <Image source={Icons.filter} className="w-6 h-6" />
              </TouchableOpacity>
            </View>

            {/* Tabs for quiz status (Upcoming, Active, Completed) */}
            <View className="w-full flex-row justify-between items-center mt-4 px-3">
              <TouchableOpacity className="flex-1 items-center">
                <Text className="text-primary-background font-bold">UPCOMING</Text>
                <View className="w-full h-1 bg-primary-background mt-1" />
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 items-center">
                <Text className="text-disabled">ACTIVE</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 items-center">
                <Text className="text-disabled">COMPLETED</Text>
              </TouchableOpacity>
            </View>

            {/* List of Upcoming Quizzes */}
            <View className="mt-4">
              {/* Render QuizItem components */}
              {Array(4).fill(0).map((_, index) => (
                <QuizItem
                  key={index}
                  name="Quiz Name"
                  category="Category"
                  reward="🎁 Surprise Reward for Top 3 Winners"
                  date="10/09/2024"
                  time="10:00 am"
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default UpcomingQuizzes;
