import { Link } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Linking, SafeAreaView, useWindowDimensions } from "react-native";
import { Text, View, Modal, ScrollView, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Svg, Path, Circle } from "react-native-svg";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

interface CustomBlockProps {
  direction?: 'row' | 'column';
  width?: number;
  height?: number;
  children?: React.ReactNode;
  corborda?: string;
  corBackground?: string;
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



function StartButton({ onPress }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        width: 251,
        height: 50, // Ajuste conforme necessário
        zIndex: 2,
        borderColor: '#000000', // Borda azul
        borderWidth: 2, // Largura da borda
        marginBottom: 120, // Espaçamento entre os botões
        transform: [{ rotate: '-1.57deg' }] // Aplicando rotação de 45 graus
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 20, color: '#545F71' }}>Iniciar</Text>
    </TouchableOpacity>
  );
}

function ContentWithStartButton({ title, children }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
      <CustomBlock>
      </CustomBlock>
      <StartButton onPress={() => console.log()} />
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

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 1,
  },
  blockContainer: {
    marginBottom: 30, // Reduzido de 20 para 10
    marginTop: 30, // Adicionado marginTop
    alignItems: 'center',
  },
});

const CustomBlock: React.FC<CustomBlockProps> = ({ width = 347, height = 504, children, direction = 'column', corBackground = '#8FBFFA', corborda = '#2859C5' }) => (
  <View style={styles.blockContainer}>
    <View
      style={{
        width: width,
        height: height,
        borderRadius: 27,
        backgroundColor: corBackground,
        borderWidth: 1,
        borderColor: corborda,
        position: 'relative',
        top: 35,
        left: -10,
      }}
    >
    </View>
    <View
      style={{
        width: width,
        height: height,
        borderRadius: 27,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000000',
        position: 'absolute',
        top: 20,
        flexDirection: direction,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {children}
    </View>
  </View>
);


function Content() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Link href="/activitiesComponents/futebol" style={{ margin: 20 }} >
          <CustomBlock width={347} height={140} direction="row">
            <View style={{ flexDirection: 'column' }}>
              <Text style={{
                fontFamily: 'Kanit',
                fontSize: 48,
                fontWeight: "bold",
                lineHeight: 48,
                letterSpacing: -0.02,
                textAlign: 'left',
                color: '#2859C5',
              }}>Futebol</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                  fontFamily: 'Kanit',
                  fontSize: 24,
                  fontWeight: "normal",
                  lineHeight: 24,
                  letterSpacing: -0.02,
                  textAlign: 'left',
                  color: '#2859C5',
                }}>1 atividade</Text>
                <Text style={{
                  fontFamily: 'Kanit',
                  fontSize: 24,
                  fontWeight: "normal",
                  lineHeight: 24,
                  letterSpacing: -0.02,
                  textAlign: 'left',
                  color: '#8FBFFA',
                }}> | 1 semana</Text>
              </View>
            </View>
          </CustomBlock>
        </Link>
        <Link href="/" style={{ margin: 20 }} >
          <CustomBlock width={347} height={140} direction="row">
            <View style={{ flexDirection: 'column' }}>
              <Text style={{
                fontFamily: 'Kanit',
                fontSize: 48,
                fontWeight: "bold",
                lineHeight: 48,
                letterSpacing: -0.02,
                textAlign: 'left',
                color: '#2859C5',
              }}>Futebol</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                  fontFamily: 'Kanit',
                  fontSize: 24,
                  fontWeight: "normal",
                  lineHeight: 24,
                  letterSpacing: -0.02,
                  textAlign: 'left',
                  color: '#2859C5',
                }}>1 atividade</Text>
                <Text style={{
                  fontFamily: 'Kanit',
                  fontSize: 24,
                  fontWeight: "normal",
                  lineHeight: 24,
                  letterSpacing: -0.02,
                  textAlign: 'left',
                  color: '#8FBFFA',
                }}> | 1 semana</Text>
              </View>
            </View>
          </CustomBlock>
        </Link>
      </ScrollView>
    </SafeAreaView>
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