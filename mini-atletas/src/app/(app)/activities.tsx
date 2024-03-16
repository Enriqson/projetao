import React from "react";
import { View, ScrollView } from "react-native";
import ActivityBlock from "@/components/ActivityBlock";

export default function Page() {
  return (
    <ScrollView className="flex flex-1">
      <Content />
    </ScrollView>
  );
}


function Content() {
  return (
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
  );
}
