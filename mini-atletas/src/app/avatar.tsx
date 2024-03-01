import units from "@/utils/units";
import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import Avatar, {
  AvatarFullConfig,
  HairStyleType,
  genConfig,
} from "@zamplyy/react-native-nice-avatar";
import Hair from "@zamplyy/react-native-nice-avatar/src/hair";
import Face from "@zamplyy/react-native-nice-avatar/src/face";
import { defaultOptions } from "@zamplyy/react-native-nice-avatar/src/utils";
import Icon from "react-native-vector-icons/FontAwesome";
import OffsetBorder from "@/components/OffsetBorder";

export default function Page() {
  return (
    <View className="flex flex-1 bg-white">
      <Content />
    </View>
  );
}

function PropSelector(props) {
  return (
    <View className="mx-10 first:ml-0 last:mr-0">
      <OffsetBorder leftOffset={0} bottomOffset={8} borderRadius={20}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View
          className="bg-white border-2 rounded-[20px] flex-col justify-center items-center"
          style={{
            width: props.size,
            height: props.size,
          }}
        >
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    </OffsetBorder>
    </View>
  );
}

class Content extends Component {
  avatarSize: number;
  config: AvatarFullConfig;
  defaultOpts: any;
  hairStyles: HairStyleType[];
  hairColors: string[];
  currHair: number;

  constructor(props) {
    super(props);

    this.hairStyles = ["normal", "thick", "mohawk", "womanLong", "womanShort"];
    this.hairColors = ["black", "yellow"];
    this.currHair = 0;

    this.config = {
      ...genConfig({
        bgColor: "white",
        hairStyle: this.hairStyles[0],
        hairColor: this.hairColors[0],
        earSize: "big",
        shirtStyle: "short",
        shirtColor: "#8928C5",
        mouthStyle: "peace",
        noseStyle: "round",
        hatStyle: "none",
        eyeBrowStyle: "up",
        glassesStyle: "none",
      }),
      shape: "rounded",
    };

    this.defaultOpts = this.genDefaultOptions(defaultOptions);
    this.defaultOpts["faceColor"] = ["#F9C9B6", "#AC6651"];

    this.state = {
      config: this.config,
    };

    this.avatarSize = Math.min(units.VH(50), units.VW(80));
  }

  genDefaultOptions(opts) {
    const hairSet = new Set(opts.hairStyleMan.concat(opts.hairStyleWoman));
    return {
      ...opts,
      hairStyle: Array.from(hairSet),
    };
  }

  incrementHair() {
    const numOpts = this.hairColors.length * this.hairStyles.length;
    this.currHair = (this.currHair + 1) % numOpts;
    this.config.hairStyle =
      this.hairStyles[this.currHair % this.hairStyles.length];
    this.config.hairColor =
      this.hairColors[this.currHair % this.hairColors.length];

    this.setState({ config: this.config });
  }

  incrementProp(prop) {
    if (prop == "hair") {
      this.incrementHair();
      return;
    }

    const currOpt = this.config[prop];
    const opts: [any] = this.defaultOpts[prop];
    const currentIdx = opts.findIndex((item) => item == currOpt);
    const newIdx = (currentIdx + 1) % opts.length;
    const newVal = opts[newIdx];
    this.config[prop] = newVal;

    this.setState({ config: this.config });
  }

  render() {
    return (
      <View className="flex flex-col items-center gap-4 text-center">
        <Text
          role="heading"
          className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mt-[20px] text-[#545F71]"
        >
          Crie seu avatar
        </Text>

        <View className="gap-4">
          <OffsetBorder>
            <View className="border-black border-[3px] rounded-[32px] bg-white">
              <Avatar
                style={{ backgroundColor: "transparent" }}
                size={this.avatarSize}
                {...this.state.config}
              />
            </View>
          </OffsetBorder>

          <View className="flex-row justify-between pt-3">
            <PropSelector
              onPress={this.incrementProp.bind(this, "eyeStyle")}
              size={this.avatarSize / 3.5}
            >
              <Icon name="eye" size={this.avatarSize / 6}></Icon>
            </PropSelector>

            <PropSelector
              onPress={this.incrementProp.bind(this, "hair")}
              size={this.avatarSize / 3.5}
            >
              <Hair
                style={this.config.hairStyle}
                color="black"
                colorRandom={false}
              ></Hair>
            </PropSelector>

            <PropSelector
              onPress={this.incrementProp.bind(this, "faceColor")}
              size={this.avatarSize / 3.5}
            >
              <Face color={this.config.faceColor}></Face>
            </PropSelector>
          </View>
        </View>
      </View>
    );
  }
}
