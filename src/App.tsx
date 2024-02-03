import React, { useState } from 'react'
import './App.css'
import {Reloj} from "./components/Reloj.tsx";
import {InputText} from "./components/InputText.tsx";
import {Efect} from "./components/Efect.tsx";
import {Context} from "./components/Context.tsx";
import {Hoc} from "./components/Hoc.tsx";

function App() {

  return (
    <>
       <Reloj/>
        <InputText/>
        <Efect/>
        <Context/>
        <Hoc />
    </>
  )
}

export default App
