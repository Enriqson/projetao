import React from "react";
import { View, ScrollView } from "react-native";
import Block from "@/components/Block";

export default function Page() {
    return (
        <View className="flex flex-1">
            <Content />
        </View>
    );
}



function Content() {
    return (
        <ScrollView>
            <View className=" w-4/5 lg:w-2/4 self-center h-[120vh] justify-start">
                <Block activityName="soccer" heigh={"146px"} width={"163px"} /> 
            </View>
        </ScrollView>
    )
}