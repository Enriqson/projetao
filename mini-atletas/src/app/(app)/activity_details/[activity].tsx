import { StyleSheet } from "nativewind";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import ACTIVITY_METADATA from '@/utils/activityMetadata';
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder";

export default function Page() {
  const { activity } = useLocalSearchParams();

  return (
    <View className="flex flex-1">
      <ContentWithStartButton activity={activity} />
    </View>
  );
}

function StartButton({ onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View className="relative flex mt-5"
    >
      <View style={{
        transform: [{ rotate: "-1.57deg" }],
      }}>
        <View className="rounded-[100px] lg:h-[5vh] lg:w-[22vw] h-[8vh] w-[60vw] absolute top-[10px]  border-light_blue border-2" />
        <TouchableOpacity
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          className="flex-row justify-center items-center bg-white p-[10px] lg:h-[5vh] lg:w-[22vw] h-[8vh] w-[60vw] rounded-[100px] border-black border-2 active:bg-light_blue"
        >
          <Text
            style={[styles.buttonText, isPressed && styles.buttonTextPressed]}
          >
            Iniciar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: "#545F71",
  },
  buttonTextPressed: {
    color: "#fff", // Altera para a cor do texto desejada quando pressionado
  },
});

function ContentWithStartButton({ activity }) {
  const activityMetadata = ACTIVITY_METADATA[activity]
  const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]]
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]]

  return (
    <View className="justify-center items-center">
      <View>
        <View className="my-[20px] items-center">
          <OffsetBorder color_primary={color_primary} color_secondary={color_secondary}>
            <View className="border-black border-[2px] rounded-[32px] bg-white lg:h-[50vh] lg:w-[50vw] h-[60vh] w-[80vw]">
              <Text> Lorem Ipsum</Text>
            </View>
          </OffsetBorder>
        </View>
      </View>
      <StartButton onPress={() => {}} />
    </View>
  );
}


