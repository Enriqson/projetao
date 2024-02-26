import units from "@/utils/units";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Avatar, { genConfig } from '@zamplyy/react-native-nice-avatar';
import Hair from '@zamplyy/react-native-nice-avatar/src/hair';
import Face from '@zamplyy/react-native-nice-avatar/src/face';
import { StyleSheet } from "nativewind";
import Icon from 'react-native-vector-icons/FontAwesome';

const config = genConfig({ bgColor: 'white' });


const style = StyleSheet.create({
    component: {
        marginTop: 20,
        color: '#545F71',
    },

    listItem: {
        marginHorizontal: 10
    }
    
});

export default function Page() {
  return (
    <View className="flex flex-1" style={{backgroundColor: '#F2F1F6'}}>
      <Content />
    </View>
  );
}

function min(a: number, b: number) {
  if(a > b)
  return b;

  return a;
}

function Content() {
  const avatarSize = min(units.VH(35), units.VW(35));

  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="container px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              style={style.component}
            >
              Crie seu avatar
            </Text>

            <View className="gap-4">
                <View style = {StyleSheet.compose(style.component, { borderWidth: 3, borderColor: 'black' , borderRadius: 10}) }>
                  <Avatar size={avatarSize} {...{...config, shape: 'rounded'}} />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={StyleSheet.compose(style.listItem, {width: avatarSize/4, height: avatarSize/4, backgroundColor: 'white', borderWidth: 2, borderRadius: 5, marginLeft: 0, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'})}>
                    <Icon name='eye' size= {avatarSize/6}></Icon>
                  </View>
                  <View style={StyleSheet.compose(style.listItem, {width: avatarSize/4, height: avatarSize/4, backgroundColor: 'white', borderWidth: 2, borderRadius: 5})}>
                    <Hair style={'womanLong'} color="black" colorRandom={false} ></Hair>
                  </View>
                  <View style={StyleSheet.compose(style.listItem, {width: avatarSize/4, height: avatarSize/4, backgroundColor: 'white', borderWidth: 2, borderRadius: 5, marginRight: 0})}>
                    <Face color={config.faceColor}></Face>
                  </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    </View >
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 items-center justify-center" href="/">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Product
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Pricing
          </Link>
        </View>
      </View>
    </View>
  );
}