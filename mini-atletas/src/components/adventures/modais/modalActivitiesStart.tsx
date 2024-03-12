import { Modal, View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { LinearProgress } from '@rneui/themed';
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
        <View className="flex  w-[79%] h-[14.5%] ">
          
          <View className="flex w-full h-[70%] "/>

          <View className="flex items-end justify-end w-full h-[30%]">
            <Button size="lg" type="clear" onPress={onClose}></Button>
          </View>

        </View>
        <View className="flex justify-top pt-12 h-[90%] w-full bg  items-center relative">
          <View className="mt-2  h-[27%] w-[80%] border-2 border-solid border-modal_blue_board bg bg-modal_blue rounded-3xl "/>
          <View className="ml-4 h-[25%] w-[80%] border-2 border-solid  bg bg-white rounded-3xl z-50 absolute">
            <View className="flex items-center h-full w-full">
              
              <View className="flex justify-between items-center w-[70%]  h-1/3  ">
                <View className="mt-1">
                  <Text className=" text-xl">Hoje</Text>
                </View>
                
                <LinearProgress animation={false} color="#2859C5" value={0.30} style={{height:"30%",borderWidth:3,   borderRadius: 10, backgroundColor: "rgba(0, 0, 0, 0)", borderColor:"#8FBFFA"}}></LinearProgress>
              </View>
              
              <View className="mt-2 flex justify-end pt-2 w-full h-[60%] ">
                <View className="flex justify-between bg w-full h-[85%] ">
                  {atividades.map((atividade, index) => (
                    <View
                      key={index}
                      className="flex flex-row justify-between items-center"
                    >
                      <View className="pl-4  h-full w-1/2">
                        <Text className="">{atividade}</Text>
                      </View>
                        <View className="flex items-end pr-2 h-full w-1/2 ">
                          <Button onPress={onNext} type="clear" className="flex justify-center rounded-xl h-[20px] border border-solid border-modal_blue_board"  >
                            <Text className=" text-gray_button">Iniciar</Text>
                          </Button>
                        </View>
                    </View>
                  ))}
                </View>
                
              </View>
            </View>
            
           
          </View>
        </View>
      </View>
    </Modal>
  );
};
