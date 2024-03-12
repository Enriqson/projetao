import { Modal, View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import TerrifiedSvg from "@/components/svgs/feedback/Terrified";
import SadSvg from "@/components/svgs/feedback/Sad";
import NeutralSvg from "@/components/svgs/feedback/Neutral";
import HappySvg from "@/components/svgs/feedback/Happy";
import ExcitedSvg from "@/components/svgs/feedback/Excited";
import OffSetAdventuresWeek from "@/components/OffsetBorder/offSetAdventuresWeek";

export const ModalFeedback = ({
  stateModal,
  onClose,
  onNext,
  atividade,
}: {
  stateModal: boolean;
  onClose: () => void;
  onNext?: () => void;
  atividade: string;
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={stateModal}>
      <View className="flex justify-top items-center h-full w-full bg-black bg-opacity-40">
        <View className="flex justify-end w-[79%] h-[13.5%]">
          <View className="flex items-end justify-end w-full h-full">
            <Button size="lg" type="clear" onPress={onClose}></Button>
          </View>
        </View>
        <View className="flex justify-top pt-12 h-[90%] w-full bg  items-center relative">
          <View className="mt-2  h-[27%] w-[80%] border-2 border-solid border-modal_blue_board bg bg-modal_blue rounded-3xl " />
          <View className="ml-4 h-[25%] w-[80%] border-2 border-solid  bg bg-white rounded-3xl z-50 absolute">
            <View className="flex items-center h-full w-full">
              <Text className="text-2xl">O quanto voce gostou?</Text>

              <View className="flex flex-row">
                <View>
                  <TerrifiedSvg></TerrifiedSvg>
                </View>
                <View>
                  <SadSvg></SadSvg>
                </View>
                <View>
                  <NeutralSvg></NeutralSvg>
                </View>
                <View>
                  <HappySvg></HappySvg>
                </View>
                <View>
                  <ExcitedSvg></ExcitedSvg>
                </View>
              </View>

              <OffSetAdventuresWeek>
                  <View className="rounded-[32px] bg-white">
                    <Button
                      onPress={onNext}
                      type="clear"
                      className="flex justify-center rounded-xl h-[20px] border border-solid border-modal_blue_board"
                    >
                      <Text className=" text-gray_button">Finalizar</Text>
                    </Button>
                  </View>
                </OffSetAdventuresWeek>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
