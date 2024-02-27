"use client";
import React, { useState } from 'react';
import HiddeIcon from './ui/hidde';
import ChessKinight from './ui/chessKinight'
import Atividades from './daily';
import SampleIcon from './ui/sample';
import { Card } from '../ui/card';
import Ball from './ui/ball'
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button';

export const DiaryActivies = () =>{
    const [state,setState] = useState(false);

    const handleClickIcon = () => {
        setState(!state);
    };

    return(
        <div className="flex flex-col h-full w-full items-center">
            <AlertDialog>
            <div className="relative h-[8.8%] w-[90%] bg bg-blue-200 border-solid border-2 border-blue-700 rounded-[4rem] mt-8 z-2">
            </div>

            <div className="flex absolute h-[7%] w-[90%] bg bg-white border-solid border-2 border-black rounded-[4rem] mt-8 z-3 items-center">
                <p className="ml-8 w-1/2">Atividades diárias</p>
                <AlertDialogTrigger asChild>
                <div className='flex justify-end w-1/2 mr-4' onClick={handleClickIcon}>
                    {state ? <SampleIcon/> : <HiddeIcon/>}
                </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='bg-white h-[50%]'>
                    <div className="flex flex-col h-full w-full items-center h-[50%]">
                        <Atividades atividades={["Xadrez", "Pedalar", "Pular corda"]} day={'2'} color={"bg-yellow-200"} />
                        <AlertDialogCancel onClick={handleClickIcon} >Cancel</AlertDialogCancel>
                    </div>
                </AlertDialogContent>

            </div>
            </AlertDialog>
            {/*state && <Atividades atividades={["Xadrez", "Pedalar", "Pular corda"]} day={'2'} color={"bg-yellow-200"} />*/}

            <div>
                <div className="p-4">
                <Card className='flex h-[120%] w-[130%] flex-col items-center bg bg-white border-solid border-2 border-black rounded-[1rem] transform -rotate-6' onClick={handleClickIcon}>
                    <Ball></Ball>
                    <div><p>Dia 1</p></div>
                </Card>
                </div>

            <div className="p-4">
                <Card className='flex h-[120%] w-[130%] flex-col items-center bg bg-white border-solid border-2 border-black rounded-[1rem] transform rotate-6'>
                    <ChessKinight></ChessKinight>
                    <div><p>Dia 2</p></div>
                </Card>
            </div>
            </div>

            
            
        </div>
        
    )
}