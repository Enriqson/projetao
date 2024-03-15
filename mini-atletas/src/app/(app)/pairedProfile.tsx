import Block from "@/components/Block";
import Girl from "@/components/svgs/dates/girl";
import React from "react";
import { View, ScrollView, Text } from "react-native";
import WeekPorcent from "@/components/svgs/profile/WeekPorcent";
import Trophy from "@/components/svgs/dates/trophy";
import Clock from "@/components/svgs/profile/Clock";
import Atacker from "@/components/svgs/profile/Atacker";
import Fast from "@/components/svgs/profile/Fast";
import Brilliant from "@/components/svgs/profile/Brilliant";
export default function Page() {
    return (
        <View className="flex flex-1">
            <Content />
        </View>
    );
}


function Content() {

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
            <View className=" w-4/5 lg:w-2/4 self-center h-[120vh] justify-start space-y-5">
                <View style={{
                    flexGrow: 1,
                    alignItems: "center",
                    flexDirection: "column",
                    flexShrink: 1,
                }}>
                    <Girl colorSecondary={"#8928C5"}></Girl>
                    <Text style={{ color: "#8928C5", fontFamily: "Kanit", fontSize: 21, fontWeight: "bold", }}>Leticia</Text>
                    <Block color_secondary="#2859C5" width={280} heigh={250}>
                        <View style={{ flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <WeekPorcent></WeekPorcent>
                            <Text style={{ color: "#2859C5", fontSize: 21, fontWeight: "bold" }}>Praticadas essa Semana</Text>
                        </View>
                    </Block>
                    <Text style={{ fontFamily: "Kanit", fontSize: 21, fontWeight: "bold" }}>Conquistas da Semana</Text>
                    <Block color_primary="#DBBCED" color_secondary="#8928C5" width={331} heigh={157}>
                        <View style={{ flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <Text style={{ color: "#8928C5", fontSize: 21, fontWeight: "bold" }}>Campeã</Text>
                            <Girl colorSecondary={"#8928C5"}></Girl>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: 30, alignItems: "flex-start" }}>
                            <Text style={{ color: "#8928C5", marginBottom: 20 }}>5 Atividades</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Trophy colorSecondary={"#8928C5"} colorPrimary={"#DBBCED"} ></Trophy>
                                <Text style={{ color: "#8928C5", marginTop: 5, marginLeft: 10 }}>17 Troféus</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Clock colorSecondary={"#DBBCED"} colorPrimary={"#8928C5"} ></Clock>
                                <Text style={{ color: "#8928C5", marginLeft: 10 }}>7 Horas</Text>
                            </View>

                        </View>
                    </Block>
                    <View style={{ justifyContent: "space-around", flexDirection: "row", flexWrap: "wrap" }}>
                        <View style={{ margin: 8, width: '30%' }}>
                            <Block color_primary="#FFE5A5" color_secondary="#FFCC4D" width={132} heigh={157}>
                                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                                    <Atacker></Atacker>
                                    <Text style={{ color: "#FFCC4D", fontSize: 18 }}>Atacante</Text>
                                </View>
                            </Block>
                        </View>
                        <View style={{ margin: 8, width: '30%' }}>
                            <Block color_primary="#8FBFFA" color_secondary="#2859C5" width={132} heigh={157}>
                                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                                    <Fast></Fast>
                                    <Text style={{ color: "#2859C5", fontSize: 18 }}>Rápida</Text>
                                </View>
                            </Block>
                        </View>
                        <View style={{ margin: 10, width: '30%' }}>
                            <Block color_primary="#FFE5A5" color_secondary="#FFCC4D" width={132} heigh={157}>
                                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                                    <Brilliant></Brilliant>
                                    <Text style={{ color: "#FFCC4D", fontSize: 18 }}>Brilhante</Text>
                                </View>
                            </Block>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
