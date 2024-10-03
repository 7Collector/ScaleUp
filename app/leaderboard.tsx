import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from "@/constants/Icons"; // Adjust the import as needed

const Leaderboard = () => {
  return (
    <SafeAreaView className="bg-primary-background flex-1">
      <View className="flex-row justify-between items-center px-4 pt-4">
        <TouchableOpacity>
          <Image source={Icons.back} className="w-6 h-6" resizeMode="contain" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Leaderboard</Text>
        <TouchableOpacity>
          <Image source={Icons.menuH} className="w-6 h-6" resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View className="flex-row justify-around items-center mt-6">
        <TouchableOpacity className="px-4 py-2 rounded-full bg-black">
          <Text className="text-white">Today</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-gray-600">Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-gray-600">All Time</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-end mt-8 px-4">
        <View className="flex-col items-center mx-2">
          <Image source={{ uri: 'https://example.com/avatar2.png' }} className="w-16 h-16 rounded-full" />
          <Text className="font-bold">Name</Text>
          <Text className="text-gray-500">Points</Text>
          <View className="bg-gray-200 h-20 w-12 rounded-t-md" />
        </View>

        <View className="flex-col items-center mx-2">
          <Image source={{ uri: 'https://example.com/avatar1.png' }} className="w-20 h-20 rounded-full" />
          <Text className="font-bold">Name</Text>
          <Text className="text-gray-500">Points</Text>
          <View className="bg-yellow-300 h-28 w-16 rounded-t-md" />
        </View>

        <View className="flex-col items-center mx-2">
          <Image source={{ uri: 'https://example.com/avatar3.png' }} className="w-16 h-16 rounded-full" />
          <Text className="font-bold">Name</Text>
          <Text className="text-gray-500">Points</Text>
          <View className="bg-gray-200 h-16 w-12 rounded-t-md" />
        </View>
      </View>

      <ScrollView className="mt-6">
        {Array(5).fill(0).map((_, index) => (
          <View key={index} className="flex-row justify-between items-center px-4 py-2 border-b border-gray-200">
            <View className="flex-row items-center">
              <Image
                source={{ uri: `https://example.com/avatar${index + 4}.png` }}
                className="w-12 h-12 rounded-full"
              />
              <View className="ml-4">
                <Text className="font-bold">Name</Text>
                <Text className="text-gray-400">Designation</Text>
              </View>
            </View>
            <Text className="font-bold text-gray-600">Points</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Leaderboard;
