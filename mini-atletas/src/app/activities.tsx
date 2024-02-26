import { Link } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Linking, SafeAreaView } from "react-native";
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

const CustomBlock = ({ title, children }) => (
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
        top: 35,
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
        top: 20,
      }}
    >
      <Text>{title}</Text>
      {children}
    </View>
  </View>
);

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
      <CustomBlock title={title}>
        {children}
      </CustomBlock>
      <StartButton onPress={() => console.log(`Iniciar ${title}`)} />
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


function Content() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ContentWithStartButton title="Block 1">
          <Text>Conteúdo do bloco 1</Text>
        </ContentWithStartButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  blockContainer: {
    marginBottom: 20, // Adiciona espaço entre os blocos
  },
});

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, height: 56 }}>
        <Link href="/">
          <Svg width="30" height="30" viewBox="0 0 30 30">
            <Path d="M10 5L5 15H20L15 25L10 15H15L20 5H10Z" fill="black" />
          </Svg>
        </Link>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2859C5' }}>
          Minhas Atividades
        </Text>
        <Link href="/">
          <Svg width="30" height="30" viewBox="0 0 30 30">
            <Path d="M20 5L25 15H10L15 25L20 15H15L10 5H20Z" fill="black" />
          </Svg>
        </Link>
      </View>
    </View>
  );
}