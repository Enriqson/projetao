import { Modal, View, Text, Pressable } from "react-native";
import React from "react";
import Chess from "@/components/svgs/activities/Chess";
import Rope from "@/components/svgs/activities/Rope";
import Ball from "@/components/svgs/activities/Ball";
import ProgressBar from "../../svgs/adventureWeek/progressBar";
import HiddeIcon from "@/components/svgs/adventureWeek/hidde";
import SampleIcon from "@/components/svgs/adventureWeek/sample";
import { LinearProgress } from "@rneui/base";

export const ModalOnGoing = ({
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
  stateDiaryActivities:boolean;
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
      <View className="w-full h-[4.0rem]"/>
      <View className="flex justify-top items-center h-full w-full">
        
        <View className='absolute justify-end h-[7.2%] mt-8 w-5/6  bg bg-modal_blue_board  border-solid border-modal_blue_board border-2  rounded-[2rem] z-0 '/>
        <View className='relative  h-[7.2%] w-5/6  bg  mt-6 bg-white border-solid  border-2  rounded-[2rem] z-1'>
          <View className='flex flex-row items-center h-full justify-between pl-2'>
              <Text>Atividades diárias</Text>
              <View className="pr-3">
                <Pressable
                  onPress={onClose}
                  style={({ pressed }) => ({
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    height: 20,
                    borderWidth: 1,
                    borderColor: 'black', 
                  })}
                >
                  {stateDiaryActivities ? <SampleIcon/> : <HiddeIcon/>}
                </Pressable>
              </View>
          </View>
        </View>

        <View className="flex  pt-8  h-full w-full bg relative">
          <View className="flex items-center w-full h-[40%]">
            <View className=" mt-[10px] h-full w-[80%] border-2 border-solid border-modal_blue_board bg bg-modal_blue rounded-3xl"/>
            <View className=" h-full w-[80%] border-2 border-solid bg bg-white rounded-3xl z-50 absolute">
              <View className="flex items-center h-full w-full">
                <View className="flex items-center w-full h-full">
                  <View className="w-full flex items-center pt-4">
                    <Text className="text-3xl">{atividade}</Text>
                  </View>

                  <View className="w-full h-1/5 flex items-center pt-2">
                    <Text className=" text-sm">voce está jogando</Text>
                      <LinearProgress
                        animation={false}
                        color="#2859C5"
                        value={0.3}
                        style={{
                          height: "45%",
                          width: "80%",
                          borderWidth: 3,
                          borderRadius: 10,
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderColor: "#8FBFFA",
                        }}
                      />
                  </View>

                  <View className="w-full flex items-center justify-center h-1/3 pt-6">
                    {renderizarImagem()}
                  </View>

                  <View className="flex flex-row items-end justify-between h-[30%] w-5/6 mb-2 pb-4">
                    <View className=" flex justify-center items-center w-[40%] h-[50%] border border-black rounded-3xl">
                      <Pressable
                        onPress={onNext}
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 10,
                          borderColor: 'black', 
                        }}
                      >
                      <Text style={{ color: '#6B7280' }}>Pausar</Text>
                      </Pressable>
                    </View>

                    <View className="flex justify-center items-center w-[40%] h-[50%] border border-black rounded-3xl ">
                      <Pressable
                        onPress={onNext}
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 10,
                          borderColor: 'black', 
                        }}
                      >
                        <Text style={{ color: '#6B7280' }}>Finalizar</Text>
                      </Pressable>
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
