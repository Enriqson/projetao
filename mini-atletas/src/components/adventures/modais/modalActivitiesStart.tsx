import { Modal, View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { default as ProfileSvg } from "@/components/svgs/misc/profile";

export const ModalActivitiesStart = ({
  stateModal,
  onClose,
  onNext,
  atividades,
}: {
  stateModal: boolean;
  onClose: () => void;
  onNext?: () => void;
  atividades: string[];
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={stateModal}>
      <View className="flex justify-top items-center h-full w-full">
        <View className="flex justify-end w-[79%] h-[13.5%] ">
          <View className="flex items-end justify-end w-full h-full">
            <Button size="lg" type="clear" onPress={onClose}></Button>
          </View>
        </View>
        <View className="flex justify-top pt-12 h-[90%] w-[80%] ">
          <View className="h-[40%] w-full border border-solid bg bg-white rounded-3xl">
            <Text>MODAL 1</Text>

            <View className="flex justify-center flex-row">
              <ProfileSvg></ProfileSvg>
            </View>
            {atividades.map((atividade, index) => (
              <View
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <View className="pl-2">
                  <Text className="">{atividade}</Text>
                </View>

                <Button onPress={onNext} className="rounded-xl h-1/2 pr-2">
                  Iniciar
                </Button>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};
