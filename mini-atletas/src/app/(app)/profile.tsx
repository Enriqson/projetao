import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import SetaDireita from "@/components/svgs/profile/setadireita";
import GrupoFutebol from "@/components/svgs/profile/gruposfutebol";
import GrupoPique from "@/components/svgs/profile/grupopiqueesconde";
import Trophy from "@/components/svgs/misc/Trophy";
import { Link } from "expo-router";
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder/index";
import Trofeu from "@/components/svgs/profile/Trofeu";
import Avatar from "@zamplyy/react-native-nice-avatar";
import ActivityBlock from "@/components/ActivityBlock";
import Esporte from "@/components/svgs/profile/Esporte";
import Lt from "@/components/svgs/profile/Lt";
import Gt from "@/components/svgs/profile/Gt";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/config/supabase";
import { Image } from "react-native";

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
            <Image
              resizeMode="stretch"
              style={{ width: "100%", height: "100%" }}
              source={require("../../../assets/qr-parent.png")}
            />
          </View>
        </View>
      </View>
    </OffsetBorder>
  );
}

function MyDates({ userName, dia, avatarConfig }) {
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
            <View className="mt-2">
              <Lt></Lt>
            </View>
            <Text className="text-2xl font-bold opacity-60">Março</Text>
            <View className="mt-2 ml-2">
              <Gt></Gt>
            </View>
          </View>

          <View className="flex-row mb-3">
            <View className="bg bg-white h-[100px] rounded-[10px] border-black border-[2px] lg:w-[30vw] w-[100px] justify-around items-center px-4 py-2 flex-col mr-1">
              <View>
                <Esporte></Esporte>
              </View>
              <Text className="text-xl font-bold opacity-60">Futebol</Text>
            </View>
            <View className="bg bg-white h-[100px] rounded-[10px] border-black border-[2px] lg:w-[30vw] w-[250px] justify-around items-center px-4 py-2 flex-row ml-2">
              <View style={{ borderColor: TAILWIND_THEME.colors["purple"] }} className="border-[3px] rounded-[42px] bg-white">
                <Avatar size={75} {...{ ...avatarConfig, shape: "circle" }}></Avatar>
              </View>
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

function ProfileChild({ userName, avatarConfig }) {
  return (
    <OffsetBorder
      color_primary={TAILWIND_THEME.colors.light_purple}
      color_secondary={TAILWIND_THEME.colors.purple}
    >
      <View className="bg bg-white h-[160px] rounded-[25px] border-black border-[2px] lg:w-[30vw] w-[90vw] justify-around items-center px-4 py-2 flex-row">
        <View className="-mr-8 border-purple rounded-[80px] border-[6px] p-[1px]">
          <Avatar
            size={125}
            style={{ backgroundColor: "transparent" }}
            {...{...avatarConfig, shape: "circle"}}
          ></Avatar>
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
    </OffsetBorder>
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
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_blue}
                color_secondary={TAILWIND_THEME.colors.blue}
                width={41}
                height={41}
              ></Trophy>
          </Link>

          <Link href={{ pathname: "/achievements", params: { tab: 1 } }}>
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_yellow}
                color_secondary={TAILWIND_THEME.colors.yellow}
                width={41}
                height={41}
              ></Trophy>
          </Link>

          <Link href={{ pathname: "/achievements", params: { tab: 2 } }}>
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_pink}
                color_secondary={TAILWIND_THEME.colors.pink}
                width={41}
                height={41}
              ></Trophy>
          </Link>

          <Link href={{ pathname: "/achievements", params: { tab: 3 } }}>
              <Trophy
                color_primary={TAILWIND_THEME.colors.light_green}
                color_secondary={TAILWIND_THEME.colors.green}
                width={41}
                height={41}
              ></Trophy>
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
              <SetaDireita></SetaDireita>
          </View>
        </View>
      </View>

      <View className="mb-[10px]">
        <View className="flex-row left-2 items-start">
          <View>
            <GrupoFutebol />
          </View>
          <View>
            <GrupoPique />
          </View>
        </View>
      </View>
    </>
  );
}

function ActivitySection({ isParent }) {
  return (
    <>
      <View className="my-[10px]">
        <View className="flex-row ml-[25px]">
          <Text className="text-xl text-gray-600 font-semibold flex items-center">
            Minhas atividades
          </Text>
          <View className="ml-auto mr-6">
            <Link href="/activities">
                <SetaDireita></SetaDireita>
            </Link>
          </View>
        </View>
        <View className="justify-center items-center ">
          {isParent ? (
            <View className="justify-center items-center ">
              <ActivityBlock activityName="soccer" varWidth = "w-[90vw]" />
            </View>
          ) : (
            <>
              <ActivityBlock activityName="soccer"/>
              <ActivityBlock activityName="rope_jumping" />
              <ActivityBlock activityName="cycling" />
              <ActivityBlock activityName="chess" />
              <ActivityBlock activityName="hide_and_seek" />
            </>
          )}
        </View>
      </View>
    </>
  );
}

const ProfileContent = ({ userName, isParent, avatarConfig }) => {
  return (
    <ScrollView>
      <View className="flex flex-col justify-start items-center h-[200vh]">
        <View>
          <View className="mb-3">
            {isParent ? (
              <>
                <ProfileParent />
                <MyDates
                  userName={userName}
                  avatarConfig={avatarConfig}
                  dia={27}
                />
              </>
            ) : (
              <>
                <ProfileChild userName={userName} avatarConfig={avatarConfig} />
                <AchievementSection></AchievementSection>
                <GroupSection></GroupSection>
              </>
            )}
          </View>
          <ActivitySection isParent={isParent} />
          {isParent ? (
            <>
              <View className="my-[10px]">
                <View className="flex-row ml-[25px]">
                  <Text className="text-xl text-gray-600 font-semibold flex items-center">
                    Perfil pareado
                  </Text>
                  <View className="ml-auto mr-6">
                    <Link href="/pairedProfile">
                        <SetaDireita></SetaDireita>
                    </Link>
                  </View>
                </View>
              </View>
              <ProfileChild userName={userName} avatarConfig={avatarConfig} />
          </>
          ) : (
              undefined
          )}

        </View>
      </View>
    </ScrollView>
  );
};

export default function Page() {
  const { user } = useAuth();
  const [isParent, setIsParent] = useState(null);
  const [avatarConfig, setAvatarConfig] = useState(null);
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  useEffect(() => {
    async function fetchAvatar(avatarUserId) {
      let { data, error } = await supabase
        .from("avatar_config")
        .select("avatar_config")
        .eq("user_id", avatarUserId)
        .single();

      if (error) {
        console.error("Error fetching avatar:", error.message);
        return;
      }

      if (data) {
        const avatarConfig = JSON.parse(data.avatar_config);
        setAvatarConfig(avatarConfig);
        setIsAvatarLoaded(true);
      }
    }
    async function fetchIsParent() {
      let { data, error } = await supabase
        .from("parent_child")
        .select("child_id")
        .eq("parent_id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching Child:", error.message);
        return;
      }

      if (data?.child_id) {
        setIsParent(true);
        fetchAvatar(data.child_id);
      } else {
        fetchAvatar(user.id);
      }
    }

    fetchIsParent();
  }, [user]);

  if(!isAvatarLoaded)
    return "";

  return (
    <View className="flex flex-1 mt-8">
      <ProfileContent
        userName="Leticia"
        isParent={isParent}
        avatarConfig={avatarConfig}
      ></ProfileContent>
    </View>
  );
}
