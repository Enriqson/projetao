"use client";
import React, { useEffect, useState } from "react";
import Atividades from "../components/adventures/modal-atividades-diarias"
import { DiaryActivies } from "@/components/adventures/diaryActivities";
import BackGround from '../components/adventures/ui/background'
import { View, Text, Pressable ,TouchableOpacity  } from 'react-native';

function Page() {
  return (
    <View className="flex flex-col  items-center bg h-full w-full ">
      <View className="w-full justify-center text-center mt-4">
        <h1 className="text-blue-600 ">Minhas aventuras</h1>
      </View>
      <DiaryActivies />
    </View>
  );
}

export default Page;