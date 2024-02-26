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
      bottom: bottom + 10,
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
        width: 349,
        height: 393,
        borderRadius: 27,
        backgroundColor: '#8FBFFA',
        borderWidth: 1,
        borderColor: '#2859C5',
        marginBottom: 20, // Adiciona espaço entre os blocos
      }}
    />
    <View
      style={{
        width: 343,
        height: 393,
        borderRadius: 27,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000000',
        position: 'absolute',
        left: 20,
        top: 20,
      }}
    >
      <Text>{title}</Text>
      {children}
    </View>
  </View>
);

function Content() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <CustomBlock title="Block 1">
          <Text>Conteúdo do bloco 1</Text>
        </CustomBlock>
        <CustomBlock title="Block 2">
          <Text>Conteúdo do bloco 2</Text>
        </CustomBlock>
        <CustomBlock title="Block 3">
          <Text>Conteúdo do bloco 3</Text>
        </CustomBlock>
        {/* Adicione mais blocos aqui */}
      </ScrollView>
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
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>
          minhas atividades
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