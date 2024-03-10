import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Block from "@/components/Block";
import Girl2 from "@/components/svgs/profile/girl2";

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
                    '1': { activityName: "soccer", profileImage: "girl2", profileName: "Maria" },
                    '12': { activityName: "rope_jumping", profileImage: "girl2", profileName: "Leticia" },
                },
            },
            {
                name: "Maio",
                dates: {
                    '1': { activityName: "soccer", profileImage: "girl2", profileName: "Maria" },
                    '12': { activityName: "rope_jumping", profileImage: "girl2", profileName: "Leticia" },
                },
            },
            {
                name: "Junho",
                dates: {
                    '1': { activityName: "soccer", profileImage: "girl2", profileName: "Maria" },
                    '12': { activityName: "chess", profileImage: "girl2", profileName: "Leticia" },
                },
            },
        ];

        setMonths(mockData);
    }, []);
    return (
        <ScrollView>
            <View className=" w-4/5 lg:w-2/4 self-center h-[170vh] justify-start items-center ">
                {months.map((month, index) => (
                    <View key={index} className="items-center my-4 ">
                        <Text>{month.name}</Text>
                        {Object.entries(month.dates).map(([day, activity]: [string, { activityName: string, profileImage: string, profileName: string }], i) => (
                            <View key={i} className="flex-row space-x-3">
                                <Block activityName={activity.activityName} heigh={146} width={163}>
                                    <Text>OI</Text>
                                </Block>
                                <Block activityName={activity.activityName} heigh={146} width={194}>
                                    <Text>OI</Text>
                                </Block>
                            </View>
                        ))}
                    </View>
                ))}
                <View>
                    <Block activityName="soccer" heigh={67} width={63} leftOffset={0} borderRadius={20}></Block>
                </View>
            </View>

        </ScrollView>
    )
}