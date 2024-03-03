import { StyleSheet } from "nativewind";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import ACTIVITY_METADATA from '@/utils/activityMetadata';
import { TAILWIND_THEME } from "@/utils/index";

export default function Page() {
  const { activity } = useLocalSearchParams();
  console.log(activity)
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
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.button, isPressed && styles.buttonPressed]}
    >
      <Text style={[styles.buttonText, isPressed && styles.buttonTextPressed]}>
        Iniciar
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 100,
    width: 251,
    height: 50,
    zIndex: 2,
    borderColor: "#000000",
    borderWidth: 2,
    marginBottom: 120,
    position: "absolute",
    top: 578,
    transform: [{ rotate: "-1.57deg" }],
  },
  buttonPressed: {
    backgroundColor: "blue", // Altera para a cor desejada quando pressionado
  },
  buttonText: {
    fontSize: 20,
    color: "#545F71",
  },
  buttonTextPressed: {
    color: "#fff", // Altera para a cor do texto desejada quando pressionado
  },
  blockContainer: {
    marginBottom: 30, // Reduzido de 20 para 10
    marginTop: 30, // Adicionado marginTop
    alignItems: "center",
  },
});

function ContentWithStartButton({ activity }) {
  const activityMetadata = ACTIVITY_METADATA[activity]
  const color_primary = TAILWIND_THEME.colors["light_" + activityMetadata["color"]]
  const color_secondary = TAILWIND_THEME.colors[activityMetadata["color"]]

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <View>
        <View style={styles.blockContainer}>
          <View
            style={{
              width: 347,
              height: 504,
              borderRadius: 27,
              backgroundColor: color_primary,
              borderWidth: 1,
              borderColor: color_secondary,
              marginBottom: 55, // Adiciona espaço entre os blocos
              position: "relative",
              top: 15,
              left: -10,
            }}
          />
          <View
            style={{
              width: 347,
              height: 504,
              borderRadius: 27,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#000000",
              position: "absolute",
            }}
          ></View>
        </View>
      </View>
      <StartButton onPress={() => console.log("Pressionado")} />
      <View
        style={{
          borderRadius: 100,
          width: 251, // Mesma largura do botão iniciar
          height: 50, // Mesma altura do botão iniciar
          position: "absolute",
          top: 578,
          zIndex: 1,
          marginTop: 10,
          transform: [{ rotate: "-1.57deg" }],
          borderColor: color_primary,// Cor da borda (vermelho)
          borderWidth: 2, // Largura da borda
        }}
      />
    </View>
  );
}


