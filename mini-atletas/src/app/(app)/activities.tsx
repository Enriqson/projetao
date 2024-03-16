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
      <View className=" w-4/5 lg:w-2/4 self-center h-[120vh] justify-start">
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
          />
          <ActivityBlock
            activityName="rope_jumping"
          />
          <ActivityBlock
            activityName="cycling"
          />
          <ActivityBlock
            activityName="chess"
          />
          <ActivityBlock
            activityName="hide_and_seek"
          />
        </View>
      </View>
    </ScrollView>
  );
}
