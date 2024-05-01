import React from "react"
import {useState} from 'react'

export const useBool=(data=false):[boolean,Function]=>{
    const [bool,setBool]=useState<boolean>(data)
    const change=()=>setBool(!bool)
    return [bool,change]

}