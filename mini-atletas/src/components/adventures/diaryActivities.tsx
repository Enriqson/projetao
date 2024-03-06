"use client";
import React, { useState } from 'react';
import HiddeIcon from '../svgs/adventureWeek/hidde';
import ChessKinight from '../svgs/adventureWeek/chessKinight'
import Atividades from './modal-atividades-diarias';
import SampleIcon from '../svgs/adventureWeek/sample';
import { Card } from '../ui/card';
import Ball from '../svgs/adventureWeek/ball'
import Bar from '../svgs/adventureWeek/bar'
import BarTest from '@/components/svgs/adventureWeek/Bar-test'
import Snorkle from '../svgs/adventureWeek/snorkle'
import { View, Text} from 'react-native';
import { Button } from '@rneui/base';

export const DiaryActivies = () =>{
    const [stateDiaryActivities,setStateDiaryActivities] = useState(false);
    const [statesModals, setStateModals] = useState<Boolean[]>(Array.from({length:5}, ()=>false));
    
    const handleClickButton = () => {
        setStateDiaryActivities(!stateDiaryActivities);
    };

    return(
        <View className="flex flex-col h-full w-full items-center">
            <View className='absolute justify-end h-[6.5%] w-5/6  bg  mt-8 bg-sky-400 border-solid  border-2 border-blue-600 rounded-3xl z-0 '/>
            <View className='relative  h-[6.5%] w-5/6  bg  mt-6 bg-white border-solid  border-2 border-blue-600 rounded-3xl z-1'>
                <View className='flex flex-row items-center h-full justify-between pl-2'>
                    <Text>Atividades diárias</Text>
                    <Button type='clear' title='test' onPress={handleClickButton}>
                        {stateDiaryActivities ? <SampleIcon/> : <HiddeIcon/>}
                    </Button>
                </View>
                
            </View>
        </View>
        
    )
}