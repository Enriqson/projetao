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
import { ModalActivitiesStart } from './modalActivitiesStart';
import { ModalStart } from './modalStart';
import { ModalOnGoing } from './modalOnGoing' 
import { ModalFeedback } from './modalFeedback' 

export const DiaryActivies = () =>{
    const [stateDiaryActivities,setStateDiaryActivities] = useState(false);
    const [statesModals, setStateModals] = useState<boolean[]>(Array.from({length:5}, ()=>false));
    
    const showModal = (index:number) => {
        setStateDiaryActivities(!stateDiaryActivities);
        const newStateModals = [...statesModals];
        newStateModals[index] = !newStateModals[index];
        setStateModals(newStateModals);
        
    };

    const closeModal = (indexToclose:number,indexToOpen:number) =>{
        
        const newStateModals = [...statesModals];
        newStateModals[indexToclose] = false;
        newStateModals[indexToOpen] = true;
        setStateModals(newStateModals);
        console.log(statesModals);
        
    }


    return(
        <View className="flex flex-col h-full w-full items-center">
            <View className='absolute justify-end h-[6.5%] w-5/6  bg  mt-8 bg-sky-400 border-solid  border-2 border-blue-600 rounded-3xl z-0 '/>
            <View className='relative  h-[6.5%] w-5/6  bg  mt-6 bg-white border-solid  border-2 border-blue-600 rounded-3xl z-1'>
                <View className='flex flex-row items-center h-full justify-between pl-2'>
                    <Text>Atividades diárias</Text>
                    <Button type='clear' title='test' onPress={()=>showModal(0)}>
                        {stateDiaryActivities ? <SampleIcon/> : <HiddeIcon/>}
                    </Button>
                </View>
            </View>


            <View className='h-full w-full'>
                <ModalActivitiesStart stateModal={statesModals[0]} onClose={()=>showModal(0)} onNext={async ()=>closeModal(0,1)} atividades={['Futebol', 'Volei', 'Basquete']} />
            </View>

            <View className='h-full w-full'>
                <ModalStart stateModal={statesModals[1]} onClose={()=>showModal(1)} onNext={async ()=>closeModal(1,2)} atividade='futebol'/>
            </View>

            <View className='h-full w-full'>
                <ModalOnGoing stateModal={statesModals[2]} onClose={()=>showModal(2)} onNext={async ()=>closeModal(2,3)} atividade='futebol'/>
            </View>

            <View className='h-full w-full'>
                <ModalFeedback stateModal={statesModals[3]} onClose={()=>showModal(3)} onNext={async ()=>closeModal(3,4)} atividade='futebol'/>
            </View>

            
        </View>
    )
}