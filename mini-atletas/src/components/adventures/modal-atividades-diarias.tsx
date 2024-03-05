import React, { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Ball from './ui/ball'
import Dinheiro from './ui/payment'
import Trofeu from './ui/trofeu'
import Boy from './ui/boy'
import AlarmClock from './ui/alarmClock'
import { View, Text  } from 'react-native';
import AtividadeIniciar from './modal-iniciar-atividade';

const Atividades = ({ atividades, day, color }: {atividades: string[], day: string, color:string}) => {
  return (
    <View className="flex justify-center w-5/6 h-full">

          <View className="flex justify-center flex-row"><Boy></Boy></View>
            <View className='flex flex-col h-[51%] w-full justify-end p-2 mt-4'>
              
              <View className='bg bg-black'></View>
              {atividades.map((atividade, index) => (
                <View key={index} className="flex flex-row justify-between items-center">

                  <View className=''> 
                    <Text className=''>{atividade}</Text>
                  </View>
                 
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline"  className='rounded-xl h-1/2'>Iniciar</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className='bg-white'>
                        <AtividadeIniciar atividade={atividade}></AtividadeIniciar>
                        <View className='flex items-center justify-center'>
                          <AlertDialogCancel className='w-1/2 rounded-xl'>Cancel</AlertDialogCancel>
                        </View>
                    </AlertDialogContent>
                      
                  </AlertDialog>
                </View>
              ))}
          </View>   
    </View>
  );
};

export default Atividades

