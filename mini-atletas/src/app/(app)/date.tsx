import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Block from "@/components/Block";
import Girl from "@/components/svgs/dates/girl";
import Trophy from "@/components/svgs/misc/Trophy";
import PlusIcon from "@/components/svgs/dates/plusIcon";
import ACTIVITY_METADATA from "@/utils/activityMetadata";
import { TAILWIND_THEME } from "@/utils";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Content />
    </View>
  );
}

function Content() {
  const [months, setMonths] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        name: "Abril",
        dates: {
          "1": {
            activityName: "soccer",
            profileImage: "girl",
            profileName: "Maria",
            profileColor:"green",
            time: "30 minutos",
          },
          "12": {
            activityName: "rope_jumping",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor:"purple",
            time: "10 minutos",
          },
        },
      },
      {
        name: "Maio",
        dates: {
          "1": {
            activityName: "soccer",
            profileImage: "girl",
            profileName: "Maria",
            profileColor:"green",
            time: "30 minutos",
          },
          "12": {
            activityName: "hide_and_seek",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor:"purple",
            time: "3 partidas",
          },
        },
      },
      {
        name: "Junho",
        dates: {
          "1": {
            activityName: "chess",
            profileImage: "girl",
            profileName: "Maria",
            profileColor:"green",
            time: "5 partidas",
          },
          "12": {
            activityName: "cycling",
            profileImage: "girl",
            profileName: "Leticia",
            profileColor:"purple",
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

  return (
    <ScrollView>
      <View className="w-4/5 lg:w-2/4 self-center h-[190vh] justify-start items-center">
        {months.map((month, index) => (
          <Month key={index} month={month} activityTranslations={activityTranslations} />
        ))}
        <View>
          <Block
            activityName="soccer"
            heigh={67}
            width={63}
            leftOffset={0}
            borderRadius={20}
          >
            <PlusIcon />
          </Block>
        </View>
      </View>
    </ScrollView>
  );
}

function Month({ month, activityTranslations }) {
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
        <Day key={i} day={day} activity={activity} activityTranslations={activityTranslations} />
      ))}
    </View>
  );
}

function Day({ day, activity, activityTranslations }) {
  const activityMetadata = ACTIVITY_METADATA[activity.activityName];
  const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]];
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]];

  const ActivitySVG= activityMetadata["image"];
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
              <Girl colorSecondary={profile_color_secondary} />
              <Trophy color_primary={profile_color_primary} color_secondary={profile_color_secondary} width={31} height={31}/>
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