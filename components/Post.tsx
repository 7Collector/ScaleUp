import { View, Text, Image } from "react-native";
import { Icons } from "@/constants/Icons";

export type PostProps = {
  avatarUrl: string;
  username: string;
  menuIconUrl: string;
  postImageUrl: string;
  likeIconUrl: string;
  commentIconUrl: string;
  shareIconUrl: string;
  bookmarkIconUrl: string;
  tags: string[];
  caption: string;
};

export default function Post({
  avatarUrl,
  username,
  postImageUrl,
  tags,
  caption,
}: PostProps) {
  return (
    <View className="my-2 bg-white rounded-lg">
      <View className="flex-row items-center mb-4">
        <Image
          source={{ uri: avatarUrl }}
          className="w-10 h-10 rounded-full mr-2 bg-shimmer"
        />
        <Text className="text-primary text-lg flex-grow">{username}</Text>
        <Image source={Icons.menu} className="w-6 h-6" />
      </View>

      <View className="mb-4 h-48 relative">
        <Image
          source={{ uri: postImageUrl }}
          resizeMode="cover"
          className="w-full h-48 bg-shimmer rounded-lg"
        />
        <Image
          source={Icons.verifiedBadge}
          className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full"
          style={{ resizeMode: "center" }}
        />
      </View>

      <View className="flex-row justify-between mb-1">
        <View className="flex-row space-x-4">
          <Image source={Icons.like} className="w-6 h-6" />
          <Image source={Icons.comment} className="w-6 h-6" />
          <Image source={Icons.share} className="w-6 h-6" />
        </View>
        <Image source={Icons.bookmark} className="w-6 h-6" />
      </View>

      <Text className="text-caption mb-2">{caption}</Text>

      <View className="flex-row space-x-2">
        {tags.map((tag, index) => (
          <Text
            key={index}
            className="px-3 py-1 bg-onboarding-gradient-start text-primary rounded-xl"
          >
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );
}
