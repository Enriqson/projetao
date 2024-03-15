"use client";
import React from "react";
import { DiaryActivies } from "@/components/adventures/diaryActivities";
import { View, ScrollView, ImageBackground } from "react-native";

function Page() {
  return (
    <ImageBackground
      resizeMode="stretch"
      imageStyle={{ width: "100%", height: "70%", bottom: -5, top: "auto" }}
      source={require("../../../assets/background.png")}
    >
      <ScrollView>
        <View className="flex flex-col  items-center bg h-[110vh] w-full ">
          <DiaryActivies />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Page;
