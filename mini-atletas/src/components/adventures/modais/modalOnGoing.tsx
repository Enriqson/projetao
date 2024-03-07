import { Modal,View, Text} from "react-native"
import React from 'react';
import { Button } from '@rneui/base';
import Ball from '../../svgs/adventureWeek/ball';
import ProgressBar from '../../svgs/adventureWeek/progressBar';

export const ModalOnGoing = ( {stateModal, onClose, onNext, atividade}: { stateModal: boolean, onClose: () => void, onNext?: () => void, atividade: string}) =>{
    return(
        <Modal animationType="fade" transparent={true} visible={stateModal}>
            <View className="flex justify-top items-center h-full w-full">
                <View className="flex justify-end w-[79%] h-[13.5%]">
                    <View className="flex items-end justify-end w-full h-full">
                        <Button size="lg" type="clear" onPress={onClose}></Button>
                    </View>
                </View>
                <View className="flex justify-top pt-12 h-[90%] w-[80%]">
                    <View className="h-[40%] w-full border border-solid bg bg-white rounded-3xl">
                        <Text>MODAL 3</Text>

                        <View className="flex justify-center items-center">
                            <Text>{atividade}</Text>

                            <View className='pt-3'>
                                <Text>voce está jogando</Text>
                            </View>

                            <View className='pt-3'>
                                <ProgressBar></ProgressBar>
                            </View>
                            
                            <View className='pt-3'>
                               <Ball></Ball> 
                            </View>
                            
                            <View className='pt-3'>
                                <Button onPress={onNext} className='rounded-xl '>Finalizar</Button>
                            </View>
                            
                        </View>
                        
                    </View>
                </View>
            </View>
        </Modal>
    )
}