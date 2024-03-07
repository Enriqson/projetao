import { Modal,View, Text} from "react-native"
import React from 'react';
import { Button } from '@rneui/base';
import TerrifiedFace from '../../svgs/adventureWeek/emojeTerrified';
import SadFace from '../../svgs/adventureWeek/emojeSad';
import StraightFace from '../../svgs/adventureWeek/emojeStraight';
import HappyFace from '../../svgs/adventureWeek/emojeHappy';
import SparksFace from '../../svgs/adventureWeek/emojeSparks';

export const ModalFeedback = ( {stateModal, onClose, onNext, atividade}: { stateModal: boolean, onClose: () => void, onNext?: () => void, atividade: string}) =>{
    return(
        <Modal animationType="fade" transparent={true} visible={stateModal}>
            <View className="flex justify-top items-center h-full w-full">
                <View className="flex justify-end w-[79%] h-[13.5%]">
                    <View className="flex items-end justify-end w-full h-full">
                        <Button size="lg" type="clear" onPress={onClose}></Button>
                    </View>
                </View>
                <View className="flex justify-top pt-12 h-[90%] w-[80%]">
                    <View className="h-[40%] w-full border border-solid bg bg-white rounded-3xl flex justify-center items-center ">

                        <Text>O quanto voce gostou?</Text>

                        <View className='flex flex-row'>
                            <View className=''><TerrifiedFace></TerrifiedFace></View>
                            <View className=''><SadFace></SadFace></View>
                            <View className=''><StraightFace></StraightFace></View>
                            <View className=''><HappyFace></HappyFace></View>
                            <View className=''><SparksFace></SparksFace></View>
                        </View>
                        
                        <Button onPress={onNext} className='rounded-xl '>Finalizar</Button>
                        
                    </View>
                </View>
            </View>
        </Modal>
    )
}