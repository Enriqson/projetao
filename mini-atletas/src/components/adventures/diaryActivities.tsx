"use client";
import React, { useEffect, useState } from 'react';
import HiddeIcon from '../svgs/adventureWeek/hidde';
import SampleIcon from '../svgs/adventureWeek/sample';
import Dia1 from '../svgs/adventureWeek/dia1';
import Dia2 from '../svgs/adventureWeek/dia2';
import Dia3 from '../svgs/adventureWeek/dia3';
import { View, Text } from 'react-native';
import { Button } from '@rneui/base';
import { ModalActivitiesStart } from './modais/modalActivitiesStart';
import { ModalStart } from './modais/modalStart';
import { ModalOnGoing } from './modais/modalOnGoing'
import { ModalFeedback } from './modais/modalFeedback'
import { useLocalSearchParams } from 'expo-router';

export const DiaryActivies = () => {
    
    const { isRedirect } = useLocalSearchParams();
    const [stateDiaryActivities, setStateDiaryActivities] = useState(false);
    const [atividade, setAtividade] = useState();
    const [statesModals, setStateModals] = useState<boolean[]>(Array.from({ length: 5 }, () => false));

    const showModal = (index: number) => {
        setStateDiaryActivities(!stateDiaryActivities);
        const newStateModals = [...statesModals];
        newStateModals[index] = !newStateModals[index];
        setStateModals(newStateModals);
        console.log("entrei");

    };

    const closeModal = (indexToclose: number, indexToOpen: number) => {

        const newStateModals = [...statesModals];
        newStateModals[indexToclose] = false;
        newStateModals[indexToOpen] = true;
        setStateModals(newStateModals);
    };
    useEffect(()=>{
        if(isRedirect=='true'){
            showModal(0)
        }
    },[])
    return (
        <View className="flex flex-col h-full w-full items-center">
            <View className='absolute justify-end h-[6.5%] w-5/6  bg  mt-8 bg-transparent border-solid border-modal_blue_board border-2 border-blue-600 rounded-[2rem] z-0 ' />
            <View className='relative  h-[6.6%] w-5/6  bg  mt-6 bg-white border-solid  border-2  rounded-[2rem] z-1'>
                <View className='flex flex-row items-center h-full justify-between pl-2'>
                    <Text>Atividades diárias</Text>
                    <Button type='clear' title='test' onPress={() => showModal(0)}>
                        {stateDiaryActivities ? <SampleIcon /> : <HiddeIcon />}
                    </Button>
                </View>
            </View>

            <View className='flex-col w-3/4 lg:w-1/5 pt-8'>
                <View className='items-start'>
                    <Dia1></Dia1>
                </View>

                <View className='items-end'>
                    <Dia2></Dia2>
                </View>

                <View className='items-start'>
                    <Dia3></Dia3>
                </View>
            </View>


            <View className='h-full w-full'>
                <ModalActivitiesStart stateModal={statesModals[0]} onClose={() => showModal(0)} onNext={async () => closeModal(0, 1)} atividades={['Futebol', 'Xadrez', 'Pular Corda']} setAtividade={setAtividade} stateDiaryActivities={stateDiaryActivities} />
            </View>

            <View className='h-full w-full'>
                <ModalStart stateModal={statesModals[1]} onClose={async () => showModal(1)} onNext={async () => closeModal(1, 2)} atividade={atividade} stateDiaryActivities={stateDiaryActivities} />
            </View>

            <View className='h-full w-full'>
                <ModalOnGoing stateModal={statesModals[2]} onClose={() => showModal(2)} onNext={async () => closeModal(2, 3)} atividade={atividade} stateDiaryActivities={stateDiaryActivities} />
            </View>

            <View className='h-full w-full'>
                <ModalFeedback stateModal={statesModals[3]} onClose={() => showModal(3)} onNext={async () => closeModal(3, 4)} atividade={atividade} stateDiaryActivities={stateDiaryActivities} />
            </View>


        </View>
    )
}