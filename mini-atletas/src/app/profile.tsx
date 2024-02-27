import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import  ProfileContent  from '@/components/profile/ProfileContent'
import Seta from '@/components/svgs/profile/seta';
import Settings from '@/components/svgs/profile/settings';

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      <div className="mt-8">
        <ProfileContent userName="Leticia"></ProfileContent>
      </div>


    </View>
    
  );
}


function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="flex items-center" href="/">
          <Seta/>
        </Link>
        <Text className="text-xl font-bold text-blue-500">Meu Perfil</Text>
        <Link
          className="text-md font-medium hover:underline web:underline-offset-4 text-blue-500"
          href="/"
        >
          <Settings></Settings>
        </Link>
      </View>
    </View>
  );
}

