import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Href, Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Icons } from "@/constants/Icons";

interface OnboardingLayoutProps {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  nextLink: Href<string | object>;
}

export class OnboardingLayout extends Component<OnboardingLayoutProps> {
  render() {
    const { imageSource, title, description, nextLink } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#F5BE0026", "#F5BE00"]}
          style={{ flex: 1 }}
          className="justify-center items-center"
        >
          <StatusBar style="dark" backgroundColor="transparent" />
          <Image source={imageSource} />
          <Text className="text-2xl text-primary font-bold mt-4">{title}</Text>
          <Text className="text-primary text-xl mt-2 font-bold mx-4 text-center">
            {description}
          </Text>
          <Link href={nextLink} asChild>
            <TouchableOpacity className="bg-white rounded-full p-2 w-12 h-12 mt-12 justify-center items-center">
              <Image
                source={Icons.arrowRight}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </Link>
        </LinearGradient>
      </View>
    );
  }
}

export default OnboardingLayout;
