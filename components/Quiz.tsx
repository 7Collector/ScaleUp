import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icons } from "@/constants/Icons";

// Define the type for the props
interface QuizItemProps {
  name: string;
  category: string;
  reward: string;
  date: string;
  time: string;
}

const QuizItem: React.FC<QuizItemProps> = ({ name, category, reward, date, time }) => {
  return (
    <View className="w-full flex-row justify-between bg-white shadow-xl rounded-xl p-4 mt-4">
      <View className="flex-row items-center">
        <Image source={Icons.quiz} className="w-10 h-10 mr-4" />
        <View>
          <Text className="text-black font-bold">{name}</Text>
          <Text className="text-gray-400">{category}</Text>
          <Text className="text-gray-500 mt-1">{reward}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-black font-bold">{date}</Text>
        <Text className="text-gray-500">{time}</Text>
      </View>
    </View>
  );
};

export default QuizItem;
