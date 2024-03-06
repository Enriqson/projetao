import React, { useEffect, useState } from 'react';
import TerrifiedFace from '../svgs/adventureWeek/emojeTerrified';
import SadFace from '../svgs/adventureWeek/emojeSad';
import StraightFace from '../svgs/adventureWeek/emojeStraight';
import HappyFace from '../svgs/adventureWeek/emojeHappy';
import SparksFace from '../svgs/adventureWeek/emojeSparks';
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import Ball from '../svgs/adventureWeek/ball';
import ProgressBar from '../svgs/adventureWeek/progressBar';
import { View, Text, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Feedback = ({ atividade }) => {
  const navigation = useNavigation();
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
                <View className='flex flex-row '>
                  <View className='p-4'><TerrifiedFace></TerrifiedFace></View>
                  <View className='p-4'><SadFace></SadFace></View>
                  <View className='p-4'><StraightFace></StraightFace></View>
                  <View className='p-4'><HappyFace></HappyFace></View>
                  <View className='p-4'><SparksFace></SparksFace></View>
                </View>

                <AlertDialogCancel className='rounded-xl'>
                                Cancel
                </AlertDialogCancel>
                
            </AlertDialogContent>
        </AlertDialog> 
    </View>
  );
};

export default Feedback

