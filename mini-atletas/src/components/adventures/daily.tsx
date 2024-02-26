import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const Atividades = ({ atividades, day, color }: {atividades: string[], day: string, color:string}) => {
  return (
    <div className="h-[300px] w-[300px]">
      <Card className='h-[300px] w-[300px]'>
        <CardHeader><CardTitle className='text-center'>Dia {day}</CardTitle></CardHeader>
      <img src='../public/Chess-Knight.png' alt="Logo" className="h-8 mr-2" />
      {atividades.map((atividade, index) => (
        <div key={index} className="flex justify-between items-center">
          <p>{atividade}</p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className='rounded-xl'>Iniciar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
    </Card></div>
  );
};

export default Atividades

