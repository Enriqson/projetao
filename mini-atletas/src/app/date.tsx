import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Block from "@/components/Block";
import Girl from "@/components/svgs/dates/girl";
import Trophy from "@/components/svgs/dates/trophy";
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
            time: "30 minutos",
            color: "blue",
          },
          "12": {
            activityName: "rope_jumping",
            profileImage: "girl",
            profileName: "Leticia",
            time: "10 minutos",
            color: "pink",
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
            time: "30 minutos",
            color: "blue",
          },
          "12": {
            activityName: "rope_jumping",
            profileImage: "girl",
            profileName: "Leticia",
            time: "10 minutos",
            color: "pink",
          },
        },
      },
      {
        name: "Junho",
        dates: {
          "1": {
            activityName: "soccer",
            profileImage: "girl",
            profileName: "Maria",
            time: "30 minutos",
            color: "blue",
          },
          "12": {
            activityName: "chess",
            profileImage: "girl",
            profileName: "Leticia",
            time: "5 partidas",
            color: "green",
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
    // Adicionar outras atividades
  };

  return (
    <ScrollView>
      <View className="w-4/5 lg:w-2/4 self-center h-[180vh] justify-start items-center">
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
  return (
    <View className="flex-row space-x-3">
      <View className="mr-[11px]">
        <Block activityName={activity.activityName} heigh={146} width={163}>
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
              <Girl colorSecondary={color_secondary} />
              <Trophy colorPrimary={color_primary} colorSecondary={color_secondary} />
            </View>
          </View>
        </Block>
      </View>
      <View>
        <Block activityName={activity.activityName} heigh={146} width={194}>
          <View className="flex-row ">
            <View></View>
            <View>
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
                  color: color_secondary,
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
              <Trophy colorPrimary={color_primary} colorSecondary={color_secondary} />
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