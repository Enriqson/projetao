import { Modal, View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import TerrifiedSvg from "@/components/svgs/feedback/Terrified";
import SadSvg from "@/components/svgs/feedback/Sad";
import NeutralSvg from "@/components/svgs/feedback/Neutral";
import HappySvg from "@/components/svgs/feedback/Happy";
import ExcitedSvg from "@/components/svgs/feedback/Excited";
import HiddeIcon from "@/components/svgs/adventureWeek/hidde";
import SampleIcon from "@/components/svgs/adventureWeek/sample";
import { TAILWIND_THEME, colorInterpolate } from "@/utils";
import ACTIVITY_METADATA from "@/utils/activityMetadata";

function renderFeedbackSvgs({
  color1,
  color2,
  selectedFeedbackIdx = undefined,
  setSelectedFeedbackIdx,
}) {
  const svgList = [TerrifiedSvg, SadSvg, NeutralSvg, HappySvg, ExcitedSvg];

  return (
    <View className="flex flex-row justify-around w-4/5">
      {svgList.map((SvgItem, idx) => {
        let color_primary = color1;
        let color_secondary = color2;
        if (selectedFeedbackIdx == idx) {
          color_primary = colorInterpolate(color1, "#FFFFFF", 0.1);
          color_secondary = colorInterpolate(color2, "#FFFFFF", 0.1);
        }
        else if(selectedFeedbackIdx != undefined){
          
          color_primary = colorInterpolate(color1, "#000000", 0.2);
          color_secondary = colorInterpolate(color2, "#000000", 0.2);
        }

        const handlePress = () => {
          setSelectedFeedbackIdx(idx);
        };
        return (
          <View key={idx}>
            <TouchableOpacity onPress={handlePress}>
              <SvgItem
                color_primary={color_primary}
                color_secondary={color_secondary}
              ></SvgItem>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

export const ModalFeedback = ({
  stateModal,
  onClose,
  onNext,
  atividade,
  stateDiaryActivities,
}: {
  stateModal: boolean;
  onClose: () => void;
  onNext?: () => void;
  atividade: string;
  stateDiaryActivities: boolean;
}) => {
  const [selectedFeedbackIdx, setSelectedFeedbackIdx] = useState(undefined);
  useEffect(() => {
    setSelectedFeedbackIdx(undefined);
  }, [stateModal]);

  let activityName = "rope_jumping";

  if (atividade == "Futebol") {
    activityName = "soccer";
  } else if (atividade == "Xadrez") {
    activityName = "chess";
  }
  const activity_metadata = ACTIVITY_METADATA[activityName];
  const color1 = TAILWIND_THEME.colors["light_" + activity_metadata.color];
  const color2 = TAILWIND_THEME.colors[activity_metadata.color];
  return (
    <Modal animationType="fade" transparent={true} visible={stateModal}>
      <View className="w-full h-[4.0rem]" />
      <View className="flex justify-top items-center h-full w-full  ">
        <View className="absolute justify-end h-[7.2%] mt-8 w-5/6  bg bg-modal_blue_board  border-solid border-modal_blue_board border-2  rounded-[2rem] z-0 " />
        <View className="relative  h-[7.2%] w-5/6  bg  mt-6 bg-white border-solid  border-2  rounded-[2rem] z-1">
          <View className="flex flex-row items-center h-full justify-between pl-2">
            <Text>Atividades diárias</Text>
            <View className="pr-3">
              <Pressable
                onPress={onClose}
                style={({ pressed }) => ({
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  height: 20,
                  borderWidth: 1,
                  borderColor: "black",
                })}
              >
                {stateDiaryActivities ? <SampleIcon /> : <HiddeIcon />}
              </Pressable>
            </View>
          </View>
        </View>

        <View className="flex  pt-8  h-full w-full bg relative">
          <View className="flex items-center w-full h-[30%]">
            <View
              className=" mt-[10px] h-[80%] w-[80%] border-2 border-solid  rounded-3xl"
              style={{ backgroundColor: color1, borderColor: color2 }}
            />
            <View className=" h-[80%] w-[80%] border-2 border-solid bg bg-white rounded-3xl z-50 absolute">
              <View className="flex items-center justify-center h-full w-full">
                <View className="flex items-center w-full h-[90%]">
                  <Text className="text-3xl ">O quanto voce gostou?</Text>
                  <View className="flex w-full  h-full items-center mt-6">
                    {renderFeedbackSvgs({
                      color1,
                      color2,
                      selectedFeedbackIdx,
                      setSelectedFeedbackIdx,
                    })}
                    <View className="flex items-center justify-center w-full h-1/3">
                      <View className="flex justify-center items-center w-1/4 border border-modal_blue_board rounded-2xl ">
                        <Pressable
                          onPress={onNext}
                          style={({ pressed }) => ({
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            height: 20,
                            borderWidth: 1,
                            borderColor: "black",
                            backgroundColor: pressed
                              ? "#E5E7EB"
                              : "transparent",
                          })}
                        >
                          <Text style={{ color: "#6B7280" }}>Finalizar</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
