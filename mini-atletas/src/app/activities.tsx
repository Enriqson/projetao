import React from "react";
import { View, ScrollView } from "react-native";
import Corda from "@/components/svgs/Atividades/corda";
import Futebol from "@/components/svgs/Atividades/Bola";
import Bicicleta from "@/components/svgs/Atividades/Bicicleta";
import ActivityBlock from "@/components/ActivityBlock";
import Xadrez from "@/components/svgs/Atividades/Xadrez";
import Esconde from "@/components/svgs/Atividades/Esconde";

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
      <View className=" w-4/5 lg:w-2/4 self-center">
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
            ActivitySvg={Futebol}
          />
          <ActivityBlock
            activityName="rope_jumping"
            ActivitySvg={Corda}
          />
          <ActivityBlock
            activityName="cycling"
            ActivitySvg={Bicicleta}
          />
          <ActivityBlock
            activityName="chess"
            ActivitySvg={Xadrez}
          />
          <ActivityBlock
            activityName="hide_and_seek"
            ActivitySvg={Esconde}
          />
        </View>
      </View>
    </ScrollView>
  );
}
