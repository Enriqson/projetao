import React from "react";
import { View } from "react-native";
import ACTIVITY_METADATA from "@/utils/activityMetadata";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder";
import { Link } from "expo-router";

interface BlockProps {
  activityName?: string;
  children?: React.ReactNode;
  heigh?: number;
  width?: number;
  leftOffset?: number;
  borderRadius?: number;
  color_primary?: string;
  color_secondary?: string;
}

function Block({
  activityName,
  heigh,
  width,
  children,
  leftOffset = 10,
  borderRadius = 32,
  color_primary,
  color_secondary,
}: BlockProps) {
  let activityMetadata;
  if (activityName) {
    activityMetadata = ACTIVITY_METADATA[activityName];
    color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]];
    color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]];
  }

  return (
    <View className="my-5">
      <OffsetBorder
        color_primary={color_primary}
        color_secondary={color_secondary}
        height={heigh}
        width={width}
        leftOffset={leftOffset}
        borderRadius={borderRadius}
      >
        <View
          className="bg-white border-black border-[2px] flex-row justify-around px-4 py-2"
          style={{
            height: heigh,
            width: width,
            borderRadius: borderRadius,
          }}
        >
          {children}
        </View>
      </OffsetBorder>
    </View>
  );
}

export default Block;