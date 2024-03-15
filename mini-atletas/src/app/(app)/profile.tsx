import React from "react";
import Girl2 from "@/components/svgs/profile/girl2";
import { Text, View, ScrollView } from "react-native";
import SetaDireita from "@/components/svgs/profile/setadireita";
import { TouchableOpacity } from "react-native";
import GrupoFutebol from "@/components/svgs/profile/gruposfutebol";
import GrupoPique from "@/components/svgs/profile/grupopiqueesconde";
import Trophy from "@/components/svgs/misc/Trophy";
import { Link } from "expo-router";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder";

function AchievementSection() {
  return (
    <View className="mb-[10px]">
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-400 ">Minhas conquistas</Text>
      </View>

      <OffsetBorder>
        <View className="bg-white rounded-[32px] border-black border-[2px] flex-row lg:w-[30vw] h-[81px] w-[90vw] justify-around items-center px-4 py-2">
          <Link href={{ pathname: "/achievements", params: { tab: 0 } }}>
            <TouchableOpacity>
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_blue}
                color_secondary={TAILWIND_THEME.colors.blue}
                width={41}
                height={41}
              ></Trophy>
            </TouchableOpacity>
          </Link>

          <Link href={{ pathname: "/achievements", params: { tab: 1 } }}>
            <TouchableOpacity>
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_yellow}
                color_secondary={TAILWIND_THEME.colors.yellow}
                width={41}
                height={41}
              ></Trophy>
            </TouchableOpacity>
          </Link>

          <Link href={{ pathname: "/achievements", params: { tab: 2 } }}>
            <TouchableOpacity>
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_pink}
                color_secondary={TAILWIND_THEME.colors.pink}
                width={41}
                height={41}
              ></Trophy>
            </TouchableOpacity>
          </Link>

          <Link href={{ pathname: "/achievements", params: { tab: 3 } }}>
            <TouchableOpacity>
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_green}
                color_secondary={TAILWIND_THEME.colors.green}
                width={41}
                height={41}
              ></Trophy>
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
          <View>
            <Girl2></Girl2>
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
