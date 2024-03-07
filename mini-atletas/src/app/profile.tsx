import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import  ProfileContent  from '@/components/profile/ProfileContent'
import Seta from '@/components/svgs/profile/seta';
import Settings from '@/components/svgs/profile/settings';


import Girl2 from "@/components/svgs/profile/girl2";
import { Text, View, ScrollView } from "react-native";
import SetaDireita from "@/components/svgs/profile/setadireita";
import { TouchableOpacity } from "react-native";
import GrupoFutebol from "@/components/svgs/profile/gruposfutebol";
import GrupoPique from "@/components/svgs/profile/grupopiqueesconde";
import { default as AchievementSvg } from "@/components/svgs/misc/achievement";
import { Link } from "expo-router";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder/index";
import OffsetBorder2 from "@/components/OffsetBorder/bordaperfil";
import Trofeu from "@/components/svgs/profile/trophy"
import Avatar, {
  AvatarFullConfig,
  HairStyleType,
  genConfig,
} from "@zamplyy/react-native-nice-avatar";


function AchievementSection() {
  return (
    <View className="mb-[10px]">
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-400 ">Minhas conquistas</Text>
      </View>

      <OffsetBorder>
        <View className="bg-white rounded-[32px] border-black border-[2px] flex-row lg:w-[30vw] h-[81px] w-[90vw] justify-around items-center px-4 py-2">
          <Link href="/achievements">
            <TouchableOpacity>
              <AchievementSvg
                color_primary={TAILWIND_THEME.colors.light_blue}
                color_secondary={TAILWIND_THEME.colors.blue}
              ></AchievementSvg>
            </TouchableOpacity>
          </Link>

          <Link href="/achievements">
            <TouchableOpacity>
              <AchievementSvg
                color_primary={TAILWIND_THEME.colors.light_yellow}
                color_secondary={TAILWIND_THEME.colors.yellow}
              ></AchievementSvg>
            </TouchableOpacity>
          </Link>

          <Link href="/achievements">
            <TouchableOpacity>
              <AchievementSvg
                color_primary={TAILWIND_THEME.colors.light_pink}
                color_secondary={TAILWIND_THEME.colors.pink}
              ></AchievementSvg>
            </TouchableOpacity>
          </Link>

          <Link href="/achievements">
            <TouchableOpacity>
              <AchievementSvg
                color_primary={TAILWIND_THEME.colors.light_green}
                color_secondary={TAILWIND_THEME.colors.green}
              ></AchievementSvg>
            </TouchableOpacity>
          </Link>
        </View>
      </OffsetBorder>
    </View>
  );
}

function GroupSection() {
  return (
    <>
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-400 flex items-center">
          Meu grupos
          <View className="absolute right-0">
            <TouchableOpacity>
              <SetaDireita></SetaDireita>
            </TouchableOpacity>
          </View>
        </Text>
      </View>

      <View className="mb-[10px]">
        <Text className="flex left-2 items-center">
          <GrupoFutebol></GrupoFutebol>
          <GrupoPique className="absolute left-[175px]"></GrupoPique>
        </Text>
      </View>
    </>
  );
}

function ActivitySection() {
  return (
    <>
      <View className="mb-[10px]">
        <Text className="text-lg text-gray-500 md:text-xl dark:text-gray-400 flex items-center">
          Minhas atividades
          <View className="ml-auto">
            <Link href="/activities">
              <TouchableOpacity>
                <SetaDireita></SetaDireita>
              </TouchableOpacity>
            </Link>
          </View>
        </Text>
      </View>
    </>
  );
}

const ProfileContent = ({ userName }) => {
  return (
    <ScrollView className="">
      <View className="flex flex-col justify-start items-center h-[120vh]">
        <View>
          <View className="mb-3">
            <OffsetBorder2>
            <View className="bg bg-white h-[160px] rounded-[25px] border-black border-[2px] lg:w-[30vw] w-[90vw] justify-around items-center px-4 py-2 flex-row"> 
              
              <View className="-mr-8">
                  <Avatar size={125}></Avatar>
              </View>

              <View>
                  <Text className="font-bold text-xl color-purple">{userName}</Text>
                  <Text className="text-sm color-purple">Futebol</Text>
                  <View className="flex flex-row items-end">
                   <Trofeu></Trofeu>
                   <Text className="text-sm color-purple">5x</Text>
                  </View>
                  <Text className="text-sm color-purple">Corredora</Text>
              </View>

            </View>
          </OffsetBorder2>
          </View>

          <AchievementSection></AchievementSection>

          <View className="my-[5px] flex justify-between">
            <GroupSection></GroupSection>
            <ActivitySection></ActivitySection>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default function Page() {
  return (
    <View className="flex flex-1">  
      <View className="mt-8">
        <ProfileContent userName="Leticia"></ProfileContent>
      </View>
    </View>
    
  );
}

