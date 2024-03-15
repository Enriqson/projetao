import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder";
import ACHIEVEMENT_METADATA from "@/utils/achievementMetadata";
import { default as DetailSvg } from "@/components/svgs/achievements/achievement_detail";

export default function Page() {
  const { achievement } = useLocalSearchParams();

  return (
    <View className="flex flex-1">
      <Content achievement={achievement} />
    </View>
  );
}

function Content({ achievement }) {
  const achievementMetadata = ACHIEVEMENT_METADATA[achievement];
  const color_primary =
    TAILWIND_THEME.colors["light_" + achievementMetadata["color"]];
  const color_secondary = TAILWIND_THEME.colors[achievementMetadata["color"]];
  const Image = achievementMetadata["image"];
  const activityName = achievementMetadata["activity"];

  return (
    <View className="justify-center items-center flex-col">
      <View className="my-4">
        <Text className="text-[24px] font-medium color-slate-500">
          {activityName}
        </Text>
      </View>
      <Image width={140} height={190} />
      <View className="my-4">
        <Text className="text-[24px] font-medium color-slate-500">
          Informações adicionais
        </Text>
      </View>
      <OffsetBorder
        color_primary={color_primary}
        color_secondary={color_secondary}
      >
        <View>
          <DetailSvg 
        color_primary={color_primary}
        color_secondary={color_secondary}/>
        </View>
      </OffsetBorder>
    </View>
  );
}
