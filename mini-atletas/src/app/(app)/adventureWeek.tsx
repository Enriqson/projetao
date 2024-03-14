"use client";
import React, { useEffect, useState } from "react";
import Atividades from "../components/adventures/modal-atividades-diarias"
import { DiaryActivies } from "@/components/adventures/diaryActivities";
import { View, Text, Pressable ,TouchableOpacity  } from 'react-native';

function Page() {
  return (
    <View className="flex flex-col  items-center bg h-full w-full ">
      <DiaryActivies />
    </View>
  );
}

export default Page;