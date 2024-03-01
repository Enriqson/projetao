import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { default as AchievementSvg } from "../svgs/misc/achievement";
import { default as HomeSvg } from "../svgs/misc/home";
import { default as ProfileSvg } from "../svgs/misc/profile";

export default function NavBar() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="absolute self-center flex-row shrink-2 lg:w-1/4 w-3/4 justify-around py-4 px-8 rounded-[32px] border-2 border-b-[10px] border-dark_blue"
      style={{ bottom: bottom + 30 }}
    >
      <Link suppressHighlighting href="/achievements">
        <AchievementSvg />
      </Link>
      <Link suppressHighlighting href="/">
        <HomeSvg />
      </Link>
      <Link suppressHighlighting href="/profile">
        <ProfileSvg />
      </Link>
    </View>
  );
}
