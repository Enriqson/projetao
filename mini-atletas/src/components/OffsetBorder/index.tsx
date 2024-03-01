import { View } from "react-native";
import React from "react";

import { TAILWIND_THEME } from "@/utils/index";

const OffsetBorder = ({
  children,
  leftOffset = 10,
  bottomOffset = 10,
  borderRadius = 32,
  color_primary = TAILWIND_THEME.colors.light_blue,
  color_secondary = TAILWIND_THEME.colors.blue,
}) => {
  return (
    <View className="relative">
      {children}
      <View
        style={{
          left: -leftOffset,
          right: leftOffset,
          bottom: -bottomOffset,
          top: bottomOffset,
          borderRadius: borderRadius,
          position: "absolute",
          borderWidth: 2,
          zIndex: -1,
          borderColor: color_secondary,
          backgroundColor: color_primary,
        }}
      />
    </View>
  );
};

export default OffsetBorder;
