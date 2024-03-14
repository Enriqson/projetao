import { Modal, View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { LinearProgress } from "@rneui/themed";
import { SelectBar } from "../selectBar";

export const ModalActivitiesStart = ({
  stateModal,
  onClose,
  onNext,
  atividades,
  setAtividade,
  stateDiaryActivities,
  showModal,
}: {
  stateModal: boolean;
  onClose: () => void;
  setAtividade: (atividade) => void;
  onNext?: () => void;
  atividades: string[];
  stateDiaryActivities:boolean;
  showModal:()=>void;
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={stateModal}>
      <View className="w-full h-[4rem] bg bg-blue bg-opacity-20"/>
      <View className="flex justify-top items-center h-full w-full bg bg-blue bg-opacity-30">
        
        <View className='absolute justify-end h-[6%]  w-5/6  bg bg-modal_blue_board mt-8  border-solid border-modal_blue_board border-2  rounded-[2rem] z-0 '/>
        <SelectBar stateButton={stateDiaryActivities} showModal={()=>{showModal()}} height='[6%]'/>

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
                        height: "30%",
                        borderWidth: 3,
                        borderRadius: 10,
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "#8FBFFA",
                      }}
                    />
                  </View>

                  <View className="flex justify-end pt-2 w-full h-[60%] ">
                    <View className="flex justify-between bg w-full h-[80%] ">
                      {atividades.map((atividade, index) => (
                        <View
                          key={index}
                          className="flex flex-row justify-between items-center"
                        >
                          <View className="pl-6  h-full w-1/2">
                            <Text className="">{atividade}</Text>
                          </View>
                          <View className="flex items-end pr-6 h-2/3  w-1/2 ">
                            <View className="flex justify-center items-center w-2/3 border rounded-2xl">
                              <Button
                                onPress={() => {
                                  onNext();
                                  setAtividade(atividade);
                                }}
                                type="clear"
                                size="sm"
                                style={{borderWidth:1, borderColor:'black'}}
                              >
                              </Button>
                              <Text className=" text-gray_button mb-1">Iniciar</Text>

                            </View>
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