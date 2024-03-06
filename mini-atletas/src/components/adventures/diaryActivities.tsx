"use client";
import React, { useState } from 'react';
import HiddeIcon from '../svgs/adventureWeek/hidde';
import ChessKinight from '../svgs/adventureWeek/chessKinight'
import Atividades from './modal-atividades-diarias';
import SampleIcon from '../svgs/adventureWeek/sample';
import { Card } from '../ui/card';
import Ball from '../svgs/adventureWeek/ball'
import Bar from '../svgs/adventureWeek/bar'
import Snorkle from '../svgs/adventureWeek/snorkle'
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button';
import { View, Text, Pressable ,TouchableOpacity  } from 'react-native';

export const DiaryActivies = () =>{
    const [state,setState] = useState(false);

    const handleClickIcon = () => {
        setState(!state);
        console.log('oi')
    };

    return(
        <View className="flex flex-col h-full w-full items-center">
            <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Bar></Bar>  
                    </AlertDialogTrigger>
                    <AlertDialogContent className='bg-white h-[65%] '>
                        <View className="flex flex-col h-full w-full items-center">
                        <View className="mb-5">
                                <AlertDialogCancel onClick={handleClickIcon}>Cancel</AlertDialogCancel>
                            </View>
                            <View>
                            <Atividades atividades={["Xadrez", "Pedalar", "Pular corda"]} day={'2'} color={"bg-yellow-200"} />
                            </View>
                        </View>
                    </AlertDialogContent>
                
            </AlertDialog>

            <View>
                <View className="p-4">
                    <Card className='flex h-[120%] w-[130%] flex-col items-center bg-white border-solid border-2 border-black rounded-[1rem] transform -rotate-6' onClick={handleClickIcon}>
                        <Ball></Ball>
                        <View><Text>Dia 1</Text></View>
                    </Card>
                </View>

                <View className="p-4">
                    <Card className='flex h-[120%] w-[130%] flex-col items-center bg-white border-solid border-2 border-black rounded-[1rem] transform rotate-6'>
                        <ChessKinight></ChessKinight>
                        <View><Text>Dia 2</Text></View>
                    </Card>
                </View>

                <View className="p-4">
                    <Card className='flex h-[120%] w-[130%] flex-col items-center bg-white border-solid border-2 border-black rounded-[1rem] transform -rotate-6'>
                        <Snorkle></Snorkle>
                        <View><Text>Dia 3</Text></View>
                    </Card>
                </View>
            </View>
        </View>
        
    )
}