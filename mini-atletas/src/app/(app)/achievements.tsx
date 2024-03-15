import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { default as AchievementSvg } from "@/components/svgs/misc/achievement";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder";
import { Link, useLocalSearchParams } from "expo-router";
import ACHIEVEMENT_METADATA from "@/utils/achievementMetadata";

const ACHIEVEMENT_PER_TAB = {
  0: ["blue_1", "blue_2", "blue_3"],
  1: ["yellow_1", "yellow_2", "yellow_3"],
  2: ["pink_1", "pink_2", "pink_3"],
  3: ["green_1", "green_2", "green_3"],
};

export default function Page() {
  const { tab } = useLocalSearchParams();
  const [selectedTab, setSelectedTab] = useState(tab ? tab : 0);
  return (
    <View className="flex flex-col items-center h-[120vh] bg-white">
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Content selectedTab={selectedTab} />
    </View>
  );
}

function AchievementSvgWrapper({ achievement, idx }) {
  const alignSide = idx % 2 == 0 ? "items-start" : "items-end";
  const translateY = idx * -30;
  const metadata = ACHIEVEMENT_METADATA[achievement];
  const Image = metadata.image;
  return (
    <View
      className={alignSide}
      style={{ transform: [{ translateY: translateY }] }}
    >
      <Link href={`/achievement_details/${achievement}`} asChild>
        <TouchableOpacity>
          <Image width={140} height={190} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

function Content({ selectedTab }) {
  const achievements = ACHIEVEMENT_PER_TAB[selectedTab];
  return (
    <View className="flex-col w-3/4 lg:w-1/5 pt-8">
      {achievements.map((ach, idx) => {
        return <AchievementSvgWrapper key={idx} achievement={ach} idx={idx} />;
      })}
    </View>
  );
}

function TabNavigationButton({
  color_primary,
  color_secondary,
  onPress,
  is_selected,
  ...props
}) {
  const baseWrapperStyle = "justify-around items-center px-4 py-[9px] bg-white";
  const activeWrapperStyle =
    baseWrapperStyle + " rounded-[20px] border-black border-[2px]";
  const baseBorderOffset = 0;
  const activeBorderOffset = 10;

  let wrapperStyle = is_selected ? activeWrapperStyle : baseWrapperStyle;
  let borderOffset = is_selected ? activeBorderOffset : baseBorderOffset;

  return (
    <View>
      <OffsetBorder
        leftOffset={0}
        bottomOffset={borderOffset}
        borderRadius={20}
        color_primary={color_primary}
        color_secondary={color_secondary}
      >
        <View className={wrapperStyle}>
          <TouchableOpacity onPress={onPress}>
            <AchievementSvg
              color_primary={color_primary}
              color_secondary={color_secondary}
            ></AchievementSvg>
          </TouchableOpacity>
        </View>
      </OffsetBorder>
    </View>
  );
}

function Header({ selectedTab, setSelectedTab }) {
  const handlePress = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <View className="h-14 flex-row items-center justify-around lg:w-2/5 w-3/4 pt-4 self-center">
      <TabNavigationButton
        is_selected={selectedTab == 0}
        onPress={() => handlePress(0)}
        color_primary={TAILWIND_THEME.colors.light_blue}
        color_secondary={TAILWIND_THEME.colors.blue}
      />
      <TabNavigationButton
        is_selected={selectedTab == 1}
        onPress={() => handlePress(1)}
        color_primary={TAILWIND_THEME.colors.light_yellow}
        color_secondary={TAILWIND_THEME.colors.yellow}
      />
      <TabNavigationButton
        is_selected={selectedTab == 2}
        onPress={() => handlePress(2)}
        color_primary={TAILWIND_THEME.colors.light_pink}
        color_secondary={TAILWIND_THEME.colors.pink}
      />
      <TabNavigationButton
        is_selected={selectedTab == 3}
        onPress={() => handlePress(3)}
        color_primary={TAILWIND_THEME.colors.light_green}
        color_secondary={TAILWIND_THEME.colors.green}
      />
    </View>
  );
}
