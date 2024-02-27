"use client";
import { useState } from 'react';
import HiddeIcon from './ui/hidde';
import Atividades from './daily';
import SampleIcon from './ui/sample';

export const DiaryActivies = () =>{
    const [state,setState] = useState(false);

    const handleClickIcon = () => {
        setState(!state);
    };

    return(
        <div className="flex flex-col h-full w-full items-center">
            <div className="relative h-[8.8%] w-[90%] bg bg-blue-200 border-solid border-2 border-blue-700 rounded-[4rem] mt-8 z-2">
            </div>

            <div className="flex absolute h-[7%] w-[90%] bg bg-white border-solid border-2 border-black rounded-[4rem] mt-8 z-3 items-center">
                <p className="ml-8 w-1/2">Atividades diárias</p>
                <div className='flex justify-end w-1/2 mr-4' onClick={handleClickIcon}>
                    {state ? <SampleIcon/> : <HiddeIcon/>}
                </div>

            </div>

            <div>
                {state && <Atividades atividades={["Xadrez", "Pedalar", "Pular corda"]} day={'2'} color={"bg-yellow-200"}/>}
            </div>

            
            
        </div>
        
    )
}