import React from "react";
import { View } from "react-native";
import ACTIVITY_METADATA from "@/utils/activityMetadata";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "./OffsetBorder";
import { Link } from "expo-router";

interface BlockProps {
    activityName?: string;
    children?: React.ReactNode;
    heigh?: number;
    width?: number;
    leftOffset?: number;
    borderRadius?: number;
}


function Block({ activityName, heigh, width, children, leftOffset = 10 , borderRadius = 32 }: BlockProps) {
    const activityMetadata = ACTIVITY_METADATA[activityName]
    const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]]
    const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]]


    return (
        <Link href={`/`} className="my-5">
            <OffsetBorder
                color_primary={color_primary}
                color_secondary={color_secondary}
                height={heigh} // Convert height to string
                width={width}
                leftOffset={leftOffset}       
                borderRadius={borderRadius}                        
            >
               <View className="bg-white border-black border-[2px] flex-row  justify-around px-4 py-2" style={{
                    height: heigh,
                    width: width,
                    borderRadius: borderRadius,
               }}>
                {children} 
                 
                </View> 
            </OffsetBorder>
        </Link>
    )
}
export default Block;