import { View, Text } from "react-native";
import React from "react";
import OffsetBorder from "@/components/OffsetBorder";
import { TAILWIND_THEME } from "@/utils/index";
import { Link } from "expo-router";
import ACTIVITY_METADATA from "@/utils/activityMetadata";
import Trophy from "@/components/svgs/misc/Trophy";

function ActivityBlock({ activityName, varWidth = "w-[80vw]" }) {
  const activityMetadata = ACTIVITY_METADATA[activityName];
  const color_primary =
    TAILWIND_THEME.colors["light_" + activityMetadata["color"]];
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]];
  const activityAlias = activityMetadata.alias;
  const Image = activityMetadata.image;

  const textStyle = {
    color: color_secondary,
  };
  return (
    <Link href={`/activity_details/${activityName}`} className="my-5">
      <OffsetBorder
        color_primary={color_primary}
        color_secondary={color_secondary}
      >
        <View className={"bg-white rounded-[32px] border-black border-[2px] flex-row lg:h-[12vh] lg:w-[30vw] h-[15vh] justify-around px-4 py-50 " + varWidth}>
          <View className="pt-2">
          <Image /></View>
          <View className="flex-col pl-2 pt-2">
            <Text
              className="text-[20px] text-center font-bold"
              style={textStyle}
            >
              {activityAlias}
            </Text>
            <View className="justify-around items-start flex-col text-[14px] font-medium">
              <View>
                <View
                  className="flex-row justify-between"
                  style={{ marginBottom: 20 }}
                >
                  <View className=" pr-5">
                    <Text
                      className="text-[14px] text-left font-medium"
                      style={textStyle}
                    >
                      Meta semanal:
                    </Text>
                  </View>
                  <View>
                    <Text style={textStyle}>{activityMetadata.weeklyGoal}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={[textStyle, { marginRight: 50 }]}>Conquistas</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: color_secondary }}>
                    {activityMetadata["achievements"]}
                  </Text>
                  <Trophy
                    color_primary={color_secondary}
                    color_secondary={color_primary}
                    width={21}
                    height={21}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </OffsetBorder>
    </Link>
  );
}

export default ActivityBlock;
