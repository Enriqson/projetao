import React from 'react';
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
                      <View className="flex flex-col items-center justify-center">
                        <AlertDialogTitle>{atividade}</AlertDialogTitle>
                        <Ball></Ball>
                      </View>

                        <View className='flex flex-row items-center justify-center'>
                          <View className="p-3"><Trofeu></Trofeu></View>
                          <View className="p-3"><Dinheiro></Dinheiro></View>
                          <View className="p-3"><AlarmClock></AlarmClock></View>
                        </View>
                        <View className='flex items-center justify-center'><Button variant="outline" className='rounded-xl h-5/4 w-1/2'>Iniciar</Button></View>
                        <View className='flex items-center justify-center'><AlertDialogCancel className='w-1/2'>Cancel</AlertDialogCancel></View>

                    </AlertDialogContent>
                      
                  </AlertDialog>
                </View>
              ))}
          </View>   
    </View>
  );
};

export default Atividades

