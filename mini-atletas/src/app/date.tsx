import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Block from "@/components/Block";
import Girl from "@/components/svgs/dates/girl";
import Trophy from "@/components/svgs/dates/trophy";
import PlusIcon from "@/components/svgs/dates/plusIcon";

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
    // fetch('http://localhost:3000/months')
    //     .then(response => response.json())
    //     .then(data => setMonths(data));
    const mockData = [
      {
        name: "Abril",
        dates: {
          "1": {
            activityName: "soccer",
            profileImage: "girl2",
            profileName: "Maria",
            time: "30 minutos",
            activitySvg: "Ball",
          },
          "12": {
            activityName: "rope_jumping",
            profileImage: "girl2",
            profileName: "Leticia",
            time: "10 minutos",
          },
        },
      },
      {
        name: "Maio",
        dates: {
          "1": {
            activityName: "soccer",
            profileImage: "girl2",
            profileName: "Maria",
            time: "30 minutos",
          },
          "12": {
            activityName: "rope_jumping",
            profileImage: "girl2",
            profileName: "Leticia",
            time: "10 minutos",
          },
        },
      },
      {
        name: "Junho",
        dates: {
          "1": {
            activityName: "soccer",
            profileImage: "girl2",
            profileName: "Maria",
            time: "30 minutos",
          },
          "12": {
            activityName: "chess",
            profileImage: "girl2",
            profileName: "Leticia",
            time: "5 partidas",
          },
        },
      },
    ];

    setMonths(mockData);
  }, []);
  return (
    <ScrollView>
      <View className=" w-4/5 lg:w-2/4 self-center h-[175vh] justify-start items-center ">
        {months.map((month, index) => (
          <View key={index} className="items-center my-4 ">
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                fontFamily: "Kanit",
                color: "#545F71",
              }}
            >
              {month.name}
            </Text>
            {Object.entries(month.dates).map(
              (
                [day, activity]: [
                  string,
                  {
                    activityName: string;
                    profileImage: string;
                    profileName: string;
                    time: number;
                    activitySvg: string;
                  }
                ],
                i
              ) => (
                <View key={i} className="flex-row space-x-3">
                  <View className="mr-[2px]" style={{ zIndex: 2 }}>
                    <Block
                      activityName={activity.activityName}
                      heigh={146}
                      width={163}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: "500",
                            fontFamily: "Kanit",
                            color: "#545F71",
                            marginLeft: 10,
                          }}
                        >
                          Dia {day}
                        </Text>
                        <View className="flex-row items-end">
                          <Girl />
                          <Trophy />
                        </View>
                      </View>
                    </Block>
                  </View>
                  <View style={{ zIndex: 1 }}>
                    <Block
                      activityName={activity.activityName}
                      heigh={146}
                      width={194}
                    >
                      <View className="flex-row ">
                        <View></View>
                        <View>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              fontFamily: "Hind",
                              color: "#545F71",
                            }}
                          >
                            {activity.activityName}
                            {"\n"}com
                          </Text>
                          <Text
                            style={{
                              fontSize: 24,
                              fontWeight: "500",
                              fontFamily: "Kanit",
                              color: "#8928C5",
                            }}
                          >
                            {activity.profileName}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "500",
                              fontFamily: "Hind",
                              color: "#545F71",
                            }}
                          >
                            {activity.time}
                          </Text>
                          <View className="flex-row items-end">
                            <Trophy />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "500",
                                fontFamily: "Hind",
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
              )
            )}
          </View>
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
