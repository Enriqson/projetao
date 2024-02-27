import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"


const Atividades = ({ atividades, day, color }: {atividades: string[], day: string, color:string}) => {

  return (
    <div className="flex justify-center w-5/6 h-full">
      <div className='absolute justify-end h-[23.5%] w-5/6 bg bg-blue-200 mt-8 border-solid border-2 border-blue-600 rounded-xl z-0 mr-2'>
      </div>
      <div className='absolute h-[25%] flex justify-end mt-4 w-5/6  '>
        <Card className=' flex flex-col w-[98%] h-[95%] bg bg-white border-solid border-2 rounded-xl border-black z-1'>
            <CardHeader><CardTitle className='text-center'>Dia {day}</CardTitle></CardHeader>
            <div className='w-full flex justify-center'><p>PUT BAR</p></div>
            <div className='flex flex-col  h-[51%] w-full justify-end p-2 mt-4 bg '>
              {atividades.map((atividade, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p>{atividade}</p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline"  className='rounded-xl h-1/2'>Iniciar</Button>
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
            </div>
          </Card>
      </div>
          
    </div>
      
  );
};

export default Atividades

