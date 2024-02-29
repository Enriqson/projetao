import { Link } from "expo-router";
import { StyleSheet } from "nativewind";
import { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Linking, Button } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Circle, Svg } from "react-native-svg";
//import Header from '../activities'

export default function Page() {
  return (
    <View className="flex flex-1">
      <Text>FUTEBOL</Text>
      <Header />
      <ContentWithStartButton />
      <Footer />
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
      <Text style={[styles.buttonText, isPressed && styles.buttonTextPressed]}>Iniciar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 100,
    width: 251,
    height: 50,
    zIndex: 2,
    borderColor: '#000000',
    borderWidth: 2,
    marginBottom: 120,
    position: 'absolute',
    top: 578,
    transform: [{ rotate: '-1.57deg' }]
  },
  buttonPressed: {
    backgroundColor: 'blue', // Altera para a cor desejada quando pressionado
  },
  buttonText: {
    fontSize: 20,
    color: '#545F71'
  },
  buttonTextPressed: {
    color: '#fff', // Altera para a cor do texto desejada quando pressionado
  },
  blockContainer: {
    marginBottom: 30, // Reduzido de 20 para 10
    marginTop: 30, // Adicionado marginTop
    alignItems: 'center',
  }
});

function ContentWithStartButton() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
      <View>
        <View style={styles.blockContainer}>
        <View
          style={{
            width: 347,
            height: 504,
            borderRadius: 27,
            backgroundColor: '#8FBFFA',
            borderWidth: 1,
            borderColor: '#2859C5',
            marginBottom: 55, // Adiciona espaço entre os blocos
            position: 'relative',
            top: 15,
            left: -10,
          }}
        />
        <View
          style={{
            width: 347,
            height: 504,
            borderRadius: 27,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#000000',
            position: 'absolute',
          }}
        >
          </View>
      </View>
                
      </View>
        <StartButton onPress={() => console.log("Pressionado")} />
        <View style={{
          borderRadius: 100,
          width: 251, // Mesma largura do botão iniciar
          height: 50, // Mesma altura do botão iniciar
          position: 'absolute',
          top: 578,
          zIndex: 1,
          marginTop: 10,
          transform: [{ rotate: '-1.57deg' }],
          borderColor: '#8FBFFA', // Cor da borda (vermelho)
          borderWidth: 2, // Largura da borda
        }} />
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, height: 56 }}>
        <Link href="/">
        </Link>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2859C5' }}>
          Minhas Atividades
        </Text>
        <Link href="/">
        </Link>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{
      position: 'absolute',
      bottom: bottom + 30,
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <View style={{
        backgroundColor: '#2859C5',
        borderRadius: 100,
        width: Dimensions.get('window').width * 0.8, // Same width as the white view
        height: 70, // Same height as the white view (adjust as needed)
        position: 'absolute',
        zIndex: 1,
        marginTop: 10,
      }} />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        width: Dimensions.get('window').width * 0.8, // 80% of screen width
        height: 70, // Adjust as needed
        zIndex: 2,
        borderColor: '#2859C5', // Blue border
        borderWidth: 2, // Border width
      }}>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Svg height="50" width="50">
            <Circle cx="25" cy="25" r="25" fill="pink" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Svg height="50" width="50">
            <Circle cx="25" cy="25" r="25" fill="blue" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Svg height="50" width="50">
            <Circle cx="25" cy="25" r="25" fill="green" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}