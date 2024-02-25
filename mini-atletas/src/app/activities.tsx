import { Link } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Linking } from "react-native";
import { Text, View, Modal, ScrollView, TouchableOpacity, Image } from "react-native";

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
      bottom: bottom + 10, // move the bar a bit up from the bottom
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      justifyContent: 'center', // center the inner view
    }}>
      <View style={{
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 10, // add some border radius
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width: Dimensions.get('window').width * 0.8, // 80% of screen width
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
    </View>
  );
}



function Content() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }} className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="container px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Link href="/">
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'blue',
                  borderRadius: 10,
                  padding: 10,
                  margin: 10,
                  backgroundColor: 'lightgray',
                  shadowColor: "blue",
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Svg height="50" width="50">
                    <Circle cx="25" cy="25" r="25" fill="pink" />
                  </Svg>
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}
                    >
                      Title
                    </Text>
                    <Text>
                      Some description text...
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>

            {/* Add more content blocks as needed */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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