import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { default as HomeSvgComponent } from "../components/svgs/footer/home";
import { default as AchievementSvgComponent } from "../components/svgs/footer/achievement";

import { default as SadSvgComponent } from "../components/svgs/feedback/Sad";
import { default as ExcitedSvgComponent } from "../components/svgs/feedback/Excited";
import { default as TerrifiedSvgComponent } from "../components/svgs/feedback/Terrified";
import { default as NeutralSvgComponent } from "../components/svgs/feedback/Neutral";
import { default as HappySvgComponent } from "../components/svgs/feedback/Happy";
import { TAILWIND_THEME } from "../utils/constants";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    console.log(TAILWIND_THEME.colors)
    navigation.setOptions({
        headerShown:true
    })
  });

  return (
    <SafeAreaView>
      <Text className="text-light_purple ">
        Open up App.js to start working on your app!
      </Text>
      <HomeSvgComponent />
      <AchievementSvgComponent />
      <TerrifiedSvgComponent />
      <SadSvgComponent />
      <NeutralSvgComponent />
      <HappySvgComponent />
      <ExcitedSvgComponent color_primary={TAILWIND_THEME.colors.light_blue} color_secondary={TAILWIND_THEME.colors.purple}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
