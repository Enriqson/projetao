import React from "react";
import { View, ScrollView, Text } from "react-native";
import ACTIVITY_METADATA from "@/utils/activityMetadata";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "./OffsetBorder";
import { Link } from "expo-router";
function Block({ activityName, heigh, width }) {
    const activityMetadata = ACTIVITY_METADATA[activityName]
    const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]]
    const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]]


    return (
        <Link href={`/`} className="my-5">
            <OffsetBorder
                color_primary={color_primary}
                color_secondary={color_secondary}
                height={heigh}
                width={width}                              
            >
               <View className="bg-white rounded-[32px] border-black border-[2px] flex-row  justify-around px-4 py-2" style={{
                    height: heigh,
                    width: width,
               }}></View> 

            </OffsetBorder>
        </Link>
    )
}
export default Block;