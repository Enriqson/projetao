import React, { useEffect, useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Ball from './ui/ball'
import Dinheiro from './ui/payment'
import ProgressBar from './ui/progressBar'
import Trofeu from './ui/trofeu'
import Boy from './ui/boy'
import AlarmClock from './ui/alarmClock'
import { View, Text, Pressable  } from 'react-native';
import Feedback from './modal-feedback';

const AtividadeIniciar = ({ atividade }) => {

  return (
    <View className="flex justify-center h-full">

        <AlertDialog>
            <View className="flex flex-col items-center justify-center">
                <Text>{atividade}</Text>
                <Ball></Ball>
            </View>

            <View className='flex flex-row items-center justify-center'>
                <View className="p-3"><Trofeu></Trofeu></View>
                <View className="p-3"><Dinheiro></Dinheiro></View>
                <View className="p-3"><AlarmClock></AlarmClock></View>
            </View>

            <View className='flex items-center justify-center'>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className='rounded-xl h-5/4 w-1/2'>Iniciar</Button>
                </AlertDialogTrigger>

                <AlertDialogContent className='bg-white flex flex-col items-center justify-center'>
                    
                    <Feedback atividade={atividade}></Feedback>

                    <View className='flex items-center justify-center'>
                        <AlertDialogCancel className='rounded-xl'>
                                Pausar
                        </AlertDialogCancel>
                    </View>

                </AlertDialogContent>
            </View>
        </AlertDialog>
    </View>   
  );
};

export default AtividadeIniciar

