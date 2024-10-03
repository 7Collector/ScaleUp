import Post, { PostProps } from "@/components/Post";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { announcements, posts } from "@/constants/MockData";
import { Icons } from "@/constants/Icons";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary-background flex-1">
      <View className="relative flex-1">
        <View className="rounded-3xl bg-tertiary min-h-full mx-6 mt-16" />

        <View
          className="absolute top-0 right-0 left-0 flex-row justify-between items-center px-3 pt-4"
          style={{ zIndex: 1 }}
        >
          <Image
            source={Icons.menuH}
            className="h-8 w-8 rounded-full rotate-90"
            resizeMode="cover"
          />
          <View className="flex-row items-center gap-3">
            <Image
              source={Icons.notification}
              className="h-8 w-8 rounded-full"
              resizeMode="cover"
            />
            <Image
              source={Icons.chat}
              className="h-8 w-8 rounded-full"
              resizeMode="cover"
            />
            <Image
              source={Icons.bookmarkW}
              className="h-8 w-8 rounded-full"
              resizeMode="cover"
            />
          </View>
        </View>
        <ScrollView className="absolute top-20 right-0 left-0 bg-white h-full w-full rounded-t-3xl pt-4 pb-20 px-3">
          <Text className="text-xl text-primary">Announcements</Text>
          <View className="flex-row py-2">
            {announcements.map((item) => (
              <Image
                source={{ uri: item }}
                className="w-12 h-12 rounded-full mr-2 bg-shimmer"
                key={item}
              />
            ))}
          </View>
          {/*<TouchableOpacity onPress={() => router.push("/quiz")}><Text>Quizes</Text></TouchableOpaover*/}
          <Text className="text-xl text-primary mb-2">Post</Text>
          {posts.map((item) => (
            <Post {...item} key={item.username} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
