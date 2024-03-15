import { Modal, View, Text, Pressable } from "react-native";
import React from "react";
import { LinearProgress } from "@rneui/themed";
import { SelectBar } from "../selectBar";
import HiddeIcon from "@/components/svgs/adventureWeek/hidde";
import SampleIcon from "@/components/svgs/adventureWeek/sample";
import { Button } from '@rneui/base';

export const ModalActivitiesStart = ({
  stateModal,
  onClose,
  onNext,
  atividades,
  setAtividade,
}: {
  stateModal: boolean;
  onClose: () => void;
  setAtividade: (atividade) => void;
  onNext?: () => void;
  atividades: string[];
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={stateModal}>
      <View className="w-full h-[5.5rem]"/>
      <View className="flex justify-top items-center h-full w-full ">
        
        <View className='absolute justify-end h-[6%]  w-5/6  bg bg-modal_blue_board mt-2  border-solid border-modal_blue_board border-2  rounded-[2rem] z-0 '/>
        <View className='relative  h-[6.0%] w-5/6  bg   bg-white border-solid  border-2  rounded-[2rem] z-1'>
          <View className='flex flex-row items-center h-full justify-between pl-2'>
              <Text>Atividades diárias</Text>
              <Button type='clear' title='test' onPress={onClose}>
                  {stateModal ? <SampleIcon/> : <HiddeIcon/>}
              </Button>
          </View>
        </View>

        <View className="flex  pt-8  h-full w-full bg relative">
          <View className="flex items-center w-full h-[30%]">
            <View className="mr-6 mt-[10px] h-full w-[80%] border-2 border-solid border-modal_blue_board bg bg-modal_blue rounded-3xl"/>
              <View className=" h-full w-[80%] border-2 border-solid bg bg-white rounded-3xl z-50 absolute">
                <View className="flex items-center h-full w-full">
                  <View className="flex justify-between items-center w-[70%] h-1/3">
                    <View className="mt-2">
                      <Text className="text-2xl">Hoje</Text>
                    </View>
                    <LinearProgress
                      animation={false}
                      color="#2859C5"
                      value={0.3}
                      style={{
                        height: "25%",
                        borderWidth: 3,
                        borderRadius: 10,
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#8FBFFA",
                      }}
                    />
                  </View>

                  <View className="flex justify-end pt-2 w-full h-[60%] ">
                    <View className="flex justify-between bg w-full h-[90%]">
                      {atividades.map((atividade, index) => (
                        <View
                          key={index}
                          className="flex flex-row justify-between items-center"
                        >
                          <View className="pl-6  h-full w-1/2">
                            <Text className="">{atividade}</Text>
                          </View>
                          
                            <View className="flex justify-center items-center w-1/5 border border-modal_blue_board rounded-2xl mr-6">
                              <Pressable
                                onPress={() => {
                                  onNext();
                                  setAtividade(atividade);
                                }}
                                style={({ pressed }) => ({
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderRadius: 10,
                                  height: 20,
                                  borderWidth: 1,
                                  borderColor: 'black', 
                                  backgroundColor: pressed ? '#E5E7EB' : 'transparent',
                                })}
                              >
                                <Text style={{ color: '#6B7280' }}>Iniciar</Text>
                              </Pressable>
                            </View>
                        </View>
                      ))}
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