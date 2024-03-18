import Block from "@/components/Block";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import WeekPorcent from "@/components/svgs/profile/WeekPorcent";
import Trophy from "@/components/svgs/misc/Trophy";
import Clock from "@/components/svgs/profile/Clock";
import Atacker from "@/components/svgs/profile/Atacker";
import Fast from "@/components/svgs/profile/Fast";
import Brilliant from "@/components/svgs/profile/Brilliant";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/config/supabase";
import ReactNiceAvatar, { genConfig } from "@zamplyy/react-native-nice-avatar";
import { TAILWIND_THEME } from "@/utils";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View className="flex flex-1">
            <Content />
        </View>
    );
}


function Content() {
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
  
    if(!isAvatarLoaded)
        return "";
    
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
            <View className=" w-4/5 lg:w-2/4 self-center h-[120vh] justify-start space-y-5">
                <View style={{
                    flexGrow: 1,
                    alignItems: "center",
                    flexDirection: "column",
                    flexShrink: 1,
                }}>
                    <View style={{ borderColor: TAILWIND_THEME.colors["purple"]}} className="border-[3px] rounded-[42px] bg-white">
                        <ReactNiceAvatar size={75} style={{ backgroundColor: "transparent" }} {...{...avatarConfig, shape: "circle"}} />
                    </View>
                    <Text style={{  fontSize: 21, fontWeight: "bold", }}>Leticia</Text>
                    <Block color_secondary="#2859C5" width={280} heigh={250}>
                        <View style={{ flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <WeekPorcent></WeekPorcent>
                            <Text style={{ color: "#2859C5", fontSize: 21, fontWeight: "bold" }}>Praticadas essa Semana</Text>
                        </View>
                    </Block>
                    <Text style={{ fontSize: 21, fontWeight: "bold" }}>Conquistas da Semana</Text>
                    <Block color_primary="#DBBCED" color_secondary="#8928C5" width={331} heigh={157}>
                        <View style={{ flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <Text style={{ color: "#8928C5", fontSize: 21, fontWeight: "bold" }}>Campeã</Text>
                            <View style={{ borderColor: TAILWIND_THEME.colors["purple"]}} className="border-[3px] rounded-[42px] bg-white">
                                <ReactNiceAvatar size={75} style={{ backgroundColor: "transparent" }} {...{...avatarConfig, shape: "circle"}} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", marginTop: 30, alignItems: "flex-start" }}>
                        <View style={{ marginVertical: 5, flexDirection: "row" }}>
                            
                            <Text style={{ color: "#8928C5", marginBottom: 5 }}>5 Atividades</Text>
                        </View>
                            <View style={{ marginVertical: 5, flexDirection: "row" }}>
                                <Trophy width="30px" height="30px" color_secondary={TAILWIND_THEME.colors["purple"]} color_primary={TAILWIND_THEME.colors["light_purple"]} ></Trophy>
                                <Text style={{ color: "#8928C5", marginTop: 5, marginLeft: 10 }}>{totalAchievements} Troféus</Text>
                            </View>
                            <View style={{ marginVertical: 5, flexDirection: "row" }}>
                                <Clock width="30px" height="30px" colorSecondary={"#DBBCED"} colorPrimary={"#8928C5"} ></Clock>
                                <Text style={{ color: "#8928C5", marginLeft: 10 }}>7 Horas</Text>
                            </View>

                        </View>
                    </Block>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap", paddingRight: 30 }}>
                        <View style={{ margin: 8, width: '30%' }}>
                            <Link href={"/achievement_details/yellow_3"}>
                                <Block color_primary="#FFE5A5" color_secondary="#FFCC4D" width={132} heigh={157}>
                                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                                        <Atacker></Atacker>
                                        <Text style={{ color: "#FFCC4D", fontSize: 18 }}>Artilheiro</Text>
                                    </View>
                                </Block>
                            </Link>
                        </View>
                        <View style={{ margin: 8, width: '30%' }}>
                            <Link href={"/achievement_details/blue_1"}>
                                <Block color_primary="#8FBFFA" color_secondary="#2859C5" width={132} heigh={157}>
                                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                                        <Fast></Fast>
                                        <Text style={{ color: "#2859C5", fontSize: 18 }}>Veloz</Text>
                                    </View>
                                </Block>
                            </Link>
                        </View>
                        <View style={{ margin: 10, width: '30%' }}>
                            <Link href={"/achievement_details/yellow_1"}>
                                <Block color_primary="#FFE5A5" color_secondary="#FFCC4D" width={132} heigh={157}>
                                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                                        <Brilliant></Brilliant>
                                        <Text style={{ textAlign: "center", color: "#FFCC4D", fontSize: 18 }}>Mente{`\n`}Brilhante</Text>
                                    </View>
                                </Block>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
