import units from "@/utils/units";
import { Link } from "expo-router";
import React, { Component } from "react";
import { Text, Touchable, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Avatar, { AvatarFullConfig, HairStyleType, genConfig } from '@zamplyy/react-native-nice-avatar';
import Hair from '@zamplyy/react-native-nice-avatar/src/hair';
import Face from '@zamplyy/react-native-nice-avatar/src/face';
import { defaultOptions } from "@zamplyy/react-native-nice-avatar/src/utils";
import { StyleSheet } from "nativewind";
import Icon from 'react-native-vector-icons/FontAwesome';

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

class Content extends Component {
  avatarSize: number
  config: AvatarFullConfig
  defaultOpts: any
  hairStyles: HairStyleType[]
  hairColors: string[]
  currHair: number

  constructor(props) {
    super(props);

    this.hairStyles = ["normal", "thick", "mohawk", "womanLong", "womanShort" ];
    this.hairColors = [ 'black', 'yellow' ];
    this.currHair = 0;

    this.config = {...genConfig({ bgColor: 'white', hairStyle: this.hairStyles[0], hairColor:this.hairColors[0], earSize: "big", shirtStyle: 'short', shirtColor: '#8928C5', mouthStyle: 'peace', noseStyle: 'round', hatStyle: 'none', eyeBrowStyle: 'up', glassesStyle: 'none' }), shape: 'rounded'} ;

    this.defaultOpts = this.genDefaultOptions(defaultOptions);
    this.defaultOpts['faceColor'] = ['#F9C9B6', '#AC6651'];

    this.state = {
      config: this.config
    }

    this.avatarSize = min(units.VH(40), units.VW(40));
  }

  genDefaultOptions (opts) {
    const hairSet = new Set(opts.hairStyleMan.concat(opts.hairStyleWoman))
    return {
      ...opts,
      hairStyle: Array.from(hairSet)
    }
  }

  incrementHair() {
    const numOpts = this.hairColors.length * this.hairStyles.length;
    this.currHair = (this.currHair + 1) % numOpts;
    this.config.hairStyle = this.hairStyles[this.currHair % this.hairStyles.length];
    this.config.hairColor = this.hairColors[this.currHair % this.hairColors.length];

    console.log('currHair ', this.currHair)

    this.setState({config: this.config});
  }

  incrementProp (prop) {
    if(prop == 'hair') {
      this.incrementHair();
      return;
    }

    const currOpt = this.config[prop];
    const opts:[any] = this.defaultOpts[prop];
    const currentIdx = opts.findIndex(item => item == currOpt);
    const newIdx = (currentIdx+1) % opts.length;
    const newVal = opts[newIdx];
    this.config[prop] = newVal;

    this.setState({config: this.config});
  }

  render() {
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
                <View style={StyleSheet.compose(style.component, { borderWidth: 3, borderColor: 'black', borderRadius: 10 })}>
                  <Avatar size={this.avatarSize} {...this.state.config} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableWithoutFeedback onPress={this.incrementProp.bind(this, 'eyeStyle')}>
                    <View style={StyleSheet.compose(style.listItem, { width: this.avatarSize / 4, height: this.avatarSize / 4, backgroundColor: 'white', borderWidth: 2, borderRadius: 5, marginLeft: 0, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' })}>
                      <Icon name='eye' size={this.avatarSize / 6}></Icon>
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={this.incrementProp.bind(this, 'hair')}>
                    <View style={StyleSheet.compose(style.listItem, { width: this.avatarSize / 4, height: this.avatarSize / 4, backgroundColor: 'white', borderWidth: 2, borderRadius: 5 })}>
                      <Hair style={this.config.hairStyle} color="black" colorRandom={false} ></Hair>
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={this.incrementProp.bind(this, 'faceColor')}>
                    <View style={StyleSheet.compose(style.listItem, { width: this.avatarSize / 4, height: this.avatarSize / 4, backgroundColor: 'white', borderWidth: 2, borderRadius: 5, marginRight: 0 })}>
                      <Face color={this.config.faceColor}></Face>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View >
    );
  }
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