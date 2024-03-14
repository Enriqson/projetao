import { View, Text } from "react-native"
import React from "react";
import HiddeIcon from "../svgs/adventureWeek/hidde"
import SampleIcon from "../svgs/adventureWeek/sample"
import { Button } from '@rneui/base';

export const SelectBar = ({stateButton,height ,showModal}:{stateButton:boolean,height:string ,showModal:(modalNumber:number)=>void}) => {
    return (
        <View className={`relative h-${height}  w-5/6 bg mt-6 bg-white border-solid border-2 rounded-[2rem] z-1`}>
            <View className='flex flex-row items-center h-full justify-between pl-6'>
                <Text>Atividades diárias</Text>
                <View>
                    <Button type='clear' title='test' onPress={()=>showModal(0)}>
                        {stateButton ? <SampleIcon/> : <HiddeIcon/>}
                    </Button>
                </View>
                
            </View>
        </View>
    );
};