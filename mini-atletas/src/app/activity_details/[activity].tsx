import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import ACTIVITY_METADATA from '@/utils/activityMetadata';
import { TAILWIND_THEME } from "@/utils/index";
import OffsetBorder from "@/components/OffsetBorder";
import { Svg } from "react-native-svg";

export default function Page() {
  const { activity } = useLocalSearchParams();

  return (
    <View className="flex flex-1">
      <Content activity={activity} />
    </View>
  );
}

function Content({ activity }) {
  const activityMetadata = ACTIVITY_METADATA[activity];
  const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]];
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]];
  const Image = activityMetadata["Image"];

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
  };

  return (
    <View className="justify-center items-center">
      <View>
        <View className="mt-[20px] mb-[50px] items-center">
          <OffsetBorder color_primary={color_primary} color_secondary={color_secondary}>
            <View className="border-black border-[2px] rounded-[32px] bg-white lg:h-[50vh] lg:w-[50vw] h-[60vh] w-[80vw] ">
              <View className="flex mx-[20px] my-[20px] ">
                <Text style={{
                  fontFamily: "Kanit",
                  fontSize: 48,
                  fontWeight: "bold",
                  color: color_secondary,
                }}>{activityMetadata["alias"]}</Text>
                <View className="my-[10px]">
                  <Image />
                </View>
                <Text className="my-[10px]" style={{
                  fontFamily: "Kanit",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: color_secondary,
                }}>Como fazer?</Text>
                <Text className="my-[10px]">{activityMetadata["instructions"]}</Text>
                <Text className="my-[10px]" style={{
                  fontFamily: "Kanit",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: color_secondary,
                }}>O que preciso ?</Text>
                <Text className="my-[10px]">{activityMetadata["requirements"]}</Text>


              </View>
            </View>
          </OffsetBorder>
        </View>
      </View>
      <StartButton onPress={handlePress} activity={activity}>Iniciar</StartButton>
    </View>
  );
}

export function StartButton({ onPress, children, activity }) {
  const activityMetadata = ACTIVITY_METADATA[activity];
  const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]];
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]];

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View>
          <View className="justify-center items-center border-black border-[2px] rounded-[25px] bg-white w-[251px] h-[50px]"
            style={{
              backgroundColor: pressed ? color_secondary : 'white',
              borderColor: pressed ? color_secondary : 'black',
              transform: [{ rotate: "-1.57deg" }],
              zIndex: 1,
            }}
          >
            <Text style={{
              color: pressed ? '#FFFFFF' : '#545F71',
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: 24,
            }}>
              {children}
            </Text>
          </View>
          <View className="border-[2px] rounded-[25px] bg-white w-[251px] h-[50px] mt-[-43px]"
            style={{
              backgroundColor: pressed ? color_primary : 'white',
              transform: [{ rotate: "-1.57deg" }],
              borderColor: color_secondary,
              zIndex: 0,
            }}
          >
          </View>
        </View>
      )}
    </Pressable>
  );
}


