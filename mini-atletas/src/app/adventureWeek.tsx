"use client";
import React, { useEffect, useState } from "react";
import Atividades from "../components/adventures/daily"
import { DiaryActivies } from "@/components/adventures/diaryActivities";
import BackGround from '../components/adventures/ui/background'

function Page() {
  return (
    <div className="flex flex-col  items-center bg h-full w-full ">
      <div className="w-full justify-center text-center mt-4">
        <h1 className="text-blue-600 ">Minhas aventuras</h1>
      </div>
      <DiaryActivies />
    </div>
  );
}

export default Page;