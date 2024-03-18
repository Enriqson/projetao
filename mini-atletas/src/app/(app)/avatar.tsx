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
import { supabase } from "@/config/supabase";
import { useAuth } from "@/providers/AuthProvider";
import debounce from "lodash/debounce";

export default function Page() {
  const { user } = useAuth();
  return (
    <View className="flex flex-1 bg-white">
      <Content user={user} />
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
function genDefaultOptions(opts) {
  const hairSet = new Set(opts.hairStyleMan.concat(opts.hairStyleWoman));

  const newOpts = {
    ...opts,
    hairStyle: Array.from(hairSet),
  };

  newOpts["faceColor"] = ["#F9C9B6", "#AC6651"];

  return newOpts;
}

class Content extends Component {
  avatarSize: number;
  config: AvatarFullConfig;
  defaultOpts: any;
  hairStyles: HairStyleType[];
  hairColors: string[];
  currHair: number;
  state = {
    config: undefined,
    isAvatarLoaded: false,
  };

  constructor(props) {
    super(props);

    this.defaultOpts = genDefaultOptions(defaultOptions);
    this.hairStyles = ["normal", "thick", "mohawk", "womanLong", "womanShort"];
    this.hairColors = ["black", "yellow"];
    this.currHair = 0;
    this.avatarSize = Math.min(units.VH(50), units.VW(80));

    const defaultConfig = {
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

    this.state.config = defaultConfig
  }

  componentDidMount() {
    this.getSavedAvatar();
  }

  async getSavedAvatar() {
    let { data, error } = await supabase
      .from("avatar_config")
      .select("avatar_config")
      .maybeSingle();

    if (error) throw error;

    if (data?.avatar_config) {
      let avatar_config = data["avatar_config"];
      const parsedConfig = JSON.parse(avatar_config as unknown as string);

      this.setState({ config: parsedConfig, isAvatarLoaded:true });
    } else {
      this.saveConfig(this.state.config)
    }
  }

  async saveConfig(config) {
    const config_str = JSON.stringify(config);
    const { error } = await supabase
      .from("avatar_config")
      .update({ avatar_config: config_str })
      .eq("user_id", this.props.user.id);

    if (error) throw error;
  }

  debouncedSaveConfig = debounce(this.saveConfig,300)

  handleConfigChange(newConfig) {
    this.setState({ config: newConfig });
    this.debouncedSaveConfig(newConfig);
  }

  incrementHair() {
    const numOpts = this.hairColors.length * this.hairStyles.length;
    this.currHair = (this.currHair + 1) % numOpts;
    const newConfig = { ...this.state.config };
    newConfig.hairStyle =
      this.hairStyles[this.currHair % this.hairStyles.length];
    newConfig.hairColor =
      this.hairColors[this.currHair % this.hairColors.length];

    this.handleConfigChange(newConfig);
  }

  incrementProp(prop) {
    if (prop == "hair") {
      this.incrementHair();
      return;
    }

    const currOpt = this.state.config[prop];
    const opts: [any] = this.defaultOpts[prop];
    const currentIdx = opts.findIndex((item) => item == currOpt);
    const newIdx = (currentIdx + 1) % opts.length;
    const newVal = opts[newIdx];
    const newConfig = {...this.state.config}
    newConfig[prop] = newVal;

    this.handleConfigChange(newConfig);
  }

  render() {

    if(this.state.isAvatarLoaded==false){
      return "" //add loading or splash screen
    }
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
                {...{...this.state.config, shape: "rounded"}}
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
                style={this.state.config.hairStyle}
                color="black"
                colorRandom={false}
              ></Hair>
            </PropSelector>

            <PropSelector
              onPress={this.incrementProp.bind(this, "faceColor")}
              size={this.avatarSize / 3.5}
            >
              <Face color={this.state.config.faceColor}></Face>
            </PropSelector>
          </View>
        </View>
      </View>
    );
  }
}
