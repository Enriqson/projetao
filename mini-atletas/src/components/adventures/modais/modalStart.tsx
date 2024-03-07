import { Modal,View, Text} from "react-native"
import React from 'react';
import { Button } from '@rneui/base';
import Ball from '../../svgs/adventureWeek/ball';
import Trofeu from '../../svgs/adventureWeek/trofeu';
import Dinheiro from '../../svgs/adventureWeek/payment';
import AlarmClock from '../../svgs/adventureWeek/alarmClock';

export const ModalStart = ( {stateModal, onClose, onNext , atividade}: { stateModal: boolean, onClose: () => void, onNext?: () => void, atividade: string}) =>{
    return(
        <Modal animationType="fade" transparent={true} visible={stateModal}>
            <View className="flex justify-top items-center h-full w-full">
                <View className="flex justify-end w-[79%] h-[13.5%] ">
                    <View className="flex items-end justify-end w-full h-full">
                        <Button size="lg" type="clear" onPress={onClose}></Button>
                    </View>
                </View>
                <View className="flex justify-top pt-12 h-[90%] w-[80%] ">
                    <View className="h-[40%] w-full border border-solid bg bg-white rounded-3xl">
                        <Text>MODAL 2</Text>

                        <View className="flex flex-col items-center justify-center">
                            <Text>{atividade}</Text>
                            <Ball></Ball>
                        </View>

                        <View className='flex flex-row items-center justify-center'>
                            <View className="p-3"><Trofeu></Trofeu></View>
                            <View className="p-3"><Dinheiro></Dinheiro></View>
                            <View className="p-3"><AlarmClock></AlarmClock></View>
                        </View>

                        <View className="flex justify-center items-center">
                            <Button onPress={onNext} className='rounded-xl '>Iniciar</Button>
                        </View>
                        
                    </View>
                </View>
            </View>
        </Modal>
    )
}