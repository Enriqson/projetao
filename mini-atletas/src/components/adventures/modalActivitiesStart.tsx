import { Modal,View, Text} from "react-native"
import React from 'react';
import { Button } from '@rneui/base';

export const ModalActivitiesStart = ( {stateModal, onClose, onNext}: { stateModal: boolean, onClose: () => void, onNext?: () => void }) =>{
    return(
        <Modal animationType="fade" transparent={true} visible={stateModal}>
            <View className="flex justify-top items-center h-full w-full">
                <View className="flex justify-end w-[79%] h-[13.5%] ">
                    <View className="flex items-end justify-end w-full h-full">
                        <Button size="lg" type="clear" onPress={onClose}></Button>
                    </View>
                </View>
                <View className="flex justify-top pt-12 h-[65%] w-[80%] ">
                    <View className="h-[40%] w-full border border-solid ">
                        <Text>MODAL 1</Text>
                        <Button onPress={onNext}>Modal 2</Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}