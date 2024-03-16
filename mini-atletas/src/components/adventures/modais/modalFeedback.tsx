import { Modal, View, Text, Pressable } from "react-native";
import React from "react";
import TerrifiedSvg from "@/components/svgs/feedback/Terrified";
import SadSvg from "@/components/svgs/feedback/Sad";
import NeutralSvg from "@/components/svgs/feedback/Neutral";
import HappySvg from "@/components/svgs/feedback/Happy";
import ExcitedSvg from "@/components/svgs/feedback/Excited";
import HiddeIcon from "@/components/svgs/adventureWeek/hidde";
import SampleIcon from "@/components/svgs/adventureWeek/sample";

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
  stateDiaryActivities:boolean;
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={stateModal}>
      <View className="w-full h-[4.0rem]"/>
      <View className="flex justify-top items-center h-full w-full  ">
        
        <View className='absolute justify-end h-[6.9%] mt-8 w-5/6  bg bg-modal_blue_board  border-solid border-modal_blue_board border-2  rounded-[2rem] z-0 '/>
        <View className='relative  h-[7.7%] w-5/6  bg  mt-6 bg-white border-solid  border-2  rounded-[2rem] z-1'>
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
                    backgroundColor: pressed ? '#E5E7EB' : 'transparent',
                  })}
                >
                  {stateModal ? <SampleIcon/> : <HiddeIcon/>}
                </Pressable>
              </View>
          </View>
        </View>

        <View className="flex  pt-8  h-full w-full bg relative">
          <View className="flex items-center w-full h-[30%]">
            <View className=" mt-[10px] h-[80%] w-[80%] border-2 border-solid border-modal_blue_board bg bg-modal_blue rounded-3xl"/>
              <View className=" h-[80%] w-[80%] border-2 border-solid bg bg-white rounded-3xl z-50 absolute">
                <View className="flex items-center justify-center h-full w-full ">

                  <View className="flex items-center w-full h-[90%]">
                    

               	    <Text className="text-2xl ">O quanto voce gostou?</Text>

                      <View className="flex  h-full items-center mt-6">
                        <View className="flex flex-row ">
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
                        

                        <View className="flex justify-center items-center w-full border border-modal_blue_board rounded-2xl ">
                              <Pressable
                                onPress={onNext}
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
