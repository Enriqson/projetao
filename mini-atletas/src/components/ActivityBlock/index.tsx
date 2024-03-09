import { View, Text } from 'react-native'
import React from 'react'
import OffsetBorder from "@/components/OffsetBorder";
import { TAILWIND_THEME } from "@/utils/index";
import { Link } from "expo-router";
import ACTIVITY_METADATA from '@/utils/activityMetadata';

function ActivityBlock({
  ActivitySvg,
  activityName,
}) {
  const activityMetadata = ACTIVITY_METADATA[activityName]
  const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]]
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]]
  const activityAlias = activityMetadata.alias
  const Trophy = activityMetadata.Trophy

  const textStyle = {
    color: color_secondary,
  };
  return (
    <Link href={`/activity_details/${activityName}`} className="my-5">
      <OffsetBorder
        color_primary={color_primary}
        color_secondary={color_secondary}
      >
        <View className="bg-white rounded-[32px] border-black border-[2px] flex-row lg:h-[12vh] lg:w-[30vw] h-[15vh] w-[80vw] justify-around px-4 py-5">
          <ActivitySvg />
          <View className="flex-col pl-2">
            <Text
              className="text-[20px] text-center font-bold"
              style={textStyle}
            >
              {activityAlias}
            </Text>
            <View className="justify-around items-start flex-col text-[14px] font-normal space-y-5">
              <View>
                <View className="flex-row justify-between">
                  <View className=" pr-5">
                    <Text
                      className="text-[14px] text-left font-normal"
                      style={textStyle}
                    >
                      Meta semanal:
                    </Text>
                  </View>
                  <View>
                    <Text style={textStyle}>1 Hora</Text>
                  </View>
                </View>
              </View>
              <View className="justify-around flex-row space-x-14">
                <Text
                  className="text-[14px] text-left font-normal"
                  style={textStyle}
                >
                  Conquistas
                </Text>
                <View className='flex-row'>
                  <Text style={{ color: color_secondary }}>{activityMetadata["achievements"]}</Text>
                  <Trophy color_primary={color_primary} color_secondary={color_secondary} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </OffsetBorder>
    </Link>
  );
}

export default ActivityBlock