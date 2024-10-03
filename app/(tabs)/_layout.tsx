import { Icons } from "@/constants/Icons";
import { Tabs } from "expo-router";
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({
  focused,
  tab,
  icon,
}: {
  focused: boolean;
  tab: string;
  icon: any;
}) => (
  <View className="items-center justify-center">
    <View
      style={{
        transform: focused ? [{ translateY: -8 }] : undefined,
      }}
      className={`p-2 rounded-full ${focused ? "bg-white -mt-4" : "bg-primary"}`}
    >
      <View className={`${focused ? "rounded-full bg-primary p-2" : "items-center justify-center"}`}>
        <Image
          className="w-8 h-8"
          source={icon}
        />
      </View>
    </View>

    {focused && <Text className="text-white mt-1" style={{
        transform: focused ? [{ translateY: -8 }] : undefined,
      }}>{tab}</Text>}
  </View>
);


export class TabLayout extends Component {
  render() {
    return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 75, backgroundColor: "#043142" },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              TabIcon({ focused, tab: "Home", icon: Icons.home }),
          }}
        />
        <Tabs.Screen
          name="tabTwo"
          options={{
            title: "two",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              TabIcon({ focused, tab: "two", icon: Icons.search }),
          }}
        />
        <Tabs.Screen
          name="tabThree"
          options={{
            title: "three",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              TabIcon({ focused, tab: "three", icon: Icons.plus }),
          }}
        />
        <Tabs.Screen
          name="tabFour"
          options={{
            title: "four",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              TabIcon({ focused, tab: "four", icon: Icons.book }),
          }}
        />
        <Tabs.Screen
          name="tabFive"
          options={{
            title: "five",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              TabIcon({ focused, tab: "five", icon: Icons.profile }),
          }}
        />
      </Tabs>
    );
  }
}

export default TabLayout;
