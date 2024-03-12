import { View } from "react-native";
import React from "react";

import { TAILWIND_THEME } from "@/utils/index";

const OffsetProfile = ({
    children,
    leftOffset = 10,
    bottomOffset = 10,
    borderRadius = 32,
    color_primary = TAILWIND_THEME.colors.light_purple,
    color_secondary = TAILWIND_THEME.colors.purple,
  }) => {
    return (
      <View className="relative flex">
        <View
          style={{
            left: -leftOffset,
            right: leftOffset,
            bottom: -bottomOffset,
            top: bottomOffset,
            borderRadius: borderRadius,
            position: "absolute",
            borderWidth: 2,
            borderColor: color_secondary,
            backgroundColor: color_primary,
          }}
        />
        {children}
      </View>
    );
  };
  
  export default OffsetProfile;
  