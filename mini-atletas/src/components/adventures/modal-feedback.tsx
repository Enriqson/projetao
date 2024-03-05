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

const Feedback = ({ atividade }) => {

  return (
    <View className='flex flex-col items-center justify-center'>
        <AlertDialog>
            <Text>{atividade}</Text>

            <Text>voce está jogando</Text>
            <ProgressBar></ProgressBar>
            <Ball></Ball>

            <AlertDialogTrigger asChild>
                <Button variant="outline" className='rounded-xl'>Finalizar</Button>
            </AlertDialogTrigger>

            <AlertDialogContent className='bg-white flex flex-col items-center justify-center'>
                <Text>COLOQUE TELA DE FEEDBACK AQUI</Text>

                <AlertDialogCancel className='rounded-xl'>
                                Cancel
                </AlertDialogCancel>
                
            </AlertDialogContent>
        </AlertDialog> 
    </View>
  );
};

export default Feedback

