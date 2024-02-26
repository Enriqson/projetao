"use client";
import React, { useEffect, useState } from "react";
import Atividades from "../components/adventures/daily"


function Page() {
  return (
    <div>
    <h1>Ola mundo</h1>
    <Atividades atividades={["Xadrez", "Pedalar", "Pular corda"]} day={'2'} color={"bg-yellow-200"}/>
    </div>
  );
}

export default Page;