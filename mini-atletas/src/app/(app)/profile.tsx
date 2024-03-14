import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import  ProfileContent  from '@/components/profile/ProfileContent'
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
import OffsetProfile from "@/components/OffsetBorder/OffsetProfile";
import Trofeu from "@/components/svgs/profile/Trofeu"
import Avatar, {
  AvatarFullConfig,
  HairStyleType,
  genConfig,
} from "@zamplyy/react-native-nice-avatar";
import ActivityBlock from "@/components/ActivityBlock";
import Ball from "@/components/svgs/activities/Ball";
import Rope from "@/components/svgs/activities/Rope";
import Bike from "@/components/svgs/activities/Bike";
import Chess from "@/components/svgs/activities/Chess";
import Hide from "@/components/svgs/activities/Hide";
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
          <Text className="text-2xl font-bold opacity-65 mb-4">Parear Perfil</Text>
          <View className="bg bg-white h-[40px] rounded-[10px] border-black border-[2px] mb-4">
            <Text className="flex justify-center items-center h-screen">enviar sms</Text>
          </View>

          <View className="bg bg-white h-[40px] rounded-[10px] border-black border-[2px] ">
            <Text className="flex justify-center items-center h-screen">enviar por Email</Text>
          </View>
      </View>

      <View>
          <View className="bg bg-white h-[130px] w-[140px] rounded-[10px] border-black border-[2px] mt-3 ml-5">
            <Text className="flex justify-center items-center h-screen text-xs">QR Code</Text>
          </View>
      </View>

    </View>
  </OffsetBorder>
  );
}

function MyDates ({ userName, dia }) {
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
      <Text className="text-xl text-gray-600 font-semibold">Minhas Datas</Text>
    </View>
    <OffsetBorder>
    <View className="bg bg-white h-[200px] rounded-[25px] border-black border-[2px] lg:w-[30vw] w-[90vw] justify-around items-center px-4 py-2"> 
      <View className="flex-row">
      <Text className="mt-2"><Lt></Lt></Text>
      <Text className="text-2xl font-bold opacity-60">Março</Text>
      <Text className="mt-2 ml-2"><Gt></Gt></Text>
      
      </View>

      <View className="flex-row mb-3">
        <View className="bg bg-white h-[100px] rounded-[10px] border-black border-[2px] lg:w-[30vw] w-[100px] justify-around items-center px-4 py-2 flex-col mr-1">
          <View><Esporte></Esporte></View>
          <View className="text-xl font-bold opacity-60">Futebol</View>
        </View>
        <View className="bg bg-white h-[100px] rounded-[10px] border-black border-[2px] lg:w-[30vw] w-[250px] justify-around items-center px-4 py-2 flex-row ml-2">
        <Avatar size={75} {...avatarConfig}></Avatar>
        <View className="flew-col">
          <Text className="font-bold text-xl color-purple">{userName}</Text>
          <Text className="text-sm font-semibold opacity-60">Dia {dia}</Text>
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
  return(
    
    <OffsetProfile>
    <View className="bg bg-white h-[160px] rounded-[25px] border-black border-[2px] lg:w-[30vw] w-[90vw] justify-around items-center px-4 py-2 flex-row"> 
      
      <View className="-mr-8">
          <Avatar size={125} {...avatarConfig} ></Avatar>
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
  )
}

function AchievementSection() {
  return (
    <View className="mb-[10px]">
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-600 font-semibold">Minhas conquistas</Text>
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
        <Text className="text-xl text-gray-600 font-semibold flex items-center">
        
          Meus grupos
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

function ActivitySectionChild() {
  return (
    <>
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-600 font-semibold flex items-center">
          Minhas atividades
          <View className="ml-auto">
            <Link href="/activities">
              <TouchableOpacity>
                <SetaDireita></SetaDireita>
              </TouchableOpacity>
            </Link>
          </View>
        </Text>
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
                ActivitySvg={Ball}
              />
              <ActivityBlock
                activityName="rope_jumping"
                ActivitySvg={Rope}
              />
              <ActivityBlock
                activityName="cycling"
                ActivitySvg={Bike}
              />
              <ActivityBlock
                activityName="chess"
                ActivitySvg={Chess}
              />
              <ActivityBlock
                activityName="hide_and_seek"
                ActivitySvg={Hide}
              />
            </View>
          </View>
      </View>
    </>
  );
}

function ActivitySectionParent() {
  return (
    <>
      <View className="my-[10px] ml-[25px]">
        <Text className="text-xl text-gray-600 font-semibold flex items-center">
          Minhas atividades
          <View className="ml-auto">
            <Link href="/activities">
              <TouchableOpacity>
                <SetaDireita></SetaDireita>
              </TouchableOpacity>
            </Link>
          </View>
        </Text>
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
                ActivitySvg={Ball}
              />
            </View>
          </View>
      </View>
    </>
  );
}

function ParedProfile(){
  return(
    <View></View>
  )
}


const ProfileContent = ({ userName, isParent  }) => {

  return (
    <ScrollView className="">
      <View className="flex flex-col justify-start items-center h-[120vh]">
        <View>
          <View className="mb-3">
            {isParent ? (
                <ProfileParent/>
              ) : (
                <ProfileChield userName={userName} />
              )}
          </View>

          {isParent ? (
                <MyDates userName={userName} dia={27}/>
              ) : (
                <AchievementSection></AchievementSection>
              )}

          
          
                
          <View className="my-[5px] flex justify-between">
            {isParent ? (
                <Text></Text>
              ) : (
                <GroupSection></GroupSection>
              )}
          </View>
          
          {isParent ? (
                <ActivitySectionParent></ActivitySectionParent>
              ) : (
                <ActivitySectionChild></ActivitySectionChild>
              )}

        </View>
      </View>
    </ScrollView>
  );
};


export default function Page() {
  return (
    <View className="flex flex-1">  
      <View className="mt-8">
        <ProfileContent userName="Leticia" isParent={true}></ProfileContent>
      </View>
    </View>
    
  );
}