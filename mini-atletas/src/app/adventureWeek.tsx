"use client";
import React, { useEffect, useState } from "react";
import Atividades from "../components/adventures/daily"


function Page() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Atividades atividades={["Xadrez", "Pedalar", "Pular corda"]} day={'2'} color={"bg-yellow-200"}/>
    </div>
  );
}

export default Page;