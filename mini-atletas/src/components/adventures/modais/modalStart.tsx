import { Modal, View, Text, Pressable } from "react-native";
import React from "react";
import Ball from "@/components/svgs/activities/Ball";
import Chess from "@/components/svgs/activities/Chess";
import Rope from "@/components/svgs/activities/Rope";
import HiddeIcon from "@/components/svgs/adventureWeek/hidde";
import SampleIcon from "@/components/svgs/adventureWeek/sample";
import { TAILWIND_THEME } from "@/utils";
import Trophy from "@/components/svgs/misc/Trophy";
export const ModalStart = ({
    stateModal,
    onClose,
    onNext,
    atividade,
    stateDiaryActivities,
}: {
    stateModal: boolean;
    onClose: () => void;
    onNext?: () => void;
    atividade: string;
    stateDiaryActivities: boolean;
}) => {
    function renderizarImagem() {
        if (atividade === "Futebol") {
            return { componente: <Ball />, color: TAILWIND_THEME.colors.blue, colorBorder: TAILWIND_THEME.colors.blue }
        } else if (atividade === "Xadrez") {
            return { componente: <Chess />, color: TAILWIND_THEME.colors.green, colorBorder: TAILWIND_THEME.colors.green }
        } else {
            return { componente: <Rope />, color: TAILWIND_THEME.colors.yellow, colorBorder: TAILWIND_THEME.colors.yellow }
        }
    }
    const { componente, color, colorBorder } = renderizarImagem()
    return (
        <Modal animationType="fade" transparent={true} visible={stateModal}>
            <View className="w-full h-[4.0rem]" />
            <View className="flex justify-top items-center h-full w-full ">
                <View className='absolute justify-end h-[7.2%] mt-8 w-5/6  bg bg-modal_blue_board   border-solid border-modal_blue_board border-2  rounded-[2rem]' />
                <View className='relative  h-[7.2%] w-5/6  bg  mt-6 bg-white border-solid  border-2  rounded-[2rem]'>
                    <View className='flex flex-row items-center h-full justify-between pl-2'>
                        <Text>Atividades diárias</Text>
                        <View className="pr-3">
                            <Pressable
                                onPress={onClose}
                                style={({ pressed }) => ({
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: 20,
                                    borderWidth: 1,
                                    borderColor: 'black',

                                })}
                            >
                                {stateDiaryActivities ? <SampleIcon /> : <HiddeIcon />}
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View className="flex  pt-8  h-full w-full bg relative">
                    <View className="flex items-center w-full h-[40%]">
                        <View className=" mt-[10px] h-full w-[80%] border-2 border-solid rounded-3xl " style={{ backgroundColor: color, borderColor: colorBorder }} />
                        <View className=" h-full w-[80%] border-2 border-solid bg bg-white rounded-3xl z-50 absolute">
                            <View className="flex items-center justify-center h-full w-full ">
                                <View className="flex items-center w-full h-full ">
                                    <Text className="text-2xl h-1/4 mt-3">{atividade}</Text>

                                    <View className=' h-1/3'>
                                        {componente}
                                    </View>
                                    <View className="relative h-1/3  w-full flex">
                                        <View className=" flex items-center h-full justify-end  pb-3 w-full -z-20">
                                            <View className=" flex justify-center items-center h-[60%] w-3/5 border-b border-l border-r border-modal_blue_board rounded-3xl  " />
                                        </View>
                                        <View className=" absolute flex items-center h-full justify-end  pb-4 w-full -z-10">
                                            <View className=" flex justify-center items-center h-[60%] w-3/5 border  rounded-3xl">
                                                <Pressable
                                                    onPress={onNext}
                                                    style={({ pressed }) => ({
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: 10,
                                                        height: 40,
                                                        width: 60,
                                                        borderWidth: 1,
                                                        borderColor: 'black',
                                                    })}
                                                >
                                                    <View className="w-[12rem] h-full items-center justify-center">
                                                        <Text style={{ color: '#6B7280' }} >Iniciar</Text>
                                                    </View>

                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                    <View />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
