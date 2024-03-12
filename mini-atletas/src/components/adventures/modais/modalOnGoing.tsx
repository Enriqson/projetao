import { Modal, View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import Chess from "@/components/svgs/activities/Chess";
import Rope from "@/components/svgs/activities/Rope";
import Ball from "@/components/svgs/activities/Ball";
import ProgressBar from "../../svgs/adventureWeek/progressBar";
import OffSetAdventuresWeek from "@/components/OffsetBorder/offSetAdventuresWeek";

export const ModalOnGoing = ({
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
  function renderizarImagem() {
    if (atividade === "futebol") {
      return <Ball></Ball>;
    } else if (atividade === "xadrez") {
      return <Chess></Chess>;
    } else {
      return <Rope></Rope>;
    }
  }
  return (
    <Modal animationType="fade" transparent={true} visible={stateModal}>
      <View className="flex justify-top items-center h-full w-full bg-black bg-opacity-40">
        <View className="flex justify-end w-[79%] h-[13.5%]">
          <View className="flex items-end justify-end w-full h-full">
            <Button size="lg" type="clear" onPress={onClose}></Button>
          </View>
        </View>

        <View className="flex justify-top pt-12 h-[90%] w-full bg  items-center relative">
          <View className="mt-2  h-[32%] w-[80%] border-2 border-solid border-modal_blue_board bg bg-modal_blue rounded-3xl " />
          <View className="ml-4 h-[30%] w-[80%] border-2 border-solid  bg bg-white rounded-3xl z-50 absolute">
            <View className="flex items-center h-full w-full">
              <View className="flex justify-center items-center">
                <Text className="text-2xl">{atividade}</Text>

                <View className="pt-3">
                  <Text>voce está jogando</Text>
                </View>

                <View className="pt-3">
                  <ProgressBar></ProgressBar>
                </View>

                <View className="pt-3">{renderizarImagem()}</View>

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
      </View>
    </Modal>
  );
};
