import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Block from "@/components/Block";
import Girl from "@/components/svgs/dates/girl";
import Trophy from "@/components/svgs/misc/Trophy";
import PlusIcon from "@/components/svgs/dates/plusIcon";
import ACTIVITY_METADATA from "@/utils/activityMetadata";
import { TAILWIND_THEME } from "@/utils";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/config/supabase";
import ReactNiceAvatar from "@zamplyy/react-native-nice-avatar";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Content />
    </View>
  );
}

function Content() {
  const [months, setMonths] = useState([]);
  const { user } = useAuth();
  const [isParent, setIsParent] = useState(null);
  const [avatarConfig, setAvatarConfig] = useState(null);
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  
  
  // whenever the count of achievements per
  // user is implemented on back-end
  let totalAchievements = 7;

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
        let avatarConfig = JSON.parse(data.avatar_config);
        avatarConfig.shape = "rounded";
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


  useEffect(() => {
    const mockData = [
      {
        name: "Janeiro",
        dates: {
          "1": {
            activityName: "soccer",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor: "purple",
            time: "30 minutos",
          },
          "12": {
            activityName: "rope_jumping",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor: "purple",
            time: "10 minutos",
          },
        },
      },
      {
        name: "Fevereiro",
        dates: {
          "10": {
            activityName: "soccer",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor: "purple",
            time: "30 minutos",
          },
          "19": {
            activityName: "hide_and_seek",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor: "purple",
            time: "3 partidas",
          },
        },
      },
      {
        name: "Março",
        dates: {
          "7": {
            activityName: "chess",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor: "purple",
            time: "5 partidas",
          },
          "22": {
            activityName: "cycling",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor: "purple",
            time: "30 minutos",
          },
        },
      },
    ];

    setMonths(mockData);
  }, []);

  const activityTranslations = {
    soccer: "Futebol",
    rope_jumping: "Pular corda",
    chess: "Xadrez",
    cycling: "Andar de Bicicleta",
    hide_and_seek: "Pique esconde",
  };

  if(!isAvatarLoaded)
    return "";

  return (
    <ScrollView>
      <View className="w-4/5 lg:w-2/4 self-center h-[190vh] justify-start items-center pointer-events-none">
        {months.map((month, index) => (
          <Month avatarConfig={avatarConfig} key={index} month={month} activityTranslations={activityTranslations} />
        ))}
        <View>
          {/* <Block
            activityName="soccer"
            heigh={67}
            width={63}
            leftOffset={0}
            borderRadius={20}
          >
            <PlusIcon />
          </Block> */}
        </View>
      </View>
    </ScrollView>
  );
}

function Month({ month, activityTranslations, avatarConfig }) {
  return (
    <View className="items-center my-4">
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          color: "#545F71",
        }}
      >
        {month.name}
      </Text>
      {Object.entries(month.dates).map(([day, activity], i) => (
        <Day avatarConfig={avatarConfig} key={i} day={day} activity={activity} activityTranslations={activityTranslations} />
      ))}
    </View>
  );
}

function Day({ day, activity, activityTranslations, avatarConfig }) {
  const activityMetadata = ACTIVITY_METADATA[activity.activityName];
  const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]];
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]];

  const ActivitySVG = activityMetadata["image"];
  const profile_color_primary = TAILWIND_THEME.colors["light_" + activity.profileColor];
  const profile_color_secondary = TAILWIND_THEME.colors[activity.profileColor];

  return (
    <View className="flex-row space-x-3">
      <View className="mr-[11px]">
        <Block activityName={activity.activityName} heigh={158} width={163}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                color: "#545F71",
                marginLeft: 10,
              }}
            >
              Dia {day}
            </Text>
            <View className="flex-row items-end">
              <View style={{ borderColor: TAILWIND_THEME.colors["purple"] }} className="border-[3px] rounded-[42px] bg-white">
                <ReactNiceAvatar size={75} style={{ backgroundColor: "transparent" }} {...{...avatarConfig, shape: "circle"}} />
              </View>
              <Trophy color_primary={profile_color_primary} color_secondary={profile_color_secondary} width={31} height={31} />
            </View>
          </View>
        </Block>
      </View>
      <View>
        <Block activityName={activity.activityName} heigh={158} width={194}>
          <View className="flex-row w-[170px] justify-around">
            <View className="mt-[15px] mr-[20px] ml-[10px]">
              {ActivitySVG && <ActivitySVG width={60} height={60} />}
            </View>
            <View className="w-3/5">
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#545F71",
                }}
              >
                {activityTranslations[activity.activityName]}
                {"\n"}com
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  color: profile_color_secondary,
                }}
              >
                {activity.profileName}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#545F71",
                }}
              >
                {activity.time}
              </Text>
              <View className="flex-row items-end">
                <Trophy color_primary={color_primary} color_secondary={color_secondary} width={31} height={31} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#545F71",
                  }}
                >
                  0
                </Text>
              </View>
            </View>
          </View>
        </Block>
      </View>
    </View>
  );
}