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
import Bar from '@/components/svgs/adventureWeek/bar'

class BarTest extends Component {

  render() {
    return (
      <View>
        <Bar></Bar>
      </View>
    );
  }
}

export default BarTest
