import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import SetaDireita from "@/components/svgs/profile/setadireita";
import { TouchableOpacity } from "react-native";
import GrupoFutebol from "@/components/svgs/profile/gruposfutebol";
import GrupoPique from "@/components/svgs/profile/grupopiqueesconde";
import Trophy from "@/components/svgs/misc/Trophy";
import { Link } from "expo-router";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder/index";
import OffsetProfile from "@/components/OffsetBorder/OffsetProfile";
import Trofeu from "@/components/svgs/profile/Trofeu";
import Avatar from "@zamplyy/react-native-nice-avatar";
import ActivityBlock from "@/components/ActivityBlock";
import Esporte from "@/components/svgs/profile/Esporte";
import Lt from "@/components/svgs/profile/Lt";
import Gt from "@/components/svgs/profile/Gt";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/config/supabase";

function ProfileParent() {
  return (
    <OffsetBorder>
      <View className="bg bg-white h-[200px] rounded-[25px] border-black border-[2px] lg:w-[30vw] w-[90vw] justify-around items-center px-4 py-2 flex-row">
        <View className="-mr-8">
          <Text className="text-2xl font-bold opacity-65 mb-4">
            Parear Perfil
          </Text>
          <View className="bg bg-white h-[40px] rounded-[10px] border-black border-[2px] mb-4">
            <Text className="flex justify-center items-center h-screen">
              enviar sms
            </Text>
          </View>

          <View className="bg bg-white h-[40px] rounded-[10px] border-black border-[2px] ">
            <Text className="flex justify-center items-center h-screen">
              enviar por Email
            </Text>
          </View>
        </View>

        <View>
          <View className="bg bg-white h-[130px] w-[140px] rounded-[10px] border-black border-[2px] mt-3 ml-5">
            <Text className="flex justify-center items-center h-screen text-xs">
              QR Code
            </Text>
          </View>
        </View>
      </View>
    </OffsetBorder>
  );
}

function MyDates({ userName, dia }) {
  const { user } = useAuth();
  const [avatarConfig, setAvatarConfig] = useState(null);

  useEffect(() => {
    async function fetchAvatar() {
      let { data, error } = await supabase
        .from("avatar_config")
        .select("avatar_config")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching avatar:", error.message);
        return;
      }

      if (data) {
        const avatarConfig = JSON.parse(data.avatar_config);
        setAvatarConfig(avatarConfig);
      }
    }

    fetchAvatar();
  }, [user]);
  return (
    <View className="mb-[10px]">
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-600 font-semibold">
          Minhas Datas
        </Text>
      </View>
      <OffsetBorder>
        <View className="bg bg-white h-[200px] rounded-[25px] border-black border-[2px] lg:w-[30vw] w-[90vw] justify-around items-center px-4 py-2">
          <View className="flex-row">
            <Text className="mt-2">
              <Lt></Lt>
            </Text>
            <Text className="text-2xl font-bold opacity-60">Março</Text>
            <Text className="mt-2 ml-2">
              <Gt></Gt>
            </Text>
          </View>

          <View className="flex-row mb-3">
            <View className="bg bg-white h-[100px] rounded-[10px] border-black border-[2px] lg:w-[30vw] w-[100px] justify-around items-center px-4 py-2 flex-col mr-1">
              <View>
                <Esporte></Esporte>
              </View>
              <View className="text-xl font-bold opacity-60">Futebol</View>
            </View>
            <View className="bg bg-white h-[100px] rounded-[10px] border-black border-[2px] lg:w-[30vw] w-[250px] justify-around items-center px-4 py-2 flex-row ml-2">
              <Avatar size={75} {...avatarConfig}></Avatar>
              <View className="flew-col">
                <Text className="font-bold text-xl color-purple">
                  {userName}
                </Text>
                <Text className="text-sm font-semibold opacity-60">
                  Dia {dia}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </OffsetBorder>
    </View>
  );
}

function ProfileChield({ userName }) {
  const { user } = useAuth();
  const [avatarConfig, setAvatarConfig] = useState(null);

  useEffect(() => {
    async function fetchAvatar() {
      let { data, error } = await supabase
        .from("avatar_config")
        .select("avatar_config")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching avatar:", error.message);
        return;
      }

      if (data) {
        const avatarConfig = JSON.parse(data.avatar_config);
        setAvatarConfig(avatarConfig);
      }
    }

    fetchAvatar();
  }, [user]);

  console.log(avatarConfig)
  return (
    <OffsetProfile>
      <View className="bg bg-white h-[160px] rounded-[25px] border-black border-[2px] lg:w-[30vw] w-[90vw] justify-around items-center px-4 py-2 flex-row">
        <View className="-mr-8 border-purple rounded-[50px] border-[6px] p-[1px]">
          <Avatar size={125} style={{backgroundColor:"transparent"}} {...avatarConfig}></Avatar>
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
    </OffsetProfile>
  );
}

function AchievementSection() {
  return (
    <View className="mb-[10px]">
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-600 font-semibold">
          Minhas conquistas
        </Text>
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
        <View className="flex-row items-center">
          <Text className="text-xl text-gray-600 font-semibold">
            Meus grupos
          </Text>
          <View className="ml-auto mr-6">
            <TouchableOpacity>
              <SetaDireita></SetaDireita>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="mb-[10px]">
        <Text className="flex-row left-2 items-start">
          <View>
            <GrupoFutebol />
          </View>
          <View>
            <GrupoPique />
          </View>
        </Text>
      </View>
    </>
  );
}

function ActivitySection() {
  return (
    <>
      <View className="my-[10px]">
        <View className="flex-row ml-[25px]">
          <Text className="text-xl text-gray-600 font-semibold flex items-center">
            Minhas atividades
          </Text>
          <View className="ml-auto mr-6">
            <Link href="/activities">
              <TouchableOpacity>
                <SetaDireita></SetaDireita>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        <View className="justify-center items-center">
          <ActivityBlock activityName="soccer" />
          <ActivityBlock activityName="rope_jumping" />
          <ActivityBlock activityName="cycling" />
          <ActivityBlock activityName="chess" />
          <ActivityBlock activityName="hide_and_seek" />
        </View>
      </View>
    </>
  );
}

const ProfileContent = ({ userName, isParent }) => {
  return (
    <ScrollView>
      <View className="flex flex-col justify-start items-center h-[200vh]">
        <View>
          <View className="mb-3">
            {isParent ? (
              <ProfileParent />
            ) : (
              <ProfileChield userName={userName} />
            )}
          </View>

          {isParent ? (
            <MyDates userName={userName} dia={27} />
          ) : (
            <AchievementSection></AchievementSection>
          )}

          <View className="my-[5px] flex justify-between">
            {isParent ? <Text></Text> : <GroupSection></GroupSection>}
          </View>

          <ActivitySection />
        </View>
      </View>
    </ScrollView>
  );
};

export default function Page() {
  return (
    <View className="flex flex-1 mt-8">
      <ProfileContent userName="Leticia" isParent={false}></ProfileContent>
    </View>
  );
}
