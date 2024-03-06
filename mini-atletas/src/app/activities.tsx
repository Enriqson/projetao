import React from "react";
import { View, ScrollView } from "react-native";
import Rope from "@/components/svgs/activities/Rope";
import Ball from "@/components/svgs/activities/Ball";
import Bike from "@/components/svgs/activities/Bike";
import Chess from "@/components/svgs/activities/Chess";
import Hide from "@/components/svgs/activities/Hide";
import ActivityBlock from "@/components/ActivityBlock";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Content />
    </View>
  );
}


function Content() {
  return (
    <ScrollView>
      <View className=" w-4/5 lg:w-2/4 self-center">
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            flexDirection: "column",
            flexShrink: 1,
          }}
        >
          <ActivityBlock
            activityName="soccer"
            ActivitySvg={Ball}
          />
          <ActivityBlock
            activityName="rope_jumping"
            ActivitySvg={Rope}
          />
          <ActivityBlock
            activityName="cycling"
            ActivitySvg={Bike}
          />
          <ActivityBlock
            activityName="chess"
            ActivitySvg={Chess}
          />
          <ActivityBlock
            activityName="hide_and_seek"
            ActivitySvg={Hide}
          />
        </View>
      </View>
    </ScrollView>
  );
}
